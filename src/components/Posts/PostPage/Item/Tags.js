import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from '../../..//App';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Appcolor,AppFontMedium, AppIconLarge } from '../../../../styles';
const Tags = (props)=>{
    return(
        <View style={styles.tags}>
            <FontAwesome name='tags' size={AppIconLarge} color={Appcolor} style={styles.icon}/>
            <TextApp style={[styles.text]}>
                {
                    props.tags.join(', ')
                }
            </TextApp>
        </View>
    )
}
export default Tags
const styles = StyleSheet.create({
    tags:{
        flexDirection:'row'
    },
    text:{
        fontSize:AppFontMedium,
        color:'#999',
        paddingRight:3,
        flexWrap:'wrap'
    },
    icon:{
        paddingRight:2
    },
})