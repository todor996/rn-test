

import * as types from './actionTypes';
import axios from 'axios';
import Constants from 'constants';

function getPageMobileAppSuccess(data){
    return{
        type:types.GET_PAGE_MOBILE_APP_SUCCESS,
        data
    }
}
export function getPageMobileApp(){
    return dispatch=>{
        let url = `${Constants.URL.ctb}page?key=${Constants.KeyMobileApp.key}`;
        // console.log(url)
        axios(
            {
                url,
                method:'GET',
            }
        ).then(response=>{
            // console.log(response.data);
            dispatch(getPageMobileAppSuccess(response.data))
        }).catch(err=>{
            // console.log(err)
        })
    }
}