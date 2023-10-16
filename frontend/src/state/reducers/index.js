import {combineReducers} from 'redux';
import  * as reducers from './allReducers';

export const rootReducer = combineReducers({
    heading: reducers.changeHeading
})