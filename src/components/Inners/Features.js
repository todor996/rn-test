import React, { Component } from 'react';
import { 
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {TextApp} from '..//App';
import { AppIconMedium, Appcolor, AppFontSize } from 'styles';

const Features = (props)=>{
    let {listing_features,icon} = props.item
    let features = listing_features.map((item,index)=>{
        let icons = icon[index].icon_class
        icons !=null ? icons = icon[index].icon_class.replace("fa fa-",""):icons = "check"
        return(
            <TextApp key={index} style={styles.text}> <Icon name={`${icons}`} size={AppIconMedium} color={Appcolor} style={styles.icon} /> {`${item}`}</TextApp>
        )
    })
    return features;
}
export default Features
const styles = StyleSheet.create({
    text:{
        paddingBottom:10,
        fontSize:AppFontSize,
        width:'50%',
        color:'#888DA0',
    },
    icon:{
        marginBottom:8
    }
})