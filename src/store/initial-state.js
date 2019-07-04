import { fromJS } from 'immutable';

const initialState = {
    apiCalls: {},
    form: {
        inputField: '',
    }
};

export default fromJS(initialState);
