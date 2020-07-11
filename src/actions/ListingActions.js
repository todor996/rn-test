import axios from 'axios';
import Constants from 'constants';
import {loading} from './LoadingActions';
import * as types from './actionTypes';  

function loadListingsSuccess(listings) {  
  return {type: types.GET_LISTINGS_SUCCESS, listings};
}

export function getListings(data) {
   	return (dispatch) => {
		   const url = `${Constants.URL.ctb}listings`
		   //console.log(url)
		axios({
			url,
			method:'POST',
			data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			//console.log("GET LISTINGS",response)
			dispatch( loadListingsSuccess(response.data))
		}).catch(err=>{
			//console.log(err)
		})
   	};
}

function loadListingCatsSuccess(listing_cats) {  
	return {type: types.GET_LISTING_CATEGORIES_SUCCESS, listing_cats};
}

export function getListingCats() {
	return (dispatch) => {
		const url = `${Constants.URL.ctb}cats?key=${Constants.KeyMobileApp.key}`
		//console.log(url)
		axios({
			url,
			method:'GET',
		}).then(response => {
			// //console.log(response);
			//console.log("LISITNG CATS",response);
			dispatch( loadListingCatsSuccess(response.data) );	
	 }).catch(err => {
				//console.log(err);
		})
	};
}
function loadListingTagsSuccess(listing_tags) {  
	return {type: types.GET_LISTING_TAGS_SUCCESS, listing_tags};
}

export function getListingTags() {
	return (dispatch) => {
		const url = `${Constants.URL.ctb}listings/tags?key=${Constants.KeyMobileApp.key}`
	//  //console.log(url)
		return axios.get(url).then(response => {
			// //console.log(response);
			dispatch( loadListingTagsSuccess(response.data) );	
	 }).catch(err => {
				//console.log(err);
		})
	};
}

function loadListingItemSuccess(listing_item) {  
	return {type: types.GET_LISTING_ITEM_SUCCESS, listing_item};
}
export function getListingItem(id,callback) {
	return (dispatch) => {
		//Update store  = { } 
		const url = `${Constants.URL.ctb}listings/${id}?key=${Constants.KeyMobileApp.key}`;
		// //console.log(url);
		return axios.get(url).then(response => {
				if(callback!==undefined && typeof callback ==='function'){
					callback(response.data)
				}
				dispatch( loadListingItemSuccess(response.data));
		}).catch(err => {
				//console.log(err);
		}) 
	};
}

export function setListingActived(id){
	return{
		type:types.SET_LISTING_ACTIVED_SUCCESS,
		id
	}
}

function getListingWithCatSuccess(data){
	return{
		type:types.GET_LISTING_WITH_CAT_SUCCESS,
		data
	}
}
export function getListingWithCat(id){
	return dispatch=>{
		dispatch(getListingWithCatSuccess([]))
		let url = `${Constants.URL.ctb}listings/cat/${id}?key=${Constants.KeyMobileApp.key}`;
		//console.log(url)
		axios.get(url).then(response=>{
			//console.log("LISITNG CATS",response);
			dispatch(getListingWithCatSuccess(response.data));
		}).catch(err=>{
			//console.log(err)
		})
	}
}

function getPageSuccess(listings){
	return{
		type:types.GET_PAGE_SUCCESS,
		listings,
	}
}
export function getPage(number){
	return (dispatch)=>{
		dispatch(loading(true))
		const url = `${Constants.URL.ctb}listings/posts/${number}?key=${Constants.KeyMobileApp.key}`;
		// //console.log(url);
		return axios.get(url).then((response)=>{
			//console.log(response);
			dispatch(loading(false))
			dispatch(getPageSuccess(response.data));
		}).catch((err)=>{
			//console.log(err);
		})
	} 
}

function searchListingSuccess(listings){
	return{
		type:types.SEARCH_LISTING_SUCCESS,
		listings
	}
}
export function searchListing(data){
	return dispatch=>{
		// let url = `${Constants.URL.ctb}listings/search?s=${search}`;
		let url = `${Constants.URL.ctb}listings/search`;
		// //console.log(url);
		axios({
			url,
			method:'POST',
			data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			//console.log(response)
			response.data.length!==0?
				dispatch(searchListingSuccess(response.data))
			:dispatch(searchListingSuccess(false))
		}).catch(err=>{
			//console.log(err)
		})
	}
}

function bookingSuccess(data){
	return{
		type:types.BOOKING_SUCCESS,
		data
	}
}
export function booking(data){
	let url = `${Constants.URL.ctb}listings/booking`;
	return dispatch=>{
		dispatch(loading(true))
		axios({
			method:'POST',
			url,
			data:data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			dispatch(loading(false))
			//console.log(response);
			dispatch(bookingSuccess(response.data))
		})
	}
}

function pushCommentListingSuccess(data){
	return{
		type:types.PUSH_COMMENT_LISTING_SUCCESS,
		data
	}
}
export function pushCommentListing(data){
	return dispatch=>{
		let url = `${Constants.URL.ctb}listings/push/comment`;
		dispatch(loading(true))
		axios({
			url:url,
			method:'POST',
			data:data,
			headers: {key: Constants.KeyMobileApp.key}
		}).then(response=>{
			dispatch(loading(false))
			//console.log(response);
			dispatch(pushCommentListingSuccess(response.data))
		}).catch(err=>{
			//console.log(err)
		})
	}
}

function getListingLocationsSuccess(data){
	return{
		type:types.GET_LISTING_LOCATIONS_SUCCESS,
		data
	}
}
export function getListingLocations(){
	return dispatch=>{
		let url = `${Constants.URL.ctb}listings/locations?key=${Constants.KeyMobileApp.key}`;
		axios.get(url).then(response=>{
			//console.log(response)
			dispatch(getListingLocationsSuccess(response.data))
		}).catch(err=>{
			//console.log('ERR LISTING LOCATIONS',err)
		})
	}
}