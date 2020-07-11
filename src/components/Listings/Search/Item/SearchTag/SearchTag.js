
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native'
import { Appcolor, AppIconSize, AppFontSize, AppFontMedium } from 'styles';
import {TextApp} from 'App';
import {connect} from 'react-redux'
import {getListingTags} from 'actions/ListingActions'
import RenderTag from './RenderTag';
import I18n from 'language/I18n'
import IconF from 'react-native-vector-icons/Feather'

class SearchTag extends Component {
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
            <SafeAreaView style={styles.safeView}>
                <View style={styles.container} >
                    <View style={styles.header}>
                        <IconF name='arrow-left' size={AppIconSize} color={'#fff'} style={styles.backIcon} onPress={this._onPress} />
                        <TextApp style={styles.textTag}>
                            {I18n.t('tags')}
                        </TextApp>
                        <TextApp style={styles.textDone} onPress={this._onPress} >{I18n.t('done')}</TextApp>
                    </View>
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
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
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
    textTag:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight:'500'
    },
    textDone:{
        fontSize:AppFontMedium,
        position:'absolute',
        right:10,
        color:'#fff'
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
export default connect(mapStateToProps,mapDispatchToProps)(SearchTag)