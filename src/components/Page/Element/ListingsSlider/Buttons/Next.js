


import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppIconLarge } from '../../../../../styles';


const Next = props=>{
    return(
        <View style={styles.container}>
            <Icon name='long-arrow-right' size={AppIconLarge} color='#eee' style={props.style} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:3,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:20
    },
})
export default Next;