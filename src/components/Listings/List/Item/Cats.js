
import React from 'react';
import LinearGradient  from 'react-native-linear-gradient';
import {  
    View,
    StyleSheet
} from 'react-native';
import {TextApp} from 'App';

const Cats = props=>{
    let Cats = props.cats.map((item,index)=>{
        return(
            <View style={styles.container} key={index}>
                <LinearGradient colors={['#3EAAFD', '#49CEFF']} style={styles.cat}  >
                    <TextApp style={[styles.txtCat]}>{item.name}</TextApp>
                </LinearGradient>
            </View>
        )
    })
    return Cats
}
const styles = StyleSheet.create({
    container:{
        padding:3,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:3
    },
    cat:{
        paddingTop: 4,
        paddingRight: 7,
        paddingBottom: 4,
        paddingLeft: 7,
        borderRadius:3
    },
    txtCat:{
        color:'#fff',
    },
})

export default Cats;