
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import HTML from 'react-native-render-html'
import {TextApp} from '../../../..//App'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconF from 'react-native-vector-icons/Feather'
import { Appcolor } from 'styles';
import Bookmark from '../../Bookmark/Bookmark'
import NavigationService from 'helpers/NavigationService';
import I18n from 'language/I18n'
import { AppFontMedium, AppFontSize, AppIconMedium, AppIconLarge } from '../../../../../styles';
let tagsStyles = {
    h3: { fontSize: AppFontSize, color: '#334e6f', 
    // fontFamily: 'Quicksand', 
    paddingBottom: 5 },
    p: { fontSize: AppFontSize, paddingBottom: 5, 
        // fontFamily: 'Quicksand', 
        color: '#888DA0' },
    text: {fontSize:AppFontSize,paddingBottom: 5, 
        // fontFamily: 'Quicksand', 
        color: '#888DA0'}
}
//default textstyle when html not wrap. Use  baseFontStyle props

export default class Description extends Component {
    render() {
        let { item } = this.props
        let data = item
        return (
            <View style={styles.container} >
                <View style={styles.description}>
                    <Icon name='file-alt' size={AppIconMedium} color={Appcolor} style={styles.icon} />
                    <TextApp style={styles.textDescription} > {I18n.t('description')} </TextApp>
                    <TouchableOpacity style={styles.goToMaps} onPress={() => NavigationService.navigate('Maps', { data })} >
                        <IconF name='map-pin' size={AppIconLarge} color={'#4DB7FE'} />
                    </TouchableOpacity>
                    <Bookmark id={item.id} />
                </View>
                <View style={styles.content}>
                    <HTML html={item.post_content} tagsStyles={tagsStyles} baseFontStyle={tagsStyles.text} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7ed'
    },
    textDescription: {
        fontSize: AppFontMedium,
        paddingLeft: 5,
        fontWeight: '500',
        color: '#334e6f'
    },
    description: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7ed',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff'
    },
    icon: {
        paddingLeft: 10
    },
    content: {
        padding: 10
    },
    goToMaps: {
        position: 'absolute',
        right: 10,
        top: 3
    }
})