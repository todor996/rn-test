
import React, { Component } from 'react';
import { 
    WebView,
    StyleSheet
} from 'react-native';
import HeaderStack from './HeaderStack';
import { Appcolor } from '../../styles';

export default class PaymentPayPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onNavigationStateChange = (data)=>{
        //console.log(data)
        data.title==='PayPal Checkout - Payment completed!'
        ? setTimeout(()=>{
            this.props.navigation.push('Home')
        },3000)
        : null
    }
    render() {
        return (
            <React.Fragment>
                <HeaderStack {...this.props} style={styles.header} />
                <WebView 
                    onNavigationStateChange={
                        this.onNavigationStateChange
                    }
                    source={{uri:this.props.navigation.state.params}}
                />
            </React.Fragment>
            
        )
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fff'
    }
})