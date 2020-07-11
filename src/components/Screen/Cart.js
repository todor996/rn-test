
import React, { Component } from 'react';
import { 
    View, 
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import {connect} from 'react-redux'
import CartItem from './Inners/CartItem';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import { AppFontSize } from 'styles';
import Header from '../Header';
import CurrentUser from './Inners/CurrentUser';
import {processListingCheckout} from 'actions/UserActions'
import R from 'ramda'
import PaymentMethod from './Inners/PaymentMethod';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            paymentMethod:'paypal'
        };
    }
    changePaymentMethod = (paymentMethod)=>{
        this.setState({
            paymentMethod
        })
    }
    renderItem = ({item,index})=>{
        return(
            <CartItem item={item} />
        )
    }
    keyExtractor = (item,index)=>index.toString()
    totalPrice = ()=>{
        let result = this.props.cart.reduce((total,item)=>{
            return total += Number(item.price) + item.price*Number(1/item.vat_percent)
        },0)
        return result
    }
    closeModal = ()=>{
        this.setState({
            modalVisible:false
        })
    }
    checkout = ()=>{
        if(!R.isEmpty(this.props.cart)){
            if(!R.isEmpty(this.props.user)){
                let data = {
                    'listing_id':'1892',
                    'user_id'   :this.props.user.ID,
                    'lb_date'   :'01/10/2019',
                    'lb_time'   :'09:13',
                    'amount'    :this.totalPrice()
                }
                this.props.processListingCheckout(data)
            }else{
                this.setState({
                    modalVisible:true
                })
            }
        }else{
            Alert.alert('','Your cart is empty')
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.payment!==this.props.payment){
            if(this.props.payment['success']===true){
                this.props.navigation.navigate('Checkout',this.props.payment['url'])
            }
        }
    }
    render() {
        //console.log("Cart",this.props)
        return (
            <SafeAreaView style={styles.safeView}>
                <Header title='Cart' {...this.props}  />
                <View style={styles.container}>
                    <FlatList 
                        data={this.props.cart}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={
                            <TextApp style={styles.total} >{`${I18n.t('total')}` + ':' + ` $ ${this.totalPrice()}`}</TextApp>
                        }
                        ListHeaderComponent={
                            <React.Fragment>
                                <PaymentMethod {...this.state} changePaymentMethod={this.changePaymentMethod} />
                                {/* <TextApp style={styles.listHeader} >{this.props.cart.length + ` ${I18n.t('items')}`}</TextApp> */}
                            </React.Fragment>
                        }
                    />
                </View>
                <View style={styles.cthBtn} >
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.goBack()} >
                        <TextApp>Later</TextApp>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCheckout} onPress={this.checkout} >
                        <TextApp style={styles.textCheckout} >Checkout</TextApp>
                    </TouchableOpacity>
                </View>
                <CurrentUser modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor:'#efefef'
        // alignItems: 'center',
    },
    listHeader:{
        marginVertical: 15,
        alignSelf: 'center',
        fontSize:AppFontSize
    },
    safeView:{
        flex:1,
        height:40
    },
    cthBtn:{
        flexDirection:'row'
    },
    button:{
        height:40,
        backgroundColor:'#f7f7f7',
        width:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonCheckout:{
        height:40,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#35c74a'
    },
    textCheckout:{
        color:'#fff'
    },
    total:{
        fontSize:AppFontSize,
        alignSelf:'center',
        marginVertical:15
    }
})

function mapStateToProps(state){
    return{
        cart:state.users.cart,
        user:state.users.userData.data,
        payment:state.users.payment
    }
}
function mapDispatchToProps(dispatch){
    return{
        processListingCheckout:(data)=>dispatch(processListingCheckout(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)