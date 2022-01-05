import {combineReducers} from 'redux'
import authReducer from './auth/authReducer';
import testReducer from './test/testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer
})

export default rootReducer;