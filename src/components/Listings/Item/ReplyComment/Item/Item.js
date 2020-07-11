import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
} from 'react-native'
import {TextApp} from '../../../..//App';
import CommentAvatar from '../../Comment/CommentAvatar';
import CommentRating from '../../Comment/CommentRating';
import RatingImages from '../../Comment/RatingImages';
import { AppFontLarge, AppFontXLarge, AppFontMedium, AppFontSize } from '../../../../../styles';

export default class Item extends Component {
    render() {
        let {comment} = this.props; 
        return (
            <View style={styles.container}  >
                <View style={styles.parentComment}>
                    <CommentAvatar comment={comment} />
                    {
                        comment.comment_rating!=''?
                            <CommentRating comment={comment} />
                        :null
                    }
                    <View style={styles.commentContent}>
                        <TextApp style={[styles.textContent]} >{comment.comment_content}</TextApp>
                    </View>
                    {
                        comment.rating_imgs !==""?
                            <RatingImages comment={comment} />
                        :null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // flex:1
    },
    parentComment:{
        backgroundColor:'#fff',
        margin:5,
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    avata:{
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
    ratingImg:{
        width:'33.33%',
        height:120,
        resizeMode:'cover'
    },
    ratingImage:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    authorInfo:{
        paddingLeft:5
    },
    comment_author:{
        paddingBottom:2,
        fontSize:AppFontSize,
        color:'#000'
    },
    comment_date:{
        color:'#878C9F'
    },
    commentContent:{
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        paddingRight:15,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    commentRating:{
        position:'absolute',
        top:15,
        right:10,
        flexDirection:'row'
    },
    textRating:{
        color:'#5ECFB1',
        fontSize:AppFontXLarge
    },
    ten:{
        fontSize:AppFontMedium,
        paddingBottom:6
    },
    evaluate:{
        fontSize:AppFontMedium,
        color:'#5ECFB1'
    },
    textContent:{
        color:'#878C9F',
        fontSize:AppFontMedium
    },
})