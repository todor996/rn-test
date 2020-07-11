
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {paymentMethod} from 'App'
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconSize } from 'styles';
import { TextApp } from '../App';
import { H1 } from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const {width} = Dimensions.get('window')
export default class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderItem = ({item,index})=>{
        onPress= ()=>{
            this.props.changePaymentMethod(item.method)
        }
        let actived = this.props.paymentMethod===item.method ? styles.activeItem : {}
        let activedColor = this.props.paymentMethod===item.method ? Appcolor : '#a8b8c7'
        return(
            <TouchableOpacity style={[styles.item,actived]} onPress={onPress} activeOpacity={1} >
                {
                    item.method==='banktransfer'
                    ?   <FontAwesome name='bank' size={40} color={activedColor} />
                    :   <TextApp style={[styles.textName,{color:activedColor}]} >{item.name}</TextApp>
                }
                
            </TouchableOpacity>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        return (
            <FlatList 
                data={paymentMethod()}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{marginHorizontal:10}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:250,
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
        width:(width-40)/3,
        height:80,
        borderRadius: 4,
        backgroundColor:'#fff',
        marginRight: 10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 5,
    },
    image:{
        resizeMode:'cover',
        flex:1,
        width:null,
        height:null
    },
    check:{
        position: 'absolute',
        top: 0,
        right:0,
        zIndex:1
    },
    textName:{
        fontSize:H1,
        fontWeight: 'bold',
    },
    activeItem:{
        shadowColor: Appcolor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 2,
    },
})
