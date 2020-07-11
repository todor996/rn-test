
import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
 } from 'react-native';
import {connect} from 'react-redux';
import {getListingCats} from '../../../actions/ListingActions'
import Item from './Item'
import ItemLoading from './ItemLoading';
class ListingCats extends Component {
    // componentDidMount(){
    //     this.props.getListingCats();
    // }
    render() {
        //console.log("ListingCats",this.props)
        return (
            <View style={styles.container}>
                {
                    this.props.listing_cats.length!==0?
                        <Item listingCats={this.props.listing_cats} />
                    :<ItemLoading />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30
    }
})

const mapStateToProps = (state)=>({
    listing_cats:state.listings.listing_cats
})
const mapDispatchToProps = (dispatch)=>({
    getListingCats:()=>dispatch(getListingCats())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingCats);