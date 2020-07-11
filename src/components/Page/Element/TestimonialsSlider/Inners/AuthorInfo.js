import React from 'react';
import {
    View,  
    StyleSheet,
    Image
} from 'react-native';
import {ReplaceLink} from '../../../../App';
import {TextApp} from '../../../..//App';
import { Appcolor, AppFontLarge } from '../../../../../styles';

const AuthorInfo = (props)=>{
    return(
        <View style={styles.author}>
            <View style={styles.beforeAuthor} />
            <Image source={{uri:ReplaceLink(props.item.avatar.url)}} style={styles.avatar} />
            <TextApp style={[styles.authorName]}>{props.item.name}</TextApp>
            <TextApp style={[styles.authorJob]}>{props.item.job}</TextApp>
        </View>
    )
}
export default AuthorInfo
const styles = StyleSheet.create({
    author:{
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,
        flex:1
    },
    beforeAuthor:{
        borderWidth:14,
        position:'absolute',
        top:0,
        borderColor:'transparent',
        borderTopColor:Appcolor,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25
    },
    authorName:{
        color:'#566985',
        fontSize:AppFontLarge
    },
    authorJob:{
        color:'#ADC7DD'
    },
})