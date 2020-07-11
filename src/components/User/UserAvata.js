import React from 'react';
import {  
    Image,
    StyleSheet
} from 'react-native';
import {ReplaceLink} from '../App';
const UserAvata = (props)=>{
    return(
        <Image source={{uri:ReplaceLink(props.url)}} style={styles.image} />
    )
}
export default UserAvata
const styles = StyleSheet.create({
    image:{
        width:45,
        height:45,
        borderRadius: 22.5,
        resizeMode:'cover'
    }
})