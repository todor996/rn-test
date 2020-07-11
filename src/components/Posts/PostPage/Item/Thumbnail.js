
import React from 'react';
import {  
    Image,
    StyleSheet
} from 'react-native';
import {ReplaceLink} from '../../../App';

const Thumbnail = (props)=>{
    return(
        props.url 
        ?   <Image source={{uri:ReplaceLink(props.url)}} style={styles.image} />
        :   <Image source={require('../../../../img/noimage.png')} style={styles.image} />
    )
}
export default Thumbnail
const styles = StyleSheet.create({
    image:{
        width:null,
        height:null,
        flex:1,
        resizeMode:'cover',
        borderTopRightRadius:2,
        borderBottomRightRadius:2
    }
})