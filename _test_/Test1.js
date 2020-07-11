
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'
import {getListing,getPost} from './SaveStore'
class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPress = ()=>{
        this.props.getListing()
        this.props.getPost()
    }
    render() {
        console.log(this.props)
        return (
        <View>
            <Text onPress={this.onPress} > Click me </Text>
        </View>
        );
    }
}

export default connect(
    (state)=>state,
    (dispatch)=>{
        return {
            getListing:()=>dispatch(getListing()),
            getPost:()=>dispatch(getPost())
        }
    }
)(Test1)