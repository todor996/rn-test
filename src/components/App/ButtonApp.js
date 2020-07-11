
import React, { Component } from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
// import {TextApp} from './TextApp';

export default class ButtonApp extends Component {
    static propTypes = {
        onPress:PropTypes.func.isRequired,
        disable:PropTypes.bool,
        title:PropTypes.string.isRequired,
        titleStyle:PropTypes.object,
        children:PropTypes.element
    }
    _onPress = ()=>{
        this.props.onPress()
    }
    render() {
        return (
            <TouchableOpacity onPress={this._onPress} style={[styles.container,this.props.style]} >
                {/* <TextApp style={[styles.text,this.props.titleStyle]}>{this.props.title}</TextApp> */}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        justifyContent:'center',
    },
    text:{
        color:'#fff',
        alignSelf:'center'
    },
})

{/* <TouchableNativeFeedback
                useForeground={true}
                onPress={this._onPress}
                background = {TouchableNativeFeedback.Ripple('#fff', true)}
                disabled={this.props.disable}
            >
                <View style={[styles.container,this.props.style]} >
                    <Text style={[styles.text,this.props.titleStyle]}>{this.props.title}</Text>
                    {
                        this.props.children
                    }
                </View>
            </TouchableNativeFeedback> */}