import React from 'react';
import {  
    View,
    Image,
    StyleSheet,
} from 'react-native';
import {ReplaceLink} from 'App';
import HTML from 'react-native-render-html'
const tagsStyles = {
    img:{
        // width:30,
        // height:30,
        borderRadius:20,
        // alignSelf: 'center',
    }
}
const Avatar = (props)=>{
    return(
        <View style={[styles.container,props.style]} >
            <Image source={{uri:ReplaceLink(props.link)}} style={styles.image} />
            {/* <HTML html={props.img} tagsStyles = {tagsStyles} imagesInitialDimensions={{width:40,height:40}} /> */}
        </View>
    )
}
export default Avatar
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom:-15,
        zIndex:10,
        width:40,
        height:40,
        right:20,
        borderRadius:20,
    },
    image:{
        width:30,
        height:30,
        borderRadius:15,
        alignSelf: 'center',
    }
})