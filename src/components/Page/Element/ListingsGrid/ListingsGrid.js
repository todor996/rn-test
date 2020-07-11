import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {getListings} from 'actions/ListingActions';
import List from './List';

class ListingsGrid extends Component {
    static defaultProps = {
        setting:{
            posts_per_page: 5,
            order_by:'Date',
            order:'Descending'
        }
    }
    componentDidMount(){
        let {setting} = this.props
        let query = {
            posts_per_page:setting.posts_per_page?setting.posts_per_page:6 ,
            order_by:setting.order_by?setting.order_by: 'Date',
            order: setting.order?setting.order: 'Descending',
        }
        setting.ids?query['ids'] = setting.ids:null;
        setting.ids_not?query['ids_not'] = setting.ids_not:null;
        setting.cat_ids?query['cat_ids'] = setting.cat_ids:null;
        this.props.getListings(query)
    }
    render() {
        //console.log("LISTING GRID",this.props);
        return (
            <List {...this.props} />
        )
    }
}
const styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
function mapStateToProps(state){
    return{
        listings:state.listings.posts
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListings:(query)=>dispatch(getListings(query))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingsGrid)