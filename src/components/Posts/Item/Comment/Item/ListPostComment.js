import React from 'react'
import {  
    View,
    StyleSheet
} from 'react-native';
import CommentAvatar from '../../../../Listings/Item/Comment/CommentAvatar';
import CommentRating from '../../../../Listings/Item/Comment/CommentRating';
import RatingImages from '../../../../Listings/Item/Comment/RatingImages';
import CommentReview from '../../../../Listings/Item/Comment/CommentReview';
import { ListComment,transformedComponent } from '../../../../Listings/Item/Comment/Item/ListComment';
import {TextApp} from 'App';
import { AppFontMedium } from 'styles';

const RenderItem = (props) =>{
    let {item} = props
    return(
        <React.Fragment>
            <CommentAvatar comment={item} />
            {
                item.comment_rating!=''?
                    <CommentRating comment={item} />
                :null
            }
            <View style={styles.commentContent}>
                <TextApp style={[styles.textContent]} >{item.comment_content}</TextApp>
            </View>
            {
                item.rating_imgs !==""?
                    <RatingImages comment={item} />
                :null
            }
            <CommentReview commentCount={item.comment_child.length} />
        </React.Fragment>
    )
}
const ListPostComment = transformedComponent(ListComment)(RenderItem)
export default ListPostComment
const styles = StyleSheet.create({
    commentContent:{
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        paddingRight:15,
    },
    textContent:{
        fontSize:AppFontMedium,
        color:'#878C9F'
    },
})