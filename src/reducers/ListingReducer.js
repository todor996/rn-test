import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function ListingReducer(state=initialState.listings,action){
    switch(action.type){
        case types.GET_LISTINGS_SUCCESS:
            return Object.assign({},state,{posts:[...action.listings]})
        case types.GET_LISTING_ITEM_SUCCESS:
            return Object.assign({},state,{item:{...action.listing_item}})
        case types.BOOKING_SUCCESS:
            return Object.assign({},state,{booking:action.data})
        case types.PUSH_COMMENT_LISTING_SUCCESS:
            return Object.assign({},state,{comment:action.data})
        case types.GET_LISTING_CATEGORIES_SUCCESS:
            return Object.assign({},state,{listing_cats:action.listing_cats})
        case types.GET_LISTING_WITH_CAT_SUCCESS:
            return Object.assign({},state,{listing_of_cat:action.data})
        case types.GET_PAGE_SUCCESS:
            return Object.assign({},state,{page:action.listings})
        case types.GET_LISTING_TAGS_SUCCESS:
            return Object.assign({},state,{listing_tags:action.listing_tags})
        case types.SEARCH_LISTING_SUCCESS:
            return Object.assign({},state,{searchData:[...action.listings]})
        case types.GET_LISTING_LOCATIONS_SUCCESS:
            return Object.assign({},state,{locations:action.data})
        case types.SET_LISTING_ACTIVED_SUCCESS:
            return Object.assign({},state,{actived:action.id})
        default:
            return state
    }
}