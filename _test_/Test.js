import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {connect} from 'react-redux'
const objectAction = (obj)=>{
    return{
        type:'TEST',
        obj
    }
}
let i=0
 class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps!==this.props)
    //     return nextProps !== this.props
    // }
    render() {
        i++
        console.log(this.props)
        return (
            <SafeAreaView style={{flex:1}} >
                <View>
                    <Text onPress={()=>this.props.objectAction({a:2})} > CLick </Text>
                    <Text> {this.props.state.a} {i} </Text>
                </View>
            </SafeAreaView>
        
        );
    }
}
export default connect(
    (state)=>{
        return {
            state
        }
    },
    (dispatch)=>{
        return{
            objectAction:(obj)=>dispatch(objectAction(obj))
        }
    }
)(Test)
