import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import I18n from 'language/I18n'
import {TextApp} from 'App'
import { AppFontSmall, AppFontMedium, AppFontXLarge } from 'styles';

const CommentRating = ({comment})=>{
    return(
        <View style={styles.container}>
            <TextApp style={styles.text} >{comment.comment_rating*2}</TextApp>
            <View>
                <TextApp style={[styles.maxPoint]} >/ 10</TextApp>
                <TextApp style={[styles.evaluate]}>
                    {
                        comment.comment_rating*2 >=8 ? I18n.t('veryGood') : comment.comment_rating*2 >= 6 ? I18n.t('good') : comment.comment_rating*2 < 5 ? I18n.t('bad') :I18n.t('veryBad')
                    }
                </TextApp>
            </View>
        </View>
    )
}
export default CommentRating
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:15,
        right:10,
        flexDirection:'row'
    },
    maxPoint:{
        fontSize:AppFontSmall,
        paddingBottom:6
    },
    text:{
        color:'#3ece7e',
        fontSize:AppFontXLarge,
        paddingRight:2
    },
    evaluate:{
        fontSize:AppFontMedium,
        color:'#3ece7e'
    },
})