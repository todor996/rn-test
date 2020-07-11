import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { AppIconLarge, AppFontMedium,Appcolor } from 'styles';
import {TextApp} from 'App';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const DateTime = (props)=>{
    const jsCoreDateCreator = (dateString) => { 
        // dateString *HAS* to be in this format "YYYY-MM-DD HH:MM:SS"  
        let dateParam = dateString.split(/[\s-:]/)  
        dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()  
        return new Date(...dateParam)  
    }
    let date = jsCoreDateCreator(props.item.post_date)
    return(
        <View style={styles.container} >
            <Icon name='clock' size={AppIconLarge} color={Appcolor} />
            <TextApp style={styles.dateTime} >
                {
                    date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear() + ' |  ' + date.getHours()+ ':' + date.getMinutes()
                }
            </TextApp>
        </View>
    )
}
export default DateTime
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    dateTime:{
        fontSize:AppFontMedium,
        color:'#8f95a5',
        marginLeft: 5,
    }
})