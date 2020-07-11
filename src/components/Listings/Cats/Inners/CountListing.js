
import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {TextApp} from 'App';
import { Appcolor, AppFontMedium, AppIconMedium } from '../../../../styles';
const CountListing = (props)=>{
    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Icon name='map-pin' color='#fff' size={AppIconMedium} />
                <TextApp style={styles.text} >{`${props.count} locations`}</TextApp>
            </View>
        </View>
    )
}
export default CountListing
const styles = StyleSheet.create({
    wrapper:{
        top: 10,
        left:10,
        position: 'absolute',
        padding:5,
        borderRadius:20,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 20,
        padding:8,
        backgroundColor:Appcolor
    },
    text:{
        color:'#fff',
        paddingLeft:2,
        zIndex:1,
        fontSize:AppFontMedium
    }
})