
import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import {TextApp} from 'App';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppFontMedium, AppIconMedium } from 'styles';
import I18n from 'language/I18n'

const Tag = (tags) =>{
    let postTags = tags.join(', ')
    return postTags;
}
const RenderTags = ({tags})=>{
    return(
        <View style={styles.content}>
            <TextApp style={styles.text}>
                {
                    Tag(tags)
                }
            </TextApp>
        </View>
    )
}
export default class Tags extends Component {
    render() {
        let {item} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.tag}>
                    <Icon name='tags' size={AppIconMedium} color={Appcolor} />
                    <TextApp style={styles.textTag}>{I18n.t('tags')}</TextApp>
                </View>
                {
                    item.tags.length!==0
                    ?   <RenderTags tags={item.tags} />
                    :   null
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e7e7ed',
        marginHorizontal:10,
        marginBottom:10
    },
    tag:{
        borderBottomWidth:1,
        borderBottomColor:'#e7e7ed',
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },
    textTag:{
        fontSize:AppFontMedium,
        color:'#334e6f',
        paddingLeft:5,
        fontWeight:'500'
    },
    text:{
        fontSize:AppFontMedium,
        color:'#334e6f'
    },
    content:{
        padding:10
    }
})