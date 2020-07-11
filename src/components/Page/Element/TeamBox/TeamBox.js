
import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Image
} from 'react-native';
import HTML from 'react-native-render-html';
import PropTypes from 'prop-types'
import {TextApp} from '../../..//App';
import {Overlay} from '../../../App';

const tagsStyles = {
    p:{
        fontSize:10,
        // fontFamily:'Quicksand',
        paddingBottom:10
    }
}
export default class TeamBox extends Component {
    static propTypes = {
        setting: PropTypes.object
    }
    render() {
        //console.log("TeamBox",this.props);
        let {setting} = this.props;
        return (
            <View style={styles.container} >
                <View>
                    <Image source={{uri:setting.image.url.replace('localhost','10.0.2.2')}} style={styles.image} />
                    <Overlay />
                </View>
                
                <View style={styles.content}>
                    <TextApp style={styles.title}>{setting.title}</TextApp>
                    <TextApp style={styles.subTitle}>{setting.sub_title}</TextApp>
                    <HTML html={setting.content} tagsStyles={tagsStyles} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        marginRight:15,
        marginBottom:10
    },
    title:{
        fontSize:12,
        color:'black',
        paddingBottom:10
    },
    image:{
        flex:1,
        height:200,
        borderTopLeftRadius:2,
        borderTopRightRadius:2,
        resizeMode:'cover'
    },
    subTitle:{
        fontSize:10,
        color:'#666'
    },
    content:{
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,
        backgroundColor:'#fff'
    }
})