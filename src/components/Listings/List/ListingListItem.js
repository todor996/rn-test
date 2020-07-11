


import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Dimensions
 } from 'react-native';
import NavigationService from 'helpers/NavigationService';
import Icon from 'react-native-vector-icons/Feather';
import Item from './Item/Item';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import { AppIconLarge } from 'styles';


const {width}  = Dimensions.get('window')

export default class ListingListItem extends Component {
    _renderListing = ()=>{
        let listings = this.props.listings.map((item,index)=>{
            return(
                <Item item ={item} key={index} />
            )
        })
        return listings
    }
    render() {
        //console.log("Listing list item",this.props)
        return (
            <View style={styles.container}>
                <View style={styles.ctnMore}>
                    <TextApp style={styles.txtMore} onPress={()=>NavigationService.navigate('ListingPage')} >{I18n.t('more')}</TextApp>
                    <Icon name='chevron-right' size={AppIconLarge} color={'grey'} />
                </View>
                {
                    this._renderListing()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        paddingLeft:10,
        paddingRight:10,
    },
    ctnMore:{
        flexDirection:'row',
        alignSelf: 'flex-end',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5
    },
    txtMore:{
        color:'grey',
        textAlign:'center'
    }
})

