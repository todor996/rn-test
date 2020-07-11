
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Platform
} from 'react-native'
// import Lottie from 'lottie-react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Appcolor } from 'styles';
// import NavigationService from 'helpers/NavigationService';
import R from 'ramda'
import {connect} from 'react-redux'

class IconMessage extends Component {
    handlePress = ()=>{
        if(!R.isEmpty(this.props.user)) this.props.navigation.navigate('Contacts','IconMessage')
        else this.props.navigation.navigate('Login','IconMessage')
    }
    render() {
        return (
            <View style={styles.container} >
                <FontAwesome5 name='facebook-messenger' size={18} color='#fff' style={styles.icon} onPress={this.handlePress} />
                {/*<Lottie source={require('Citybook/src/img/message.json')} style={[styles.lottie]} autoPlay={true} resizeMode='cover' />*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
        position:'absolute',
        bottom:5,
        right:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        borderRadius:20,
        backgroundColor:Appcolor,
        paddingHorizontal:12,
        paddingVertical:10,
        position:'absolute',
        zIndex:10,
        ...Platform.select({
            ios:{
                overflow: 'hidden',
            }
        })
    },
    lottie:{
        width:60,
        height:60,
        zIndex:1,
        top: 0,
        left:0
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data
    }
}
export default connect(mapStateToProps,null)(IconMessage)