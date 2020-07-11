
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appcolor, AppIconLarge } from '../../../../../styles';
// import Lottie from 'lottie-react-native';

export default class Animation extends Component {
    render() {
        return (
            <View style={[styles.container]} >
                <Icon name='message-text' size={AppIconLarge} color='#fff' style={styles.icon} onPress={this.props.showModal} />
                {/*<Lottie source={require('../../../../../img/message.json')} style={styles.lottie} autoPlay={true} />*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right:15,
        top:200,
        justifyContent:'center',
    },
    icon:{
        padding: 8,
        borderRadius:20,
        backgroundColor: Appcolor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 10,
        position: 'absolute',
    },
    after:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.1)',
        alignSelf: 'center',
    },
    lottie:{
        width:60,
        height:60,
        alignSelf:'center',
        zIndex:1
    }
})