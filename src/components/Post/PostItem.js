import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import HeaderStack from '../Inners/HeaderStack';
import {ReplaceLink} from '../App';
import {Overlay} from '../App';
import {TextApp} from '..//App';
import HTML from 'react-native-render-html'
import { AppFontSize, AppFontFamily, Appcolor } from '../../styles';

let tagsStyles = {
    // h3: { fontSize: H3, color: '#566985', fontFamily: AppFontFamily, paddingBottom: 5 , fontWeight: 'normal', },
    // p: { fontSize: AppFontSize, paddingBottom: 5, fontFamily: AppFontFamily, color: '#8f95a5' },
    text: {fontSize:AppFontSize,paddingBottom: 5, 
        // fontFamily: AppFontFamily, 
        color: '#8f95a5'},
    blockquote : {borderLeftWidth: 2,borderLeftColor: Appcolor,paddingLeft: 10,}
} 

const {width} = Dimensions.get('window')
export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        //console.log('Post Item',this.props)
        let item = this.props.navigation.state.params
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header} />
                <View style={styles.container}>
                    <View style={styles.ctnImg}>
                        {
                            item.thumbnail
                            ?   <Image source={{uri:ReplaceLink(item.thumbnail)}} style={styles.image} />
                            :   <Image source={require('../../img/noimage.png')} style={styles.image} />
                        }
                        <Overlay />
                    </View>
                    <View style={styles.content}>
                        <HTML tagsStyles={tagsStyles} html={item.content} baseFontStyle={tagsStyles.text} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollView:{
        flex:1
    },
    header:{
        position: 'absolute',
    },
    image:{
        width,
        height:320,
        resizeMode:'cover'
    },
    content:{
        padding:10
    }
})