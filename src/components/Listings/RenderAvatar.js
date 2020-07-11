import React from 'react';
import {  
    Image,
    StyleSheet
} from 'react-native';
import {ReplaceLink} from '../App'

const RenderAvatar = (props)=>{
    return(
        <Image source={{uri:ReplaceLink(props.link)}} style={[styles.image,props.style]}/>
    )
}
export default RenderAvatar
const styles = StyleSheet.create({
    image:{
        // width:35,
        // height:35,
        // borderRadius:17.5
        resizeMode:'cover'
    }
})