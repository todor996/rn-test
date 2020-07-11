import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import {ReplaceLink} from 'App';
import {TextApp} from 'App';
import {Overlay} from 'App';
import { AppFontSize, AppFontMedium, AppIconMedium } from 'styles';
import {addToCart} from 'actions/UserActions'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

class CartItem extends Component {
    onPress = ()=>{
        let {cart} = this.props
        let newCart = cart.filter(item=>{
            return item.id!==this.props.item.id
        })
        //console.log(newCart)
        this.props.addToCart(newCart)
    }
    render() {
        //console.log('Cart Item',this.props)
        return (
            <View style={styles.container} >
                <View style={styles.ctnImage}>
                    <Image source={{uri:ReplaceLink(this.props.item.thumbnail)}} style={styles.image} />
                    <Overlay />
                </View>
                <View style={styles.content}>
                    <TextApp style={styles.title} >{this.props.item.title}</TextApp>
                    <TextApp style={styles.price} >{'$ '+this.props.item.price}</TextApp>
                    {/* <TextApp>{this.props.item.quantity}</TextApp> */}
                </View>
                <TouchableOpacity style={styles.remove} onPress={this.onPress} >
                    <Icon name='minus' size={AppIconMedium} color='grey' style={{alignSelf:'center'}}  />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#fff',
        borderRadius: 2,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 5,
        marginHorizontal: 10,
    },
    ctnImage:{
        flex:0.38
    },
    image:{
        width:'100%',
        height:130
    },
    content:{
        marginLeft:10,
        marginTop:10,
        flex:0.5
    },
    title:{
        color:'#566985',
        fontSize:AppFontSize,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    price:{
        color:'#c6564d',
        fontSize:AppFontMedium,
        fontWeight:'bold',
        marginTop:'40%'
    },
    remove:{
        flex:0.12,
        justifyContent: 'center',
        // alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
    }
})
function mapStateToProps(state){
    return{
        cart:state.users.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart:(data)=>dispatch(addToCart(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)