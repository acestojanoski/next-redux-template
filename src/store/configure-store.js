import thunk from 'redux-thunk';
import initialState from '../store/initial-state';
import rootReducer from '../reducers/root-reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );

    return store;
};

export default configureStore;
