
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Image
} from 'react-native'
import {TextApp} from '../../../..//App';
import {ReplaceLink} from '../../../../App';

export default class RenderChat extends Component {
    render() {
        // //console.log("Render Chat",this.props)
        let {item}  = this.props
        return (
            <View style={styles.container}>
                <Image source={{uri:ReplaceLink(item.avatar)}} style={styles.avatar} />
                <View style={styles.content}>
                    <TextApp>{item.reply}</TextApp>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
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
        flex:1
    },
    avatar:{
        width:20,
        height:20,
        borderRadius:10,
        resizeMode:'cover',
        marginRight:5
    }
})
