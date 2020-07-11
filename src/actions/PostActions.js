import axios from 'axios';
import Constants from 'constants';
import {loading} from './LoadingActions'
import * as types from './actionTypes';  

function getPostsSuccess(posts){
    return{
        type:types.GET_POSTS_SUCCESS,
        posts
    }
}
export function getPosts(data){
    return (dispatch)=>{
        const url = `${Constants.URL.ctb}posts`
        //console.log(url)
        axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        }).then(response=>{
            dispatch(getPostsSuccess(response.data))
        }).catch(err=>{
            //console.log("ERR GET POSTS",err)
        })
    }
}

function getPostPageSuccess(posts){
    return{
        type:types.GET_POST_PAGE_SUCCESS,
        posts
    }
}
export function getPostPage(per_page){
    return (dispatch)=>{
        dispatch(loading(true))
        const url=`${Constants.URL.ctb}posts/per_page/${per_page}?key=${Constants.KeyMobileApp.key}`;
        return axios.get(url).then((response)=>{
            dispatch(getPostPageSuccess(response.data));
            dispatch(loading(false))
        }).catch((err)=>{
            //console.log(err);
        })
    }
}