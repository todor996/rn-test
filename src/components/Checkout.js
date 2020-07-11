import React, { Component } from 'react';
import { 
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    View,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux'
import {processListingCheckout} from 'actions/UserActions'
import {TextApp} from 'App';
// import stripe from 'tipsi-stripe'
import Constants from 'constants'
import HeaderStack from './Inners/HeaderStack';
import CartItem from './Inners/CartItem';
import { Appcolor } from 'styles';
import I18n from 'language/I18n'
import PaymentMethod from './Inners/PaymentMethod';
import HeaderLinearGradient from './Inners/HeaderLinearGradient';
import { H3 } from '../styles';
import LinearGradient from 'react-native-linear-gradient'

const {width} = Dimensions.get('window')
// stripe.setOptions({
//     publishableKey: Constants.Payment.stripePublishableKey,
// });
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod:'paypal',
            quantity:1
        };
    }
    addQuantity = ()=>{
        this.setState({
            quantity:this.state.quantity+1
        })
    }
    removeQuantity = ()=>{
        if(this.state.quantity>1){
            this.setState({
                quantity:this.state.quantity-1
            })
        }
    }
    // requestPayment = (callback) => {
    //     ////    [configuration setCreateCardSources:options[@"createCardSource"] ? options[@"createCardSource"] : false];
    //     return stripe
    //         .paymentRequestWithCardForm()
    //         .then(stripeTokenInfo => {
    //             //console.log('Token created', { stripeTokenInfo });
    //             callback(stripeTokenInfo)
    //         })
    //         .catch(error => {
    //             //console.log('Payment failed', { error });
    //     });
    // };
    changePaymentMethod = (paymentMethod)=>{
        this.setState({
            paymentMethod
        })
    }
    checkout = ()=>{
        let data = {
            ...this.props.booking,
            paymentMethod:this.state.paymentMethod,
            quantity:this.state.quantity,
        }
        //console.log(data)

        if(this.state.paymentMethod==='paypal'){
            this.props.processListingCheckout(data)
        }else if(this.state.paymentMethod==='stripe'){
            // this.requestPayment((stripeTokenInfo)=>{
            //     data.stripeToken = stripeTokenInfo.tokenId
            //     this.props.processListingCheckout(data)
            // })
        }else{
            this.props.processListingCheckout(data)
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.payment!==this.props.payment){
            if(this.props.payment.success&&this.state.paymentMethod==='paypal'){
                this.props.navigation.navigate('PaymentPayPal',this.props.payment.url)
            // }else if(this.props.payment.success&&this.state.paymentMethod==='stripe'){
            //     Alert.alert('','Payment Success')
            }else if(this.props.payment.success&&this.state.paymentMethod==='banktransfer'){
                // Alert.alert('',this.props.payment.message)
                setTimeout(()=>{
                    this.props.navigation.goBack()
                },1000)
            }else{
                Alert.alert('','Payment fail.')
            }
        }
    }
    render() {
        //console.log(this.props)
        return (
            <React.Fragment>
                <ScrollView style={styles.container}  >
                    <HeaderLinearGradient {...this.props} />
                    <View style={styles.content}>
                        <PaymentMethod changePaymentMethod={this.changePaymentMethod} paymentMethod={this.state.paymentMethod} />
                        <CartItem {...this.props} addQuantity={this.addQuantity} removeQuantity={this.removeQuantity} quantity={this.state.quantity} />
                        <View style={styles.cartInfo}>
                            <TextApp style={styles.title} >{I18n.t('bookingInfo')}</TextApp>
                            <TextApp style={styles.text} >{I18n.t('date')}: {this.props.booking.lb_date}</TextApp>
                            <TextApp style={styles.text} >{I18n.t('time')}: {this.props.booking.lb_time}</TextApp>
                            <TextApp style={[styles.text]} >{I18n.t('quantity')}: {this.state.quantity}</TextApp>
                            <View style={styles.line} />
                            <TextApp style={[styles.title]}>{I18n.t('totals')}</TextApp>
                            <TextApp style={[styles.textTotals]}>$ {this.state.quantity*this.props.booking.amount}</TextApp>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.ctnButton}>
                    <TouchableOpacity style={styles.buttonCheckout} activeOpacity={1} onPress={this.checkout} >
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Appcolor, '#f471d6']} style={styles.linearGradient}>
                            <TextApp style={styles.textCheckout} >{I18n.t('checkout')}</TextApp>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    buttonCheckout:{
        // height:40,
        // justifyContent:'center',
        // alignItems: 'center',
        // backgroundColor:Appcolor,
        borderRadius:5,
        overflow: 'hidden',
    },
    content:{
        marginTop:width/3,
        zIndex:1
    },
    linearGradient:{
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCheckout:{
        color:'#fff'
    },
    header:{
        // backgroundColor:'#fff'
        position: 'absolute',
    },
    cartInfo:{
        padding:10,
        borderRadius:5,
        backgroundColor:'#fff',
        marginHorizontal: 10,
        marginTop:10,
        shadowColor: Appcolor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        elevation: 2,

    },
    title:{
        fontSize:H3,
        fontWeight: 'bold',
        paddingVertical:5
    },
    text:{
        paddingBottom:5
    },
    ctnButton:{
        backgroundColor:'#fff',
        paddingHorizontal:25,
        paddingVertical:20
    },
    line:{
        flex:1,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        height:1,
        paddingTop: 5,
    },
    textTotals:{
        color:'#a8b8c7',
        // fontSize:AppFontMedium,
        fontWeight:'bold',
        fontSize:H3,
        position: 'absolute',
        right:8,
        bottom:8
    }
})
function mapStateToProps(state){
    return{
        booking:state.users.booking,
        payment:state.users.payment
    }
}
function mapDispatchToProps(dispatch){
    return{
        processListingCheckout:(data)=>dispatch(processListingCheckout(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)