import React from 'react';
import { 
    StyleSheet
} from 'react-native';
import { Appcolor, AppFontSmall, AppIconMedium } from '../../../../styles';
import {TextApp} from '../../..//App';
import IconF from 'react-native-vector-icons/Feather'
const Views = (props)=>{
    return(
        <React.Fragment>
            <IconF name='eye' size={AppIconMedium} color={Appcolor} style={styles.icon}/>
            <TextApp style={styles.text}>{props.views}</TextApp>
        </React.Fragment>
    )
}
export default Views
const styles = StyleSheet.create({
    icon:{
        paddingRight:2
    },
    text:{
        fontSize:AppFontSmall,
        color:'#999',
        paddingRight:3,
        flexWrap:'wrap'
    }
})

