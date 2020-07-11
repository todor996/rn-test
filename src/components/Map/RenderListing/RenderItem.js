

import React, { Component } from 'react';
import { 
    StyleSheet,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import NavigationService from 'helpers/NavigationService';
import {TextApp} from 'App';
import IconF from 'react-native-vector-icons/Feather'
import { Appcolor, AppFontMedium, AppFontSmall, AppFontSize, AppIconSmall } from '../../../styles';
import {ReplaceLink} from 'App';
import {Overlay} from 'App';

class RenderItem extends Component {
    _onPress = ()=>{
        NavigationService.navigate('ListingItem',this.props.item)
    }
    render() {
        let {item} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress} activeOpacity={1} >
                <View>
                    <Image source={{uri:ReplaceLink(item.thumbnail)}} style={styles.image} />
                    <Overlay />
                </View>
                
                <View style={styles.content}>
                    <TextApp style={styles.title} >{item.title}</TextApp>
                    <View style={styles.address}>
                        <IconF name='map-pin' size={AppIconSmall} color='#44f4b7' />
                        <TextApp style={styles.textAddress} >{item.address}</TextApp>
                    </View>
                    <View style={styles.sttBottom}>
                        <TextApp style={styles.star} >8<TextApp style={styles.starMax}>/ 10</TextApp></TextApp>
                        <TextApp style={[styles.status,item.statusText=="Now Closed"?{color:'#fc7171'}:{color:Appcolor}]}>{item.statusText?item.statusText:''}</TextApp>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:200,
        overflow: 'hidden',
        padding:10,
        paddingBottom:0,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
        marginLeft:5
    },
    image:{
        width:200,
        height:150,
        resizeMode:'cover',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        overflow: 'hidden',
    },
    content:{
        backgroundColor:'#fff',
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        width:200
    },
    title:{
        fontSize:AppFontMedium,
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:15
    },
    status:{
        textAlign:'right',
        fontSize:AppFontSmall,
        position:'absolute',
        right:10
    },
    sttBottom:{
        borderTopWidth:1,
        borderTopColor:'#eee',
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'center',
    },
    star:{
        fontSize:AppFontSize,
        color:'#52d38b'
    },
    starMax:{
        color:'grey'
    },
    address:{
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center',
        paddingBottom:5 

    },
    textAddress:{
        paddingLeft:2,
        color:'#666',
        fontSize:AppFontSmall
    }
})
export default RenderItem;