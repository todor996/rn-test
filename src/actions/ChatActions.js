
import * as types from './actionTypes';
import Constants from 'constants';
import axios from 'axios';

function lauthorMessageChatSuccess(chat){
    return{
        type:types.LAUTHOR_MESSAGE_CHAT,
        chat
    }
}
export function lauthorMessageChat(data){
    return dispatch=>{
        let url = `${Constants.URL.ctb}lauthorMessageChat`
        //console.log(url)
        axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        })
        .then(response=>{
            //console.log(response)
            dispatch(lauthorMessageChatSuccess(response.data))
        })
        .catch(err=>{
            //console.log(err)
        })
    }
}

function getChatsSucccess(chats){
    return{
        type:types.GET_CHATS_SUCCESS,
        chats
    }
}
export function getChats(userId){
    return dispatch=>{
        let url = `${Constants.URL.ctb}chats/${userId}?key=${Constants.KeyMobileApp.key}`
        //console.log(url)
        axios.get(url)
        .then(response=>{
            //console.log("Get chats",response)
            if(response.data instanceof Object ){
                dispatch(getChatsSucccess(response.data))
            }
        })
        .catch(err=>{
            //console.log(err)
        })
    }
}


function chatReplySuccess(chat){
    return{
        type:types.CHAT_REPLY_SUCCESS,
        chat
    }
}

export function chatReply(data){
    return dispatch=>{
        let url = `${Constants.URL.ctb}chatReply`
        axios({
            url,
            method:'POST',
            data,
            headers: {key: Constants.KeyMobileApp.key}
        })
        .then(response=>{
            //console.log("Chat reply response",response)
            dispatch(chatReplySuccess(response.data.data))
        })
        .catch(err=>{
            //console.log(err)
        })
    }
}


function loadRepliesSuccess(replies, lastID) {  
    return {
        type: types.GET_REPLIES_SUCCESS, 
        replies, 
        lastID
    };
}
export function getReplies(contact_id, lastID) {
    return (dispatch) => {
        let data = {
            cid: contact_id
        }
        if(lastID){
            data.lastID = lastID
        }
        let url = `${Constants.URL.ctb}chatReplies`
        return axios(
            {
                method:'POST',
                url,
                data,
                headers: {key: Constants.KeyMobileApp.key}
            }
        )
            .then(response => {
                //console.log("Get replies",response);
                dispatch( loadRepliesSuccess(response.data, lastID) ); 
            }).catch(err => {
                //console.log(err);
        }); 
    }
}

export function updateFirstLastID(firstID,lastID){
    return (dispatch) => {
        dispatch( updateFirstLastIDSuccess(firstID,lastID) ); 
    };
}
function updateFirstLastIDSuccess(firstID,lastID){
    return{
        type:types.UPDATE_FIRST_LAST_ID_SUCCESS,
        firstID,
        lastID
    }
}
function changeContactSuccess(contact,change){
    return {
        type: types.CHANGE_CONTACT_SUCCESS, 
        contact,
        change
    };
}
export function changeContact(contact){
    return (dispatch) => {
        dispatch( changeContactSuccess(contact,true) ); 
    };
}


function loadMoreTopReplies(replies) {  
    return {
        type: types.GET_MORE_TOP_REPLIES_SUCCESS, 
        replies
    };
}
export function getMoreTopReplies(contact_id, firstID) {
    return (dispatch) => {
        let data = {
            cid: contact_id,
            firstID
        }
        let url = `${Constants.URL.ctb}chatReplies`
        return axios(
            {
                method:'POST',
                data,
                url,
                headers: {key: Constants.KeyMobileApp.key}
            }
        )
        .then(response => {
            //console.log("More replies",response);
            dispatch( loadMoreTopReplies(response.data))
        }).catch(err => {
            //console.log(err);
        });
    }
}