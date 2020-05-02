import { combineReducers } from 'redux';
import User from './user_reducer';

const rootReducer = combineReducers({
    User,
});

export default rootReducer;