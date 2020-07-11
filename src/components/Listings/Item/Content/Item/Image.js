

import React from 'react';
import { 
    StyleSheet,
    Image,
    View
 } from 'react-native';
import {Overlay} from 'App';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Appcolor, AppIconMedium} from 'styles'
import {TextApp} from 'App'
import {ReplaceLink} from 'App';
import I18n from 'language/I18n'

const ItemImage = props =>{
    return(
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <Icon name='image' size={AppIconMedium} color={Appcolor} />
                <TextApp style={styles.textTitle} >{I18n.t('image')}</TextApp>
            </View>
            <View>
                <Image  source={{uri:ReplaceLink(props.url)}}  style={[styles.image]}/>
                <Overlay />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginBottom:10,
        flexWrap:'wrap',
    },
    titleContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#e7e7ed',
        alignItems:'center',
        height:50,
        backgroundColor:'#fff',
        paddingLeft:10
    },
    textTitle:{
        fontWeight:'500',
        color:'#334e6f',
        paddingLeft:5
    },
    image:{
        height:300,
        resizeMode:'cover'
    },
})
export default ItemImage;