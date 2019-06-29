import { createStore, applyMiddleware, combineReducers } from 'redux';
import initialState from '../store/initial-state';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const configureStore = () => {
    const combinedReducers = combineReducers(rootReducer);

    const store = createStore(
        combinedReducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );

    return store;
};

export default configureStore;
