import {fromJS} from 'immutable';

export const API_CALL_STARTED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        isLoading: true,
        isLoaded: false,
        isError: false,
        request: action.request
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_FINISHED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        isLoading: false,
        isLoaded: true,
        isError: false,
        ...action.response
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_FAILED = (state, action) => {
    const status = {
        timestamp: action.timestamp,
        isLoading: false,
        isLoaded: false,
        isError: true,
        ...action.error
    };

    return state.setIn(['apiCalls', action.stateKey], fromJS(status));
};

export const API_CALL_RESET = (state, action) => {
    return state.removeIn(['apiCalls', action.stateKey]);
};
