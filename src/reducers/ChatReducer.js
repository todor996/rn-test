
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function ChatReducer(state = initialState.chats,action){
    switch(action.type){
        case types.GET_CHAT_REPLIES_SUCCESS:
            return Object.assign({},state,{replies:[...action.chats]})
        case types.CHAT_REPLY_SUCCESS:
            return Object.assign({},state,{replies: [...state.replies,action.chat]});
        case types.GET_CHATS_SUCCESS:
            let new_contact_state = {contacts: action.chats.contacts, replies: action.chats.replies, active: action.chats.active, touid: action.chats.touid, fuid: action.chats.fuid};
            return Object.assign({},state,new_contact_state)
        case types.GET_REPLIES_SUCCESS:
            if(state.change==true) return Object.assign({},state,{replies:[...action.replies],change:false})
            if(action.replies.length == 0) return Object.assign({}, state, {noReplyNum: state.noReplyNum+1})
            let {firstID} = state ; 
            return Object.assign({},state,{replies:[...state.replies,...action.replies],noReplyNum:0,firstID})
        case types.UPDATE_FIRST_LAST_ID_SUCCESS:
            return Object.assign({},state,{firstID:action.firstID,lastID:action.lastID})
        case types.CHANGE_CONTACT_SUCCESS:
            return Object.assign({},state,{active:action.contact.cid,change:action.change,fuid:action.contact.user_one,display_name:action.contact.display_name,touid:action.contact.touid})
        case types.GET_MORE_TOP_REPLIES_SUCCESS:
            return Object.assign({},state,{replies:[...action.replies,...state.replies]})
        default:
            return state
    }
}