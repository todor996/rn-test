import React, { Component } from 'react'
import { ImageBackground,StyleSheet } from 'react-native'

export default class BackgroundImage extends React.PureComponent {
    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={{uri:this.props.source}}
            >
                {this.props.children}
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        zIndex:2,
        marginLeft:10,
        marginRight:10,
        overflow:'hidden',
        borderTopRightRadius:2,
        borderTopLeftRadius:2
    }
})