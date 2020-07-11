
import React, { Component } from 'react';
import {  

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import {addToCart} from 'actions/UserActions'

const AddToCart = (props) =>{
    onPress =  () => {
        let data = {
            id:props.item.id,
            quantity:1,
            thumbnail:props.item.thumbnail,
            vat_percent:props.item.vat_percent,
            price:props.item.price_from,
            title:props.item.title
        }
        let {cart} = props
        let isBooking = cart.find(item=>item.id === props.item.id)
        //console.log(cart)
        if(!isBooking)
            cart.push(data)
            props.addToCart(cart)
    }
    //console.log("Add Cart",props)
    return(
        <Icon name='apple' onPress={onPress} color='red' />
    )
}
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
export default connect(mapStateToProps,mapDispatchToProps)(AddToCart)