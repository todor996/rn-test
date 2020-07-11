import React from 'react';
import { 
    View, 
    StyleSheet
} from 'react-native';
import {TextApp} from '../../../..//App';
import CommentAvatar from '../../Comment/CommentAvatar';
import CommentRating from '../../Comment/CommentRating';
import RatingImages from '../../Comment/RatingImages';
import {transformedComponent,ListComment} from '../../Comment/Item/ListComment'
import { AppFontMedium } from '../../../../../styles';
const RenderItemComment = (props) => {
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
        </React.Fragment>
        
    )
}
const ListChildComment = transformedComponent(ListComment)(RenderItemComment)
export default ListChildComment
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