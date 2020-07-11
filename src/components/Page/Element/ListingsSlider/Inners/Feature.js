import React from 'react';
import {  
    View,
    StyleSheet,
    Platform
} from 'react-native';
import I18n from 'language/I18n'
import {TextApp} from 'App';

const Feature = (props)=>{
    return(
        <React.Fragment>
            {
                Platform.OS==='android' ? <View style={styles.before} /> : null
            }
            <View style={[styles.container,props.style]}>
                {
                    Platform.OS==='ios'? <View style={styles.before} /> :null
                }
                <TextApp style={styles.text} >{I18n.t('feature')}</TextApp>
                {
                    Platform.OS==='ios'? <View style={styles.after} /> :null
                }
            </View>
            {
                Platform.OS==='android' ? <View style={styles.after} /> : null
            }
        </React.Fragment>
    )
}
export default Feature
const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        paddingHorizontal:10,
        paddingVertical:6,
        position:'absolute',
        top:10,
        left:20,
    },
    ...Platform.select({
        ios:{
            before:{
                position:'absolute',
                left:-10,
                borderLeftWidth:10,
                borderLeftColor:'transparent',
                borderTopColor:'red',
                borderTopWidth:15,
            },
            after:{
                position:'absolute',
                left:-10,
                borderLeftWidth:10,
                borderLeftColor:'transparent',
                borderBottomColor:'red',
                borderBottomWidth:15,
                bottom:0,
            },
        },
        android:{
            before:{
                position:'absolute',
                left:10,
                borderLeftWidth:11,
                borderLeftColor:'transparent',
                borderTopColor:'red',
                borderTopWidth:15,
                top:10
            },
            after:{
                position:'absolute',
                left:11,
                borderLeftWidth:10,
                borderLeftColor:'transparent',
                borderBottomColor:'red',
                borderBottomWidth:15,
                top:20
            }
        }
    }),
    
    text:{
        color:'#fff'
    }
})