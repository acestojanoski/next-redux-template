import handlers from './handlers';
import initialState from '../store/initial-state';

const rootReducer = (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
        return handlers[action.type](state, action);
    }
    return state;
};

export default rootReducer;
