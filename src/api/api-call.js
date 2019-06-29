import axios from './axios';
import apiConfig from './api-config';
import {
    apiCallStarted,
    apiCallFinished,
    apiCallFailed
} from './api-status-actions';

const apiCall = (stateKey, request, queryParameter, queryString) => {
    if (!request) {
        request = {};
    }
    
    return (dispatch) => {
        if (
            !apiConfig[stateKey] ||
            typeof apiConfig[stateKey] === 'undefined'
        ) {
            return dispatch(apiCallFailed(
                stateKey,
                {
                    error: 'Api config error. (state key not found).'
                },
            ));
        }

        const method = apiConfig[stateKey].method;
        const url = apiConfig[stateKey].url;

        if (!method || typeof method === 'undefined') {
            return dispatch(apiCallFailed(
                stateKey,
                {
                    error: 'Api config error (method not found).'
                }
            ));
        }

        if (!url || typeof url === 'undefined') {
            return dispatch(apiCallFailed(
                stateKey,
                {
                    error: 'Api config error (url not found).'
                }
            ));
        }

        dispatch(apiCallStarted(stateKey, request));

        axios({
            url: `${url}${queryParameter ? '/' + queryParameter : ''}${queryString ? '?' + queryString : ''}`,
            method,
            data: request,
        })
            .then(response => {
                dispatch(apiCallFinished(stateKey, response));
            })
            .catch(error => {
                dispatch(apiCallFailed(stateKey, error));
            });
    }
}

export default apiCall;
