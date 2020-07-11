import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from '..//App';
import { AppFontMedium } from '../../styles';

const Tags = (props)=>{
    return(
        <View style={styles.container}>
            {
                props.item.tags.map((item,index)=>{
                    return(
                        <TextApp style={[styles.text,index!==0?{marginLeft:5}:{}]} key={index}>
                            {item}
                        </TextApp>
                    )
                })
            }
        </View>
    )
}
export default Tags
const styles = StyleSheet.create({
    container:{
        // padding:10,
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    text:{
        fontSize:AppFontMedium,
        color:'#8f95a5',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 15,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 5,

    }
})