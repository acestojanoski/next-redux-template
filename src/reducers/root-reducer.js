import handlers from './handlers';
import initialState from '../store/initial-state';
import { objectHasProperty } from '../utils/object-has-property';

const rootReducer = (state = initialState, action) => {
    if (objectHasProperty(handlers, action.type)) {
        return handlers[action.type](state, action);
    }
    return state;
};

export default rootReducer;
