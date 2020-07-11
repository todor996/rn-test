
import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function PostReducer(state =initialState.posts,action){
    switch(action.type){
        case types.GET_POST_PAGE_SUCCESS:
            return Object.assign({},state,{page:action.posts})
        case types.GET_POSTS_SUCCESS:
            return Object.assign({},state,{posts:action.posts})
        default:
            return state
    }
}
