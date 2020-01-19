import { combineReducers } from 'redux';
import notify from './notify';

const appReducers = combineReducers({
    notify
});

export default appReducers;