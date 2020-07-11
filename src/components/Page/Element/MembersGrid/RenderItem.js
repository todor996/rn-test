import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Image
} from 'react-native';
import HTML from 'react-native-render-html';
import {Overlay} from '../../../App';
import { AppFontSize, AppFontMedium } from '../../../../styles';

const tagsStyles = {
    h4:{
        // fontFamily:'Quicksand',
        fontSize:AppFontSize,
        color:'black',
        paddingTop:10,
        fontWeight:'400'
    },
    p:{
        // fontFamily:'Quicksand',
        fontSize:AppFontMedium,
        color:'#878C9F',
        paddingBottom:10
    }
}
export default class RenderItem extends Component {
    render() {
        //console.log("Render Member",this.props);
        let {member} = this.props;
        return (
            <View style={styles.container} >
                <View>
                    <Image source={{uri:member.thumbnail.replace('localhost','10.0.2.2')}} style={styles.thumbnail} />
                    <Overlay />
                </View>
                
                <View style={styles.content}>
                    <HTML html = {member.post_excerpt} tagsStyles={tagsStyles} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:250,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:AppFontSize,
        color:'black',
        paddingBottom:10
    },
    thumbnail:{
        width:250,
        height:150,
        resizeMode:'cover',
    },
    content:{
        paddingLeft:10,
        paddingBottom:10,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        overflow:'hidden'
    }
})