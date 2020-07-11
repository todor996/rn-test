
import * as types from './actionTypes';
import Constants from 'constants';
import axios from 'axios';

function getMembersSuccess(data){
    return{
        type:types.GET_MEMBERS_SUCCESS,
        data
    }
}

export function getMembers(data){
    return dispatch=>{
        let url = `${Constants.URL.ctb}members`;
        //console.log(url)
        axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        }).then(response=>{
            //console.log(response);
            dispatch(getMembersSuccess(response.data))
        }).catch(err=>{
            //console.log(err)
        })
    }
}