

import React, { Component } from "react";
import { 
	StyleSheet, 
	View,
    ActivityIndicator,
	FlatList,
	SafeAreaView,
} from "react-native";
import {connect} from 'react-redux';
import {getPage} from 'actions/ListingActions';
import { Appcolor, AppIconSize } from "../../../styles";
import RenderItem from './RenderItem';
import Loading from "../../Loading";
import Icon from 'react-native-vector-icons/Feather'
import FilterCategory from "./Inners/FilterCategory";
import {TextApp} from 'App';
import I18n from 'language/I18n'
import FilterLocation from "./Inners/FilterLocation";
class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			numberPost:10,
			page:[],
			filtered:false
		}
	}
	componentDidMount(){
		//Get listing page 
		this.props.getPage(this.state.numberPost);
	}
	shouldComponentUpdate(nextProps){
		//Component no render if newProps == prevProps
		if(nextProps.length===this.props.page.length){
			return false
		}else{
			return true
		}
	}
	componentDidUpdate(prevProps){
		if(prevProps.page!==this.props.page){
			this.setState({
				page:this.props.page
			})
		}
	}
	_keyExtractor = (item,index)=>index.toString()

    _renderItem = ({item,index})=>{
		// //console.log("Page",item);
		// //console.log("index",index);
        return(
            <RenderItem item={item} index={index}/>
        )
    }
    _onEndReached = ()=>{
		//Scroll last item from flatlist
		//Get listing page 
		//console.log("CALL GET DATA")
		
		if(this.state.filtered===false){
			this.setState({numberPost:this.state.numberPost+10})
			this.props.getPage(this.state.numberPost)
		}
	}
	filter = (callback)=>{
		if(callback && typeof callback==='function'){
			let newPage = callback(this.props.page)
			this.setState({filtered:true,page:newPage})
		}else{
			this.setState({filtered:false,page:this.props.page})
		}
	}
	back = ()=>{
		this.props.navigation.goBack()
	}
    render(){
		//console.log("Listings Page Props",this.props)
		//console.log("Listings Page State",this.state)
		return(
			
				<SafeAreaView style={styles.safeView} >
					<View style={styles.container} >
					<View style={styles.header}>
						<Icon name='arrow-left' size={AppIconSize} onPress={this.back} color='#fff' style={styles.backIcon} />
						{/* <FilterLocation filter={this.filter} /> */}
						<FilterCategory filter={this.filter} />
					</View>
					{
						this.state.page.length!==0?
							<React.Fragment>
								<FlatList
									data={this.state.page}
									renderItem = {this._renderItem}
									keyExtractor = {this._keyExtractor}
									onEndReachedThreshold={0.01}
									onEndReached = {
										this._onEndReached
									}
									showsVerticalScrollIndicator={false}
									numColumns={2}
									ListFooterComponent={()=><View style={styles.footer}></View>}
									contentContainerStyle={{margin:5}}
								/>
								{
									this.props.loading==true?
										<ActivityIndicator  style={styles.loading} color={Appcolor} />
									:null
								}
							</React.Fragment>
						:	null
						
					}
					{
						this.state.page.length===0&&this.props.loading===true
						?	<View style={styles.section}>
								<Loading />
							</View>
						:	null
					}
					{
						this.state.page.length===0&&this.state.filtered===true 
						?	<View style={styles.section}>
								<Icon name='alert-octagon' color='#ddd' size={100} style={styles.iconOop} />
								<TextApp>{I18n.t('noResultForFilter')}</TextApp>
							</View>
						:null
					}
					</View>
				</SafeAreaView>
			
		)
		
	}
	
}
let styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#eee'
	},
	safeView:{
		flex:1,
		backgroundColor:Appcolor
		// margin:5
	},
	section:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	loading:{
		// padding: 10,
		position: 'absolute',
		bottom:0,
		alignSelf: 'center',
	},
	footer:{
		height:25
	},
	header:{
		height:35,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:Appcolor,
		// flexDirection: 'row',
	},
	backIcon:{
		position: 'absolute',
		zIndex:1,
		left:10
	},
	iconOop:{
		position:'absolute'
	}

});

const mapStateToProps = (state)=>({
	page:state.listings.page,
	loading:state.loading
})
const mapDispatchToProps = (dispatch)=>({
	getPage:(number)=>dispatch(getPage(number))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page)