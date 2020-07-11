import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { AppIconLarge, AppFontMedium } from 'styles';
import {TextApp} from 'App';
import { Appcolor } from '../../styles';

const Location = (props)=>{
    return(
        <View style={styles.container}>
            <Icon name='location-pin' size={AppIconLarge} color={Appcolor} />
            <TextApp style={styles.location}>
                {props.item.address}
            </TextApp>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    location:{
        fontSize:AppFontMedium,
        color:'#8f95a5',
        marginLeft: 5,
    }
})
export default Location