import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from '../../..//App';

const Item = (props)=>{
    return(
        <View style={styles.container} >
            <TextApp>Hello</TextApp>
        </View>
    )
}
export default Item
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})