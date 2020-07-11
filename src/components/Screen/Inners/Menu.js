
import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import { Appcolor, AppIconSize } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Menu = (props) =>{
    onPress = ()=>{
        props.navigation.openDrawer()
    }
    return(
        <View style={styles.container}>
            <Icon name='bars' color='#fff' size={AppIconSize} onPress={onPress} />
        </View>
    )
}
export default Menu
const styles = StyleSheet.create({
    container:{
        width:'10%',
        // backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center'
    }
})