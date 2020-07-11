
import React, { Component } from 'react';
import {  
    View,
    Text
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Test from './Test';

const objectReducer = (state={a:1},action)=>{
    switch(action.type){
        case 'TEST':
            return Object.assign(state,action.obj)
        default:
            return state
    }
}
const store = createStore(objectReducer)

class Immutability extends Component{
    render(){
        return(
            <Provider store={store}>
                <Test />
            </Provider>
        )
    }
}
export default Immutability