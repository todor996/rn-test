
import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from '..//App';
import HTML from 'react-native-render-html'
import { AppFontSize, AppFontFamily, H3 } from 'styles';
let tagsStyles = {
    h3: { fontSize: H3, color: '#566985', 
    // fontFamily: AppFontFamily, 
    paddingBottom: 5 , fontWeight: 'normal', },
    p: { fontSize: AppFontSize, paddingBottom: 5, 
        // fontFamily: AppFontFamily, 
        color: '#8f95a5' },
    text: {fontSize:AppFontSize,paddingBottom: 5, 
        // fontFamily: AppFontFamily, 
        color: '#8f95a5'}
}
const Description = (props)=>{
    return(
        <View style={styles.container} >
            <HTML html={props.item.post_content} tagsStyles={tagsStyles} baseFontStyle={tagsStyles.text} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginBottom: 10,
    }
})
export default Description