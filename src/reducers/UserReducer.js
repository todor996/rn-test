
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function UserReducer(state=initialState.users,action){
    switch(action.type){
        case types.GET_USER_SUCCESS:
            return Object.assign({},state,{userData:action.users})
        case types.CHANGE_USER_PASSWORD_SUCCESS:
            return Object.assign({},state,{change_user_password:action.status})
        case types.GET_LBOOKING_SUCCESS:
            return Object.assign({},state,{lBooking:[...action.data],loading:action.loading}) ;
        case types.CANCEL_LBOOKING_SUCCESS:
            return Object.assign({},state,{cancelLbooking:action.data})
        case types.REGISTER_USER_SUCCESS:
            return Object.assign({},state,{register:action.data})
        case types.UPDATE_USER_SUCCESS:
            return Object.assign({},state,{userData:action.data})
        case types.ADD_TO_CART_SUCCESS:
            return Object.assign({},state,{cart:action.data})
        case types.PROCESS_LISTING_CHECKOUT_SUCCESS:
            return Object.assign({},state,{payment:action.data})
        case types.ADD_BOOKING_SUCCESS:
            return Object.assign({},state,{booking:action.data})
        case types.FORGOT_PASSWORD_SUCCESS:
            return Object.assign({},state,{forgotPassword:action.data})
        default:
            return state
    }
}