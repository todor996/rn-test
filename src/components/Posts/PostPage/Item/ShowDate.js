import React from 'react';
import {  
    StyleSheet
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather'
import {TextApp} from '../../..//App';
import { Appcolor, AppFontMedium, AppIconLarge } from '../../../../styles';
const ShowDate = (props)=>{
    return(
        <React.Fragment>
            <IconF name='calendar' size={AppIconLarge} color={Appcolor} style={styles.icon}/>
            <TextApp style={styles.text}>{props.time}</TextApp>
        </React.Fragment>
    )
}
export default ShowDate
const styles = StyleSheet.create({
    icon:{
        paddingRight:2
    },
    text:{
        fontSize:AppFontMedium,
        color:'#999',
        paddingRight:3,
        flexWrap:'wrap'
    }
})