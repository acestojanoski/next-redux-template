import {fromJS} from 'immutable';

export const API_CALL_STARTED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        request: action.request
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_FINISHED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        ...action.response
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_FAILED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        ...action.error
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_RESET = (state, action) => {
    return state.removeIn(['apiCalls', action.stateKey]);
};
