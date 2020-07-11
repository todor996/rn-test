
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PageMobileAppReducer(state=initialState.pageMobileApp,action){
    switch(action.type){
        case types.GET_PAGE_MOBILE_APP_SUCCESS:
            return JSON.parse(action.data);
        default:
            return state;
    }
}