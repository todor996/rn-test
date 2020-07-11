import React from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
// import Lottie from 'lottie-react-native'

const RenderSliderLoading = (props)=>{
    return(
        <View style={styles.container} >
            <View style={styles.ctnImage}>
                {/*<Lottie source={require('../../../../img/imageLoad.json')} style={styles.lottie} autoPlay={true} />*/}
            </View>
            <View style={styles.content} />
        </View>
    )
}
export default RenderSliderLoading
const styles = StyleSheet.create({
    container:{
        width:220,
        marginRight:6,
    },
    ctnImage:{
        height:150,
        width:'100%',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    lottie:{
        width:80,
        height:80
    },
    content:{
        width:'100%',
        backgroundColor:'#fff',
        borderBottomRightRadius:2,
        borderBottomLeftRadius:2,
    }
})