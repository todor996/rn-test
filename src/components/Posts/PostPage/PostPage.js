

import React, { Component } from "react";
import { 
	StyleSheet, 
    View,
    SafeAreaView,
    Platform,
    TouchableOpacity,
    ScrollView
} from "react-native";
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostActions from 'actions/PostActions';
import Loading from "../../Loading";
import Item from './Item/Item'
import { Appcolor } from "styles";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { AppIconSize } from "../../../styles";
import HeaderDrawer from "../../Inners/HeaderDrawer";

class PostPage extends Component{
	constructor(props){
		super(props);
		this.state={
            post_per_page:10,
		}
    }
    componentDidMount(){
        this.props.PostActions.getPostPage(this.state.post_per_page);
    }
    _onEndReached = ()=>{
        this.setState({post_per_page:this.state.post_per_page+10})
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.post_per_page!==prevState.post_per_page){
            this.props.PostActions.getPostPage(this.state.post_per_page);
            
        }
    }
    render(){
        //console.log("Post Page props",this.props)
        //console.log("Post Page State",this.state)
        return(
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                <HeaderDrawer {...this.props} style={styles.header} />
                {
                    this.props.postPage.length?
                        <Item postPage={this.props.postPage} onEndReached={this._onEndReached}  />
                    :
                    <View style={styles.loading}>
                        <Loading />
                    </View>
                }
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f3',
    },
    loading:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    header:{
        backgroundColor:'#fff'
    }
})

function mapStateToProps(state) {
	return {
		postPage: state.posts.page
	};
}

function mapDispatchToProps(dispatch) {
	return {
		PostActions: bindActionCreators(PostActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)  ;