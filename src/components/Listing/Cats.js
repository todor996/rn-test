import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native'
import { Appcolor, AppFontSize } from 'styles';
import {connect} from 'react-redux'
import {getListingCats} from 'actions/ListingActions'
import RenderCat from './RenderCat';
import HeaderStack from '../Inners/HeaderStack';

class Cats extends Component {
    UNSAFE_componentWillMount(){
        if(this.props.listing_cats.length===0){
            this.props.getListingCats()
        }
    }
    _renderItem = ({item,index})=>{
        return(
            <RenderCat item={item}  {...this.props} />
        )
    }
    _key = (item,index)=>index.toString()
    render() {
        //console.log("Search Cat",this.props)
        return (
            <ScrollView style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header}  />
                <View style={styles.container} >
                    {
                        this.props.listing_cats.length!==0?
                            <FlatList
                                data={this.props.listing_cats}
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
    textCat:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight:'500'
    },
})
function mapStateToProps(state){
    return{
        listing_cats:state.listings.listing_cats
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListingCats:()=>dispatch(getListingCats())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cats)