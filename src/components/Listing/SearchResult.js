

import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native'
import { Appcolor, AppFontSize } from 'styles';
import {TextApp} from 'App';
import RenderItem from '../Listings/Page/RenderItem';
import AntDesign from 'react-native-vector-icons/AntDesign'
import I18n from 'language/I18n'
import { H1 } from 'styles';
import HeaderStack from '../Inners/HeaderStack';

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
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <HeaderStack {...this.props} style={styles.header} />
                <View style={styles.container} >
                    {
                        listings && listings.length!==0?
                            <View style={styles.searchResult}>
                                <FlatList
                                    data={listings}
                                    renderItem = {this._renderItem}
                                    keyExtractor = {this._keyExtractor}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                    style={styles.container}
                                />
                            </View>
                        :
                        <View style={styles.searchNoResult}>
                            <AntDesign name='frowno' size={150} color='#fff' style={styles.iconSad} />
                            <TextApp style={styles.textNoResult} >{I18n.t('noResultFound')}</TextApp>
                            <TextApp style={styles.text} >{I18n.t('noListingsMachingYourSearch')}</TextApp>
                        </View>
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#eee'
    },
    scrollView:{
        flex:1,
        // backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
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
        fontWeight:'bold'
    },
    searchNoResult:{
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        alignSelf: 'center',
        marginTop: '60%',
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
