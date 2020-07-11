import React, { Component } from 'react'
import { 
    View,
    TouchableOpacity,
    StyleSheet
 } from 'react-native'
import {TextApp} from 'App';
import NavigationService from 'helpers/NavigationService'
import Thumbnail from './Thumbnail';
import Tags from './Tags';
import ShowDate from './ShowDate';
import Views from './Views';
import {Overlay} from 'App';
import PostOpt from './PostOpt';
import { H3 } from '../../../../styles';

export default class RenderItem extends Component {
    _onPress = ()=>{
        let {item} = this.props
        NavigationService.navigate('PostItem',item)
    }
    render() {
        let {item} = this.props
        // //console.log("Render post",this.props)
        return (
            <TouchableOpacity onPress={this._onPress} style={styles.container} activeOpacity={1} >
                <View style={styles.content}>
                    <TextApp style={styles.title}>{item.title}</TextApp>
                    <TextApp style={styles.textContent} >
                        {
                            `${item.content.slice(0,70)}...more`
                        }
                    </TextApp>
                    <PostOpt item={item} />
                </View>
                <View style={styles.ctnImage}>
                    <Thumbnail url={item.thumbnail} />
                    <Overlay />
                </View>
			</TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        marginBottom:0,
        flex:1
    },
    title:{
        color:'#334e6f',
        paddingBottom:5,
        fontSize:H3
    },
    content:{
        flex:0.5,
        backgroundColor:'#fff',
        padding:10
    },
    ctnImage:{
        flex:0.5,
        height:'100%',
        overflow: 'hidden',
    },
    textContent:{
        color:'#878C9F',
        paddingBottom:5
    },
})