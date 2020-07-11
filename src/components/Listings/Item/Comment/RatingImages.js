import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    Image
} from 'react-native';
import Replacelink from '../../../App'
const RatingImages = ({comment}) =>{
    let imgs = [];
    for(let key in comment.rating_imgs){
        imgs.push(
            <Image source={{uri:Replacelink(comment.rating_imgs[key])}} style={styles.image} key={key.toString()} />
        )
    }
    return (
        <View style={styles.container}>
            {
                imgs
            }
        </View>
    )
}
export default RatingImages;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:10,
        paddingHorizontal: 10,
    },
    image:{
        width:'33.33%',
        height:120,
        resizeMode:'cover',
    },
})