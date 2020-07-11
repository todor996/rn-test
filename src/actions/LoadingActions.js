

import * as types from './actionTypes';


export function loading(loading){
    return {
        type:types.LOADING,
        loading
    }
}