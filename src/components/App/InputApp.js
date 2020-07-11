
import React, { Component } from 'react'
import { 
    TextInput,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { AppFontMedium } from '../../styles';

export default class InputApp extends Component {
    static propTypes = {
        placeholder:PropTypes.string,
        name:PropTypes.string.isRequired,
        onChangeText:PropTypes.func.isRequired,
        value:PropTypes.string,
        editable:PropTypes.bool,
        secureTextEntry:PropTypes.bool,
        returnKeyType:PropTypes.string
    }
    _onChangeText = (text)=>{
        this.props.onChangeText(text,this.props.name)
    }
    render() {
        return (
            <TextInput 
                value = {this.props.value}
                placeholder={this.props.placeholder} 
                underlineColorAndroid={'transparent'}
                {...this.props}
                style={[styles.input,this.props.style]}
                onChangeText = {this._onChangeText}
                editable={this.props.editable}
                multiline={this.props.multiline}
                secureTextEntry={this.props.secureTextEntry}
                returnKeyType={this.props.returnKeyType}
            />
        )
    }
}

const styles = StyleSheet.create({
    input:{
        padding:0,
        margin:0,
        fontSize:AppFontMedium,
        // fontFamily:'Quicksand'
    }
})