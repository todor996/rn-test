import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    Image,
} from 'react-native';
import {ReplaceLink,TextApp,Overlay} from 'App';
import {H3 } from 'styles';
import { Appcolor } from '../../styles';

const CartItem = (props)=>{
    let item = props.booking
    return(
        <View style={styles.container} >
            <View style={styles.ctnImage}>
                <Image source={{uri:ReplaceLink(item.thumbnail)}} style={styles.image} />
                <Overlay />
            </View>
            <View style={styles.content}>
                <TextApp style={styles.title} >{item.title}</TextApp>
                <TextApp style={styles.price} >{'$ '+item.amount}</TextApp>
            </View>
            {/* <View style={styles.quantity}>
                <TouchableOpacity activeOpacity={1} onPress={props.addQuantity} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                    <FontAwesome5 name='plus' size={AppIconSize} color='grey'  />
                </TouchableOpacity>
                
                <TextApp  >{props.quantity}</TextApp>
                <TouchableOpacity activeOpacity={1} onPress={props.removeQuantity} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                    <FontAwesome5 name='minus' size={AppIconSize} color='grey'  />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default CartItem
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 5,
        marginHorizontal: 10,
        marginTop:20,
        padding: 10,
        shadowColor: Appcolor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        elevation: 2,
    },
    ctnImage:{
        width:90
    },
    image:{
        width:90,
        height:80,
        borderRadius:2
    },
    content:{
        marginLeft:10,
        marginTop:10,
        flex:0.9
    },
    title:{
        color:'black',
        fontSize:H3,
        flexWrap: 'wrap',
    },
    price:{
        color:'#a8b8c7',
        fontWeight:'bold',
        fontSize:H3,
        position: 'absolute',
        right:0,
        bottom:8
    },
    quantity:{
        flex:0.15,
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon:{
        flex:1,
        alignSelf: 'center',
    },

})