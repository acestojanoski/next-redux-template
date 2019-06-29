import createReducer from './create-reducer';
import initialState from '../store/initial-state';
import * as apiReducers from '../api/api-reducers';

const handlers = {
    ...apiReducers,
};

export default createReducer(initialState.exampleApp, handlers);
