import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TextApp} from 'App'
import I18n from 'language/I18n'
import { AppFontMedium, AppIconMedium } from '../../../../styles';

const CommentReview = ({commentCount}) =>{
    return(
        <View style={styles.review}>
            <View style={styles.itemStatus}>
                <Icon name='thumb-up-outline' size={AppIconMedium} color={'grey'} style={styles.iconComment} />
                <TextApp style={[styles.text]}>{`0 ${I18n.t('like')}`}</TextApp>
            </View>
            <View style={styles.itemStatus}>
                <Icon name='comment-outline' size={AppIconMedium} color={'grey'} style={styles.iconComment} />
                <TextApp style={[styles.text]}>{`${commentCount} ${I18n.t('comment')}`}</TextApp>
            </View>
            <View style={styles.itemStatus}>
                <Icon name='share-outline' size={AppIconMedium} color={'grey'} style={styles.iconComment} />
                <TextApp style={[styles.text]}>{`0 ${I18n.t('share')}`}</TextApp>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    review:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    itemStatus:{
        padding:10,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:AppFontMedium,
        color:'#888DA0'
    },
    iconComment:{
        paddingRight:5
    },
})
export default CommentReview