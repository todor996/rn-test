import React, { Component } from 'react';
import {  
    StyleSheet,
    View
} from 'react-native';
import CommentRating from './CommentRating';
import {TextApp} from 'App'
import RenderAvatar from '../../RenderAvatar'
import { AppFontSmall } from 'styles';
const CommentAvatar = ({comment})=>{
    //console.log(comment)
    return(
        <View style={styles.container}>
            <RenderAvatar link={comment.comment_author_avata} style={styles.image} />
            <View style={styles.authorInfo}>
                <TextApp style={styles.comment_author}>{comment.comment_author}</TextApp>
                <TextApp style={styles.comment_date}>{comment.comment_date}</TextApp>
            </View>
            
        </View>
        
    )
}
export default CommentAvatar
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
    comment_author:{
        paddingBottom:2,
        color:'#334e6f'
    },
    comment_date:{
        color:'#878C9F',
        fontSize:AppFontSmall
    },
    authorInfo:{
        paddingLeft:5
    },
})