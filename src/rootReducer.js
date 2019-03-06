import {combineReducers} from 'redux';
import user from './reducers/user';
import test from './reducers/test';

export default combineReducers({
    user,
    test,
});