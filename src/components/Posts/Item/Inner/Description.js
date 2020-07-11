
import React, { Component } from 'react'
import { 
    StyleSheet,
    Dimensions,
    View
} from 'react-native'
import {TextApp} from 'App';
import IconM from 'react-native-vector-icons/MaterialIcons'
import { Appcolor, AppFontSize, AppIconLarge } from 'styles';
import {regexHtml} from 'constants/regex'
import I18n from 'language/I18n'

const {width} = Dimensions.get('window')
export default class Description extends Component {
    render() {
        return (
            <View style={[styles.container]} >
                <View style={styles.description}>
                    <IconM name='book' size={AppIconLarge} color={Appcolor} />
                    <TextApp style={styles.textDescription} >{I18n.t('description')}</TextApp>
                </View>
                <View style={styles.content}>
                    <TextApp >{regexHtml(this.props.content)}</TextApp>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:width-20,
        margin:10,
        backgroundColor:'#fff',
        borderRadius:2,
        borderWidth:1,
        borderColor:'#f5f5f8',
        // marginBottom:0,
    },
    description:{
        padding:10,
        flexDirection:'row',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    textTitle:{
        fontSize:AppFontSize,
        color:'#000',
        paddingBottom:5
    },
    content:{
        padding:10
    },
    textDescription:{
        color:'#334e6f',
        fontWeight:'500',
        paddingLeft:2
    }
})