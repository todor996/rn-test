

import React, { Component } from "react";
import { 
	StyleSheet, 
	View, 
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ListingActions from '../../../actions/ListingActions';
import ListingListItem from './ListingListItem';
import ListingListItemLoading from "./ListingListItemLoading";


class ListingsList extends Component {
	constructor(props){
		super(props);
	}
	static defaultProps = {
		settings:{
			posts_per_page:5,
			orderby:'Date',
			order:'Descending'
		}
	}
  	componentDidMount() {
		let {setting} = this.props
		let data = {
			'posts_per_page':setting.posts_per_page?setting.posts_per_page:5,
            'orderby' : setting.orderby?setting.orderby:'Date',
            'order' : setting.order?setting.order:'Descending',
		}
		this.props.ListingActions.getListings(data);
	}
  	render(){
		//console.log("ListingsList",this.props)
  		return (
            <View style={styles.container} >
				{
					this.props.listings.length!==0 ? <ListingListItem listings={this.props.listings} /> : 
					<ListingListItemLoading />
				}
            </View>
	    );
  	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		marginBottom: 30,
	},
})

function mapStateToProps(state) {
	return {
		listings: state.listings.posts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		ListingActions: bindActionCreators(ListingActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingsList);
