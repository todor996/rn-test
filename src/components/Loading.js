
import React from 'react';
import { StyleSheet } from 'react-native';
// import Lottie from 'lottie-react-native'

const Loading  = props =>(
    <React.Fragment>
        {/*<Lottie source={require('../img/appLoading.json')} style={styles.lottie} autoPlay={true} />*/}
        {
            props.children
        }
    </React.Fragment>
)

const styles = StyleSheet.create({
    lottie:{
        width:60,
        height:60
    }
})
export default Loading