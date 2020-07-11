
import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from 'App';
import Feather from 'react-native-vector-icons/Feather'
import {AppIconMedium, AppFontMedium } from 'styles';
const Address = (props)=>{
    return(
        <View style={styles.container}>
            {/* <Feather name='map-pin' size={AppIconMedium} color='#44f4b7' style={styles.icon} /> */}
            <TextApp style={styles.text} numOfline={2} >{props.address}</TextApp>
        </View>
    )
}
export default Address
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        overflow: 'hidden',
        width:'100%',
        // marginHorizontal: 5,
        marginBottom: 5,
    },
    text:{
        // paddingLeft:2,
        color:'#666',
        fontSize:AppFontMedium,
        flexWrap:'wrap'
    },
    icon:{

    }
})