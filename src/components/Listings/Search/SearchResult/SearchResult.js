

import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native'
import { Appcolor, AppFontMedium, AppFontSize } from 'styles';
import {TextApp} from 'App';
import RenderItem from '../../Page/RenderItem';
import IconF from 'react-native-vector-icons/Feather'
import I18n from 'language/I18n'
import { H3, H1 } from '../../../../styles';

export default class SearchResult extends Component {
    _renderItem = ({item,index})=>{
        return(
            <RenderItem item={item} index={index} />
        )
    }
    _keyExtractor = (item,index)=>index.toString()
    render() {
        let listings = this.props.navigation.state.params
        //console.log("Search Result",this.props)
        return (
            <SafeAreaView style={styles.safeView}>
                <View style={styles.container} >
                    <View style={styles.header}>
                        <TextApp style={styles.textSearchResult} >{I18n.t('searchResult')}</TextApp>
                    </View>
                    {
                        listings && listings.length!==0?
                            <View style={styles.searchResult}>
                                <FlatList
                                    data={listings}
                                    renderItem = {this._renderItem}
                                    keyExtractor = {this._keyExtractor}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                />
                            </View>
                        :
                        <View style={styles.searchNoResult}>
                            <TextApp style={styles.textNoResult} >{I18n.t('noResult')}</TextApp>
                            <TextApp style={styles.text} >{I18n.t('noListingsMachingYourSearch')}</TextApp>
                            <IconF name='alert-circle' size={150} color='#fff' style={styles.iconOverlay} />
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    safeView:{
        flex:1
    },
    header:{
        height:35,
        backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center'
    },
    textSearchResult:{
        fontSize:AppFontSize,
        fontWeight:'500',
        color:'#fff'
    },
    searchResult:{
        margin:5
    },
    textNoResult:{
        fontSize:H1,
    },
    searchNoResult:{
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    text:{
        fontSize:AppFontSize
    },
    iconOverlay:{
        position:'absolute',
        zIndex:-1

    },
    backIcon:{
        position: 'absolute',
        left:10,
        zIndex:10
    }
})
