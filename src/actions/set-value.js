import { SET_VALUE } from '../constants/action-types';

export const setValue = (stateKey, value) => ({
    type: SET_VALUE,
    stateKey,
    value
});
