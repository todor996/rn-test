
import React from 'react'
import {  
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {TextApp} from '../../../..//App';
import { AppFontMedium, AppIconMedium } from '../../../../../styles';

const Feature = props=>{
    let {feature,icon} = props;
    let fea = Array();
    for(let i=0;i<feature.length;i++){
        $icon = icon[i].icon_class;
        $icon !=null ? $icon = icon[i].icon_class.replace("fa fa-",""):$icon = "check";
        fea.push(
            <TextApp key={i} style={styles.text}> <Icon name={`${$icon}`} size={AppIconMedium} color={'#4DB7FE'} style={styles.icon} /> {`${  feature[i]}`}</TextApp>
        )
    }
    return fea;
}
export default Feature;
const styles = StyleSheet.create({
    text:{
        paddingBottom:10,
        fontSize:AppFontMedium,
        width:'50%',
        color:'#888DA0',
    },
    icon:{
        marginBottom:8
    }
})