import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Alert,
} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from 'helpers/NavigationService';
import {deleteBookmark,updateUser} from 'actions/UserActions';
import {getListingItem} from 'actions/ListingActions';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import { AppFontSize } from 'styles';
import Swipeout from 'react-native-swipeout';

 // Buttons

class RenderBookmark extends Component {
    constructor(props){
        super(props);
        this.state = {
            listing_item:{},
            swipeoutBtns : [
                {
                    text: I18n.t('delete'),
                    backgroundColor:'red',
                    onPress:this.deleteBookmark
                }
            ]
        }
    }
    UNSAFE_componentWillMount(){
        this.props.getListingItem(this.props.id,(data)=>{
            this.setState({
                listing_item:data
            })
        })
    }
    removeItemBookmark = ()=>{
        let {listing_bookmarks} = this.props.user.data
        let l_bookmarks = listing_bookmarks.filter(bookmark=>bookmark!==this.props.id)
        return l_bookmarks
    }
    deleteBookmark = ()=>{
        //delete bookmark
        let {listing_bookmarks} = this.props.user.data
        let l_bookmarks = listing_bookmarks.find(bookmark=>bookmark===this.props.id) ? this.removeItemBookmark() : []
        let userData = {
            _cth_listing_bookmarks:l_bookmarks,
        }
        //console.log(userData)
        Alert.alert(
            '',
            I18n.t('youWantDeleteBookmark'),
            [
                {text: 'Cancel', onPress: () =>{
                     //console.log('Cancel Pressed')
                }},
                {text: 'OK', onPress: () => this.props.updateUser(userData,this.props.user.ID)},
            ],
            { cancelable: false }
        )
    }

    render() {
        //console.log("RENDER  BM PROPS",this.props)
        //console.log("RENDER  BM STATE",this.state)
        return (
            <Swipeout right={this.state.swipeoutBtns} style={styles.swipeOut}  >
                <View style={styles.content}>
                    <TextApp onPress = {()=>NavigationService.navigate('ListingTab',this.state.listing_item)} style={[styles.text]}>{this.state.listing_item.title}</TextApp>
                    <TextApp  style={[styles.text]}>{this.props.user.data.display_name}</TextApp>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',height:50,alignItems:'center'
    },
    text:{
        textAlign:'center',
        flex:0.5,
        fontSize:AppFontSize,
        color:'#000',
    },
    swipeOut:{
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    }
})
function mapStateToProps(state){
    return{
        listing_item:state.listings.item,
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        deleteBookmark:(data)=>dispatch(deleteBookmark(data)),
        getListingItem:(id,callback)=>dispatch(getListingItem(id,callback)),
        updateUser:(data,id)=>dispatch(updateUser(data,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderBookmark)
