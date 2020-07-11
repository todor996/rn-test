
import React, { Component } from 'react';
import {  
    View,
    Animated,
    TextInput,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AppFontFamily, AppFontSize, AppFontMedium,AppIconMedium } from 'styles';
import { Appcolor } from '../../styles';
import LinearGradient from 'react-native-linear-gradient'

// RInput

const {width} = Dimensions.get('window')
const height = 50
const inputHeight = 30
const AnimIcon = Animated.createAnimatedComponent(Icon)
export class RInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:props.value ? props.value : '',
            transform : new Animated.Value(props.value ? 1 : 0)
        }
    }
    static propTypes = {
        // height: PropTypes.number,
        /*
         * This is the icon component you are importing from react-native-vector-icons.
         * import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
         * iconClass={FontAwesomeIcon}
         */
        iconClass: PropTypes.string,
        /*
         * Passed to react-native-vector-icons library as name prop
         */
        iconName: PropTypes.string,
        /*
         * Passed to react-native-vector-icons library as color prop.
         * This is also used as border color.
         */
        iconColor: PropTypes.string,

        // label
        label: PropTypes.string.isRequired
    }
    //default props
    static defaultProps = {
        // iconColor: 'white',
        // height: 48,
        // animationDuration: 300,
        iconName: 'pencil-alt',
    }
    onFocus = (event)=>{
        this.toggle(1)
        if(this.props.onFocus){
            this.props.onFocus(event)
        }
    }
    toggle = (value)=>{
        if(!this.state.value){
            Animated.timing(
                this.state.transform,
                {
                    toValue:value,
                    duration:250
                }
            ).start()
        }
    }
    onBlur = (event) =>{
        if(!this.state.value){
            this.toggle(0)
        }
        if(this.props.onBlur){
            this.props.onBlur(event)
        }
    }
    onChangeText = (text)=>{
        this.setState({
            value:text
        })
        if(this.props.onChangeText){
            this.props.onChangeText(text)
        }
    }
    render(){
        let bottom = this.state.transform.interpolate({
            inputRange: [0,1],
            outputRange: [10,height-(height-inputHeight)]
        })
        let fontSize = this.state.transform.interpolate({
            inputRange: [0,1],
            outputRange: [AppFontSize,AppFontMedium]
        })
        let transformIcon = {
            right:this.state.transform.interpolate({
                inputRange: [0,1],
                outputRange: [0,width+10]
            })
        }
        let transformView = {
            width : this.state.transform.interpolate({
                inputRange: [0.1,1],
                outputRange: ['0%','100%']
            })
        }
        return(
            <View style={[styles.container,this.props.containerStyles]}>
                <Animated.View style={[styles.labelCtn,{bottom}]} >
                    <Animated.Text style={[styles.text,{fontSize}]} >
                        {this.props.label}
                    </Animated.Text>
                </Animated.View>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={[styles.input]}
                    {...this.props}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText = {this.onChangeText}
                    value={this.props.value}
                />
                <AnimIcon name={this.props.iconName} color='#fff' size={AppIconMedium} style={[styles.icon,transformIcon]} />
                <Animated.View style={[styles.lineView,transformView]} />
            </View>
        )
    }
}
// Payment method
export const paymentMethod = ()=>{
    return[
        
        {
            method:'banktransfer',
            title : 'Bank Transfer',
            img:require('../../img/banktransfer.png'),
            name:'Transfer'
        },
        {
            method:'paypal',
            title : 'Pay via Paypal',
            img:require('../../img/PayPal-Logo.png'),
            name:'PayPal'

        },
        {
            method:'stripe',
            title : 'Pay via Stripe',
            img:require('../../img/stripe-logo.png'),
            name:'Stripe'
        }
    ]
}

//Overlay
export const Overlay = (props)=>{
    let backgroundColor = props.backgroundColor?props.backgroundColor:'rgba(142,142,242,0.1)'
    return(
        <View style={[styles.overlay,{backgroundColor},props.style]} />
    )
}

//TextApp
export class TextApp extends Component{
    render(){
        return(
            <Text 
                {...this.props}
                style={[styles.textApp,this.props.style]} 
            >
                {this.props.children}
            </Text>
        )
    }
}

//Input App
export class InputApp extends Component{
    render(){
        return(
            <TextInput style={[styles.inputApp,this.props.style]} underlineColorAndroid={'transparent'} {...this.props} />
        )
    }
}

//Replace link
export function ReplaceLink(link){
    let uri = link.replace('local.ser','192.168.0.100')
    return uri
}

//Button LinearGradient
export const ButtonlinearGradient = (props)=>{
    return(
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={props.onPress} >
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Appcolor, '#f471d6']} style={[styles.linearGradient,props.style]}>
                <TextApp style={styles.textButton} >{props.title}</TextApp>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height,
        backgroundColor:'#eee',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderColor:'black'
    },
    labelCtn:{
        position:'absolute',
        left:0
    },
    input:{
        fontSize:AppFontMedium,
        // fontFamily:AppFontFamily ,
        height:inputHeight
    },
    text:{
        // fontFamily:AppFontFamily,
        color:'#2a2f48'
    },
    icon:{
        position:'absolute',
        bottom:5
    },
    lineView:{
        // backgroundColor:'#35c74a',
        backgroundColor:Appcolor,
        height:1,
        position:'absolute',
        right:0
    },
    overlay:{
        width:'100%',
        height:'100%',
        zIndex:10,
        position:'absolute',
    },
    textApp:{
        fontSize:AppFontSize,
        // fontFamily:AppFontFamily
    },
    inputApp:{
        padding:0,
        margin:0,
        fontSize:AppFontSize,
        // fontFamily:AppFontFamily
    },
    button:{
        // marginHorizontal:10,
        // marginTop:40,
        shadowColor: Appcolor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 2,
    },
    linearGradient:{
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color:'#fff',
        fontWeight:'bold'
    }
})