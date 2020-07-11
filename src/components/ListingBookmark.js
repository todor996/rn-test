
import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
// import Lottie from 'lottie-react-native'
import {connect} from 'react-redux'
import R from 'ramda'
import {updateUser} from 'actions/UserActions';
class ListingBookmark extends Component{
    onPress = ()=>{
        // //console.log("Touch")
        let {user} = this.props
        if(!R.isEmpty(user)){
            let listing_bookmarks = user.data.listing_bookmarks.length && user.data.listing_bookmarks instanceof Array ? user.data.listing_bookmarks : []
            listing_bookmarks.push(this.props.item.id)
            let userData = {
                _cth_listing_bookmarks:listing_bookmarks,
            }
            //play animation
            this.animation.play()
            //update user data
            //console.log("User data",userData)
            this.props.updateUser(userData,user.ID);
        }else{
            this.props.navigation.navigate('Login','ListingBookmark')
        }
    }
    checkBookmarked = () => {
        let {listing_bookmarks} = this.props.user.data
        if(listing_bookmarks.length){
            let bookmarked = listing_bookmarks.find((item,index)=>{
                return item == this.props.item.id
            })
            if(bookmarked){
                return(
                    <View  style={styles.container} >
                        {/*<Lottie 
                            source={require('../img/bookmark.json')} 
                            style={styles.lottie}  
                            ref={(animation)=>this.animation=animation}
                            autoPlay={true}
                        />*/}
                    </View>
                )
            }else{
                return(
                    <TouchableOpacity  activeOpacity={1} style={styles.container} onPress={this.onPress} >
                        {/*<Lottie 
                            source={require('../img/bookmark.json')} 
                            style={styles.lottie}  
                            ref={(animation)=>this.animation=animation}
                        />*/}
                    </TouchableOpacity>
                )
            }
        }else{
            return(
                <TouchableOpacity  activeOpacity={1} style={styles.container} onPress={this.onPress} >
                    {/*<Lottie 
                        source={require('../img/bookmark.json')} 
                        style={styles.lottie}  
                        ref={(animation)=>this.animation=animation}
                    />*/}
                </TouchableOpacity>
            )
        }
    }
    componentDidUpdate(prevProps){
        // if(prevProps.user){
        //     if(this.props.user!== prevProps.user){
        //         if(this.props.user.data){
        //             Alert.alert('','Bookmared')
        //         }
        //     }
        // }
    }
    render(){
        // console.log("Bookmark",this.props)
        return(
            !R.isEmpty(this.props.user)
            ?
                this.checkBookmarked()
            :   
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={this.onPress} >
                {/*<Lottie 
                    source={require('../img/bookmark.json')} 
                    style={styles.lottie}  
                    ref={(animation)=>this.animation=animation}
                />*/}
            </TouchableOpacity>
        )
    }
}

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
export default connect(mapStateToProps,mapDispatchToProps)(ListingBookmark)

const styles = StyleSheet.create({
    container:{
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        padding: 5,    
        marginRight: 5,
        shadowColor: '#d2d2de',
        shadowOpacity: 1.0,
    },
    lottie:{
        width:30,
        height:30
    }
})