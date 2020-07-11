
import React, { Component } from 'react';
import { 
    View, 
    Text ,
    ActivityIndicator
} from 'react-native';
import axios from 'axios'
import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'
import Test1 from './Test1';
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['listing'] 
  }
  
const getListingSuccess = (listing)=>{
    return {
        type:'GET_LISTING',
        listing
    }
}
const getPostSuccess = (post)=>{
    return {
        type:'GET_POST',
        post
    }
}
const getPost = ()=>{
    return dispatch=>{
        let url = 'http:192.168.0.100/citybook/wp-json/wp/v2/posts'
        axios.get(url)
        .then(response=>{
            console.log(response)
            dispatch(getPostSuccess(response.data))
        })
        .catch(err=>console.log(err))
    }
}
const getListing = ()=>{
    return dispatch=>{
        let url = 'http:192.168.0.100/citybook/wp-json/wp/v2/posts'
        axios.get(url)
        .then(response=>{
            console.log(response)
            dispatch(getListingSuccess(response.data))
        })
        .catch(err=>console.log(err))
    }
}
const PostReducer = function(state={},action){
    switch(action.type){
        case 'GET_POST':
            return action.post
        default:
            return state
    }
}
const ListingReducer = function(state={},action){
    switch(action.type){
        case 'GET_LISTING':
            
            return action.listing
        default:
            return state
    }
}
const rootReducer  = combineReducers({
    listing:ListingReducer,
    post:PostReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    {
    },
    applyMiddleware(thunk)
)
const persistor = persistStore(store)
export default class SaveStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    <Test1 />
                </PersistGate>
            </Provider>
        );
    }
}

export {getListing,getPost}
