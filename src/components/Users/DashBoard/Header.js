import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather'
import { Appcolor, AppIconSize, AppFontSize } from '../../../styles';
import {TextApp} from '../..//App';

const Header = ({navigation,children,title})=>{
    goBack = ()=>{
        navigation.goBack()
    }
    return(
        <View style={styles.container} >
            <IconF name='arrow-left' size={AppIconSize} color={'#fff'} onPress={goBack} style={styles.icon} />
            <TextApp style={styles.text} >{title}</TextApp>
            {
                children
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:35,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:AppFontSize,
        fontWeight:'500',
        color:'#fff'
    },
    icon:{
        position:'absolute',
        left:10
    }
})
export default Header