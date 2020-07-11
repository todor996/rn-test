


import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function LoadingReducer(state=initialState.loading,action){
    switch(action.type){
        case types.LOADING:
            return action.loading;
        default:
            return state;
    }
}