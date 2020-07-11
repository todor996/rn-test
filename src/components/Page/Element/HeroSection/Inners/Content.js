import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import HTML from 'react-native-render-html'
import { AppFontSize } from 'styles';
import { AppFontFamily,H3, H2 } from '../../../../../styles';

const tagsStyles = {
    h2:{
        fontSize:23,
        // fontFamily: AppFontFamily,
        color:'#fff',
        alignSelf: 'center',
    },
    h3:{
        fontSize:H3,
        // fontFamily:AppFontFamily,
        color:'#fff',
        alignSelf: 'center',
        fontWeight:'400'
    }
}

const Content = (props)=>{
    return(
        <View style={styles.container}>
            <HTML html={props.settings.content} tagsStyles={tagsStyles} />
        </View>
    )
}
export default Content
const styles = StyleSheet.create({
    container:{
        // zIndex:20
    }
})