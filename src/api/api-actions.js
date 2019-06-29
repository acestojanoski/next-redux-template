import { DateTime } from 'luxon';

import {
    API_CALL_STARTED,
    API_CALL_FINISHED,
    API_CALL_FAILED,
    API_CALL_RESET
} from './api-action-types';

export const apiCallStarted = (
    stateKey,
    request,
    timestamp = DateTime.local()
) => ({
    type: API_CALL_STARTED,
    request,
    stateKey,
    timestamp
});

export const apiCallFinished = (
    stateKey,
    response,
    timestamp = DateTime.local()
) => ({
    type: API_CALL_FINISHED,
    stateKey,
    response,
    timestamp
});

export const apiCallFailed = (
    stateKey,
    error,
    timestamp = DateTime.local()
) => ({
    type: API_CALL_FAILED,
    stateKey,
    error,
    timestamp
});

export const apiCallReset = stateKey => ({
    type: API_CALL_RESET,
    stateKey,
});
