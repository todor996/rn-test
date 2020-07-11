
import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import {TextApp} from 'App'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconMedium } from 'styles';
import Feature from './Feature';
import I18n from 'language/I18n'

export default class Features extends Component {
    render() {
        let {item} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.feature}>
                    <Icon name='th-list' size={AppIconMedium} color={Appcolor} />
                    <TextApp style={styles.textFeature} >{I18n.t('listingFeatures')}</TextApp>
                </View>
                <View style={styles.listing_features}>
                    {
                        item.listing_features.length!==0?
                            <Feature icon={item.icon} feature={item.listing_features} />
                        :null
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#e7e7ed',
        marginHorizontal:10,
        marginBottom:10
    },
    textFeature:{
        color:'#334e6f',
        paddingLeft:5,
        fontWeight:'500'
    },
    feature:{
        borderBottomWidth:1,
        borderBottomColor:'#e7e7ed',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        backgroundColor:'#fff',
        height:50
    },
    listing_features:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10,
        backgroundColor:'#fff'
    }
})