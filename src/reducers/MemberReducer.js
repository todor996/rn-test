

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function MemberReducer(state=initialState.members,action){
    switch(action.type){
        case types.GET_MEMBERS_SUCCESS:
            return action.data;
        default:
            return state;
    }
}