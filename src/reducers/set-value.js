import { isObject } from '../utils/is-object';
import { isArray } from '../utils/is-array';
import { fromJS } from 'immutable';

export const SET_VALUE = (state, action) => {
    if (!action.stateKey) {
        return state;
    }

    const keysArray = action.stateKey.split('.');

    const valueIsObject = isObject(action.value);
    const valueIsArray = isArray(action.value);

    if (valueIsObject || valueIsArray) {
        return state.setIn(keysArray, fromJS(action.value));
    }

    return state.setIn(keysArray, action.value);
};
