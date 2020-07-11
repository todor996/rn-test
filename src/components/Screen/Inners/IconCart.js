import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
} from 'react-native';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconLarge, AppFontSmall } from 'styles';
import {TextApp} from 'App';
import NavigationService from 'helpers/NavigationService';
class IconCart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onPress = ()=>{
        NavigationService.navigate('Cart')
    }
    render() {
        return (
            <View style={styles.container} >
                <Icon name='shopping-bag' color={'#fff'} size={AppIconLarge} onPress={this.onPress} />
                <TextApp style={styles.text} >{this.props.users.cart.length}</TextApp>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:'10%',
        backgroundColor:Appcolor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:'#fff',
        fontSize:AppFontSmall,
        position: 'absolute',
        top: 0,
        right:'10%',
        top:'5%',
        // padding: 3,
        // backgroundColor:'green'
    }
})

function mapStateToProps(state){
    return{
        users:state.users
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IconCart)