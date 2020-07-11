import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { AppIconSize, AppFontSize, Appcolor } from 'styles';
import {TextApp} from 'App';

const Header = (props)=>{
    onPress = ()=>{
        props.navigation.goBack()
    }
    return(
        <View style={[styles.container,props.style]}>
            <Icon name='arrow-left' size={AppIconSize} color='#fff' style={[styles.backIcon,props.styleBackIcon]} onPress={onPress} />
            <TextApp style={[styles.text,props.styleTitle]}>{props.title}</TextApp>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    container:{
        height:35,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor:Appcolor,
        alignItems: 'center',
    },
    text:{
        fontSize:AppFontSize,
        // alignSelf: 'center',
        color:'#fff',
        fontWeight: 'bold',
    },
    backIcon:{
        ...Platform.select({
            ios:{
                marginLeft: 10,
            }
        }),
        position: 'absolute',
        zIndex:10,
        left:0,
    }
})