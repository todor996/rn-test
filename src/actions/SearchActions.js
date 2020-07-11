
import * as types from './actionTypes'

export function setTag(tag){
    return{
        type:types.SET_TAG_FROM_SEARCH,
        tag
    }
}
export function setCat(cat){
    return{
        type:types.SET_CAT_FROM_SEARCH,
        cat
    }
}
export function setPriceRange(price){
    return{
        type:types.SET_PRICE_RANGE_FROM_SEARCH,
        price
    }
}
export function setOrderBy(orderBy){
    return{
        type:types.SET_ORDER_BY_FROM_SEARCH,
        orderBy
    }
}
export function setSortBy(sortBy){
    return{
        type:types.SET_SORT_BY_FROM_SEARCH,
        sortBy
    }
}