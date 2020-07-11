
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function SearchReducer(state=initialState.search,action){
    switch(action.type){
        case types.SET_TAG_FROM_SEARCH:
            return Object.assign({},state,{tags:action.tag})
        case types.SET_CAT_FROM_SEARCH:
            return Object.assign({},state,{cat:action.cat})
        case types.SET_PRICE_RANGE_FROM_SEARCH:
            return Object.assign({},state,{price:action.price})
        case types.SET_ORDER_BY_FROM_SEARCH:
            return Object.assign({},state,{orderBy:action.orderBy})
        case types.SET_SORT_BY_FROM_SEARCH:
            return Object.assign({},state,{sortBy:action.sortBy})
        default:
            return state
    }
}
