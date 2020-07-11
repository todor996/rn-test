import React from 'react';
import {  
    // Text,
    StyleSheet
} from 'react-native';
// import Lottie from 'lottie-react-native';
const RenderStar = (props) => {
    let stars = Array();
    // for(let i = 0;i<Number(props.rating);i++){
    //     stars.push(
    //         <Lottie source={require('../../../../../img/testiStar.json')}  style={styles.lottie} autoPlay={true} key={i} />
    //     )
    // }
    return(
        stars
    )
}
export default RenderStar
const styles = StyleSheet.create({
    lottie:{
        width:18,
        height:18,
        transform:([{scale:1.2}])
    }
})