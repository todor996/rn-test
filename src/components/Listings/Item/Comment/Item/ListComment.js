
import React from 'react'
import {  
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from 'helpers/NavigationService';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import CommentReview from '../CommentReview';
import RatingImages from '../RatingImages'
import CommentAvatar from '../CommentAvatar';
import CommentRating from '../CommentRating'
import { AppFontMedium, AppIconMedium } from 'styles';

export const transformedComponent = (BaseComponent) => (RenderItemComponent) => props => {
    //console.log("Transform Component",props.id)
    return (
        <BaseComponent {...props} renderItemComponent={RenderItemComponent} />
    )
}
export const ListComment = (props)=>{
    //console.log("List Comment",props.comments)
    let RenderItemComponent = props.renderItemComponent
    renderItem = ({item,index})=>{
        return(
            <View style={styles.container} >
                <RenderItemComponent item={item} id = {props.id} />
            </View>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    return(
        <FlatList
            data={props.comments}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}
const RenderItem = (props)=>{
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
            <TouchableOpacity style={styles.comment} onPress={()=>NavigationService.navigate('ReplyComment',[item.comment_child,item,props.id])} >
                <Icon name='comment-outline' size={AppIconMedium} color={'#63f6c3'} style={styles.iconComment} />
                <TextApp style={styles.text} >{`${I18n.t('reply')}`}</TextApp>
            </TouchableOpacity>
        </React.Fragment>
    )
}
const TransformedListComment = transformedComponent(ListComment)(RenderItem)
export default TransformedListComment
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        marginBottom:0,
        backgroundColor:'#fff',
    },
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
    comment:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-start'
    },
    iconComment:{
        paddingRight:5
    },
})
