
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Image
} from 'react-native'
import { Appcolor } from '../../../../../styles';
import {TextApp} from 'App';
import {ReplaceLink} from 'App';

export default class RenderUserChat extends Component {
    render() {
        let {item} = this.props
        return (
            <View style={styles.container} >
                <View style={styles.content}>
                    <TextApp style={styles.textContent} >{item.reply}</TextApp>
                </View>
                <Image source={{uri:ReplaceLink(item.avatar)}} style={styles.avatar} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'flex-end',
        flex:1,
        flexDirection:'row',
        marginBottom:15,
        width:200,
        flexWrap:'wrap'
    },
    content:{
        backgroundColor:'#eee',
        padding:10,
        alignSelf:'flex-start',
        borderRadius:15,
        flex:1,
        backgroundColor:Appcolor,
        marginRight:5
    },
    textContent:{
        color:'#fff'
    },
    avatar:{
        width:20,
        height:20,
        borderRadius:10,
        resizeMode:'cover'
    }
})