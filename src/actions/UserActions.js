import axios from 'axios';
import Constants from 'constants';
import {loading} from './LoadingActions';
import * as types from './actionTypes';  

function loadUsers(users) {  
  return {type: types.GET_USER_SUCCESS, users};
}

export function getUsers(user_info,data) {
   	return (dispatch) => {
		dispatch(loading(true))
		const url = `${Constants.URL.ctb}user`;
		if(data!==undefined && user_info===null){
			// dispatch(loading(false));
			dispatch(loadUsers(data));
		}else{
			axios({
				method: 'POST',
				url: url,
				data:user_info,
				headers: {key: Constants.KeyMobileApp.key}
			}).then((response)=>{
				//console.log(response);
				dispatch(loadUsers(response.data))
				dispatch(loading(false))
			}).catch((err)=>{
				//console.log(err)
			})
		}
   	};
}

export function userLogoutSuccess(){
	return{
		type:types.USER_LOGOUT_SUCCESS,
	}
}

function updateUserSuccess(data){
	return {
		type:types.UPDATE_USER_SUCCESS,
		data
	}
}

export function updateUser(data,id){
	return dispatch=>{
		let url = `${Constants.URL.ctb}user/update/${id}`
		axios({
			method: 'POST',
			url: url,
			data: data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			//console.log("Update User",response);
			dispatch(updateUserSuccess(response.data))
		}).catch(err=>{
			//console.log(err)
		})
	}
}
function changeUserPasswordSuccess(status){
	return{
		type:types.CHANGE_USER_PASSWORD_SUCCESS,
		status
	}
}

export function changeUserPassword(data){
	return dispatch=>{
		let url = `${Constants.URL.ctb}user/changePassword`;
		axios({
			method:'POST',
			url:url,
			data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			//console.log(response);
			dispatch(changeUserPasswordSuccess(response.data))
			// dispatch(changeUserPasswordSuccess(''))
		}).catch(err=>{
			//console.log(err)
		})
	}
}

function registerUserSuccess(data) {  
	return {type: types.REGISTER_USER_SUCCESS, data};
  }
  
export function register(data) {
	return (dispatch) => {
		dispatch(loading(true))
		const url = `${Constants.URL.ctb}registerUser`
		return axios({
			method: 'POST',
			url: url,
			data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then((response)=>{
			//console.log(response);
			dispatch(registerUserSuccess(response.data))
			dispatch(loading(false))
		}).catch((err)=>{
			//console.log(err)
		})
	};
}

function getLbookingSuccess(data,loading){
    return{
        type:types.GET_LBOOKING_SUCCESS,
        data,
        loading
    }
}
export function getLbooking(id){
    return dispatch=>{
		let url = `${Constants.URL.ctb}lbooking/${id}?key=${Constants.KeyMobileApp.key}`
		dispatch(loading(true))
        //console.log("URL LBooking",url);
        axios.get(url).then(response=>{
			dispatch(loading(loading(false)))
            //console.log("GET LBOOKING",response);
            dispatch(getLbookingSuccess(response.data,false))
        }).catch(err=>{
            //console.log(err)
        })
    }
}

function cancelLbookingSuccess(data){
    return{
        type:types.CANCEL_LBOOKING_SUCCESS,
        data
    }
}

export function cancelLbooking(id){
    return dispatch=>{
        let url = `${Constants.URL.ctb}lbooking/${id}`
        axios({
            url,
            method:'POST',
            data:{
                id
            },
            headers: {key: Constants.KeyMobileApp.key}
        }).then(response=>{
            //console.log(response)
            dispatch(cancelLbookingSuccess(response.data))
        }).catch(err=>{
            //console.log(err)
        })
    }
}

export function addToCart(data){
	return{
		type:types.ADD_TO_CART_SUCCESS,
		data
	}
}

function processListingCheckoutSuccess(data){
	return{
		type:types.PROCESS_LISTING_CHECKOUT_SUCCESS,
		data
	}
}
export function processListingCheckout(data){
	return dispatch=>{
		let url = `${Constants.URL.ctb}checkout`
		axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        }).then(response=>{
            //console.log("PROCESS LISTING CHECKOUT",response)
            dispatch(processListingCheckoutSuccess(response.data))
        }).catch(err=>{
            //console.log(err)
        })
	}
}
export function addBooking(data){
	return {
		type:types.ADD_BOOKING_SUCCESS,
		data
	}
}
export function forgotPasswordSuccess(data){
	return {
		type: types.FORGOT_PASSWORD_SUCCESS,
		data
	}
}
export function forgotPassword(data){
	return dispatch=>{
		let url = `${Constants.URL.ctb}user/forgotPassword`
		dispatch(loading(true))
		axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        }).then(response=>{
            //console.log("FORGOT PASSWORD ",response)
			dispatch(forgotPasswordSuccess(response.data))
			dispatch(loading(false))
        }).catch(err=>{
            //console.log(err)
        })
	}
}