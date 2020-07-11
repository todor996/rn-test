import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Appcolor, AppIconSize } from 'styles';
import LinearGradient from 'react-native-linear-gradient'


const {width}= Dimensions.get('window')
export default class HeaderLinearGradient extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPress = ()=>{
        this.props.navigation.goBack()
    }
    render() {
        let iconBackColor=this.props.iconBackColor?this.props.iconBackColor:Appcolor
        return (
            <View style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#cf48b0', Appcolor]} style={styles.linearGradient}>
                </LinearGradient>
                <SimpleLineIcons name={'arrow-left'} size={AppIconSize} color={'#fff'} onPress={this.onPress} style={styles.backButton} />
                {this.props.children}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        overflow:'hidden',
        position: 'absolute',
        zIndex:1
    },
    linearGradient:{
        width,
        height:width/2,
        borderBottomLeftRadius: width/2,
        borderBottomRightRadius: width/2,
        transform: [
            {scaleX: 1.75}
        ],
    },
    backButton:{
        position: 'absolute',
        left:10,
        ...Platform.select({
            ios:{
                top: 40,
            },
            android:{
                top:10
            }
        }),
        zIndex:10,
        ...Platform.select({
            ios:{
                paddingHorizontal: 15,
            },
            android:{
                padding:0
            }
        })
    }
})