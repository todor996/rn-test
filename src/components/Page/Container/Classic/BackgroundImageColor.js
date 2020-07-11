
import React, { Component } from 'react'
import { StyleSheet,ImageBackground } from 'react-native'

export default class BackgroundImageColor extends React.PureComponent {
    render() {
        //console.log("Background Image Color")
        return (
            <ImageBackground
                source={{uri:this.props.source}}
                style={[styles.container,{backgroundColor:this.props.backgroundColor}]}
            >
                {this.props.children}
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        zIndex:2,
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderRadius:5,
        overflow:'hidden'
    }
})