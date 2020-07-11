import React, { Component } from 'react';
import { 
    View, 
    Text,
    WebView
} from 'react-native';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onNavigationStateChange = (data)=>{
        //console.log(data)
    }
    render() {
        return (
            <WebView 
                onNavigationStateChange={
                    this.onNavigationStateChange
                }
                source={{uri:this.props.navigation.state.params}}
            />
        );
    }
}
