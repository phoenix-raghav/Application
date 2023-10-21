import {combineReducers} from 'redux';
import  * as reducers from './allReducers';

export const rootReducer = combineReducers({
    heading: reducers.changeHeading,
    disableBtn: reducers.disableButton,
    accountNo: reducers.changeAccNo,
    mode : reducers.changeMode,
    userDetails : reducers.userDetails
})