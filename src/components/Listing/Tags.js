
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native'
import { Appcolor, AppFontSize } from 'styles';
import {TextApp} from 'App';
import {connect} from 'react-redux'
import {getListingTags} from 'actions/ListingActions'
import RenderTag from './RenderTag';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';

class Tags extends Component {
    UNSAFE_componentWillMount(){
        this.props.getListingTags()
    }
    _renderItem= ({item,index})=>{
        return(
            <RenderTag item={item} />
        )
    }
    _key = (item,index)=>index.toString()
    _onPress = ()=>{
        this.props.navigation.goBack()
    }
    render() {
        //console.log("Search Tag",this.props)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <HeaderStack {...this.props} style={styles.header}>
                    <TextApp style={styles.textDone} onPress={this._onPress} >{I18n.t('done')}</TextApp>
                </HeaderStack>
                <View style={styles.container} >
                    {
                        this.props.listing_tags.length!==0?
                            <FlatList
                                data={this.props.listing_tags}
                                renderItem={this._renderItem}
                                keyExtractor={this._key}
                                showsVerticalScrollIndicator={false}
                            />
                        :null
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    scrollView:{
        flex:1
    },
    header:{
        backgroundColor:'#fff'
    },
    textTag:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight:'500'
    },
    textDone:{
        fontSize:AppFontSize,
        position:'absolute',
        right:10,
        color:Appcolor,
        top: 40,
    },
    backIcon:{
        position:'absolute',
        zIndex:10,
        left:10
    }
})
function mapStateToProps(state){
    return{
        listing_tags:state.listings.listing_tags
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListingTags:()=>dispatch(getListingTags())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tags)