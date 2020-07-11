  
import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Alert,
    View
} from 'react-native';
// import Lottie from 'lottie-react-native';
import {connect} from 'react-redux';
import {updateUser} from 'actions/UserActions';
import NavigationService from 'helpers/NavigationService';
import R from 'ramda'

class Bookmark extends Component {
    componentDidUpdate(prevProps){
        if(this.props.user!==prevProps.user){
            Alert.alert('','Bookmared')
        }
    }
    _onPress = ()=>{
        let {user} = this.props
        if(Object.keys(user).length===0){
            NavigationService.navigate('Login')
        }else{
            let listing_bookmarks = user.data.listing_bookmarks && user.data.listing_bookmarks instanceof Array ? user.data.listing_bookmarks : []
            let l_bookmark = listing_bookmarks.push(this.props.id)
            //console.log({l_bookmark})
            let userData = {
                _cth_listing_bookmarks:listing_bookmarks,
            }
            //play animation
            this.animation.play()
            //update user data
            //console.log("User data",userData)
            this.props.updateUser(userData,user.ID);
        }
    }
    _checkBookmarked = ()=>{
        let {listing_bookmarks} = this.props.user.data
        let l_bookmark = Array.from(Object.keys(listing_bookmarks),(k)=>listing_bookmarks[k])
        let bookmarked = ''
        if(!R.isEmpty(listing_bookmarks) && listing_bookmarks instanceof Array )
            bookmarked = l_bookmark.find((item,index)=>{
                return item == this.props.id
            })
        else
            bookmarked = false
            // debugger;
        if(bookmarked) return (
            <View style={styles.container}>
                {/*<Lottie 
                    source={require('../../../../img/bookmark.json')} 
                    style={styles.lottie}
                    autoPlay={true}
                />*/}
            </View>
        )
        else return(
            <TouchableOpacity style={styles.container} onPress={this._onPress} >
                {/*<Lottie 
                    source={require('../../../../img/bookmark.json')} 
                    style={styles.lottie}  
                    ref={(animation)=>this.animation=animation}
                />*/}
            </TouchableOpacity>
        )
    }
    render() {
        //console.log("Bookmark",this.props)
        return (
            Object.keys(this.props.user).length!==0?this._checkBookmarked():
            <TouchableOpacity style={styles.container} onPress={this._onPress} >
                {/*<Lottie 
                    source={require('../../../../img/bookmark.json')} 
                    style={styles.lottie}  
                    ref={(animation)=>this.animation=animation}
                />*/}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        right:30,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderLeftColor:'#eee',
        borderRightColor:'#eee',
        justifyContent:'center',
        height:22
    },
    lottie:{
        width:30,
        height:30
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        updateUser:(data,id)=>dispatch(updateUser(data,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);