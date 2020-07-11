
import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from 'App';
import IconF from 'react-native-vector-icons/Feather'
import {AppIconMedium, AppFontMedium } from 'styles';
const Address = (props)=>{
    return(
        <View style={styles.container}>
            {/* <IconF name='map-pin' size={AppIconMedium} color='#44f4b7' style={styles.icon} /> */}
            <TextApp style={styles.text} numOfline={2} >{props.address}</TextApp>
        </View>
    )
}
export default Address
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal: 5,
        marginBottom: 5,
        flexGrow: 1,
        flex:1,
        alignItems: 'center',
        marginLeft: 10,
    },
    text:{
        paddingLeft:2,
        color:'#666',
        // fontSize:AppFontMedium,
        flexWrap:'wrap'
    },
    icon:{

    }
})