
import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    
} from 'react-native';
import Menu from './Menu';
import Search from 'Listings/Search/Search';
import Cart from './IconCart';
import { Appcolor } from '../../../styles';
const Header = (props)=>{
    return(
        <View style={styles.container}>
            <Menu {...props} />
            <Search />
            <Cart />
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        backgroundColor:Appcolor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    }
})