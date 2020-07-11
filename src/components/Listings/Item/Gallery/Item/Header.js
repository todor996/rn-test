
import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import I18n from 'language/I18n'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Appcolor, AppIconLarge } from 'styles';
import {TextApp} from 'App';
const Header = (props)=>{
    return(
        <View style={styles.gallery}>
            <Icon name="image-filter" size={AppIconLarge} color={Appcolor} />
            <TextApp style={[styles.text]} >{I18n.t('gallery')}</TextApp>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    gallery:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        padding:5,
        paddingTop:15,
        paddingBottom:15
    },
    text:{
        color:'#334e6f',
        marginLeft:5,
        fontWeight:'500'
    }
})