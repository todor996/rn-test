
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import {Overlay} from 'App';
import {TextApp} from 'App';
import {ReplaceLink} from 'App';
import NavigationService from 'helpers/NavigationService';
import RenderAvatar from 'Listings/RenderAvatar';
import I18n from 'language/I18n'
import PostOpt from 'Posts/PostPage/Item/PostOpt';

export default class RenderItem extends Component {
    constructor(props){
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress(){
        let {item} = this.props
        NavigationService.navigate('PostItem',{item})
    }
    render() {
        let {item} = this.props
        return (
            <TouchableOpacity style={styles.container}  activeOpacity={1} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:ReplaceLink(item.thumbnail)}} />
                    <Overlay />
                </View>
                <View style={styles.content}>
                    <TextApp style={styles.title} >{item.title}</TextApp>
                    <TextApp style={styles.textContent} numberOfLines={3} >{item.content.slice(0,100)+'...'}</TextApp>
                    <View style={styles.authorInfo}>
                        <RenderAvatar link={item.author_avatar} style={styles.avatar}/>
                        <TextApp style={styles.authorName} >{`${I18n.t('by')}, ${item.author_name}`}</TextApp>
                    </View>
                    <View style={styles.line} />
                    <PostOpt item={item} />
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:220,
        marginRight:7
    },
    imageContainer:{

    },
    image:{
        flex:1,
        height:135,
        resizeMode:'cover'
    },
    content:{
        backgroundColor:'#fff',
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        padding:10,
        flexWrap:'wrap',
        overflow: 'hidden',
    },
    title:{
        fontWeight:'500',
        color:'#334e6f',
        marginBottom: 5,

    },
    textContent:{
        flexWrap: 'wrap',
        marginBottom:5,
        color:'#878C9F'
    },
    authorInfo:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:10
    },
    line:{
        height:1,
        backgroundColor:'#eee',
        marginBottom:5
    },
    authorName:{
        marginLeft:5
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:15
    }
})
