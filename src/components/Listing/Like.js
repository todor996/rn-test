
import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {TextApp} from 'App';
import { Appcolor, AppIconMedium } from 'styles';
const Like = (props)=>{
    return(
        <View style={styles.container}>
            <TextApp style={styles.text}>{props.like+' '}</TextApp>
            <AntDesign name='heart' color={Appcolor} size={AppIconMedium}  />
        </View>
    )
}
export default Like
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        backgroundColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        top:10,
        right:10,
        borderRadius:3,
        zIndex:10
    },
    text:{
        color:'#fff'
    }
})