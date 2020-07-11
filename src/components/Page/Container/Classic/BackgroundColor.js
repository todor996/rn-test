import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'

export default class BackgroundColor extends React.PureComponent {
    render() {
        //console.log("background color")
        return (
            <View style={[styles.container,{backgroundColor:this.props.backgroundColor}]} >
                {this.props.children}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:2,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderRadius:5,
        overflow:'hidden'
    }
})