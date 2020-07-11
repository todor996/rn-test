import React, { Component } from 'react';
import {  
    StyleSheet,
    View,
    Image
} from 'react-native';
import {TextApp} from 'App'
import { AppFontSize, AppFontMedium } from 'styles';
import {ReplaceLink} from '../App';
const CommentAvata = ({comment})=>{
    return(
        <View style={styles.container}>
            <Image source={{uri:ReplaceLink(comment.comment_author_avata)}} style={[styles.image]}/>
            <View style={styles.authorInfo}>
                <TextApp style={styles.commentAuthor}>{comment.comment_author}</TextApp>
                <TextApp style={styles.commentDate}>{comment.comment_date}</TextApp>
            </View>
        </View>
        
    )
}
export default CommentAvata
const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        paddingRight:15
    },
    image:{
        width:35,
        height:35,
        borderRadius:17.5
    },
    commentAuthor:{
        paddingBottom:2,
        color:'#334e6f',
        fontSize:AppFontSize
    },
    commentDate:{
        color:'#878C9F',
        fontSize:AppFontMedium
    },
    authorInfo:{
        paddingLeft:5
    },
})