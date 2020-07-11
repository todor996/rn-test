import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import { Appcolor } from 'styles';
import {TextApp} from 'App';

const Review = (props)=>{
    let {item} = props
    return(
        <View style={styles.container}>
            <TextApp style={styles.star} >8<TextApp style={styles.starMax}>/ 10</TextApp></TextApp>
            <TextApp style={[styles.status,item.statusText=="Now Closed"?{color:'#fc7171'}:{color:Appcolor}]}>{item.statusText?item.statusText:''}</TextApp>
        </View>
    )
}
export default Review
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:'#eee',
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'center',
    },
    star:{
        color:'#52d38b'
    },
    starMax:{
        color:'grey'
    },
    status:{
        textAlign:'right',
        position:'absolute',
        right:10
    }
})