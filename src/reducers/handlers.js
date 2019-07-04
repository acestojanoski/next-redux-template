import * as apiReducers from '../api/api-reducers';
import { SET_VALUE } from './set-value';

const handlers = {
    ...apiReducers,
    SET_VALUE
};

export default handlers;
