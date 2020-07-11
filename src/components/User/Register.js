

import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Dimensions,
    Alert,
    CheckBox,
    TouchableOpacity,
    ImageBackground,
    Image,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TextInput
 } from 'react-native';
import {connect} from 'react-redux';
import {register} from 'actions/UserActions';
import { Appcolor } from 'styles';
import {checkEmail,checkUserName,checkPassword} from 'constants/validate';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { AppFontSize, AppFontFamily } from '../../styles';


const {width,height} = Dimensions.get('window');
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            email:''
        }
        this.input = {}
    }
    componentDidUpdate(prevProps){
        // console.log("Register",this.props)
        if(this.props.register!==prevProps.register){
            if(this.props.register){
                Alert.alert('',this.props.register)
            }else{
                Alert.alert('',this.props.register)
            }
        }
    }
    registerUser = ()=>{
        let user = new Promise((resolve,reject)=>{
            if(checkEmail(this.state.email)==false){
                reject(I18n.t('enterAValidEmailAddress'))
            }else{
                resolve()
            }
        });
        user.then(response=>{
            this.props.registerUser(this.state)
        }).catch(err=>{
            Alert.alert('',err)
        })
    }
    onSubmitEditing = (field)=>()=>{
        this.input[field].focus()
    }
    onChangeText = (name)=>(text)=>{
        this.setState({[name]:text})
    }
    render(){
        let behavior = Platform.OS==='ios' ? 'padding' : null
        return(
            <React.Fragment>
                <HeaderStack {...this.props} iconBackColor='#fff' style={styles.header} />
                <KeyboardAvoidingView style={styles.container} behavior={behavior}  >
                    <TouchableWithoutFeedback  style={styles.container} onPress={dismissKeyboard} >
                        <ImageBackground source={require('../../img/citybook.png')} style={styles.container} >
                            <View style={styles.formregister}>
                                <Image source={require('../../img/ctb.png')} style={styles.imglogo}></Image>
                                <TextInput 
                                    placeholder={I18n.t("userName")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText('userName')}
                                    returnKeyType='next'
                                    onSubmitEditing = {this.onSubmitEditing('fieldEmail')}
                                    autoCorrect={false}
                                    underlineColorAndroid={'transparent'}

                                />
                                <TextInput 
                                    placeholder={I18n.t("email")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText('email')}
                                    returnKeyType='next'
                                    onSubmitEditing = {this.onSubmitEditing('fieldPassword')}
                                    autoCorrect={false}
                                    ref={input=>this.input['fieldEmail'] = input}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'email-address'}

                                />
                                <TextInput 
                                    placeholder={I18n.t("password")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText('password')}
                                    secureTextEntry={true}
                                    returnKeyType='done'
                                    ref={input=>this.input['fieldPassword'] = input}
                                    autoCorrect={false}
                                    underlineColorAndroid={'transparent'}
                                />
                                {
                                    Platform.OS==='android'
                                    ?   <View style={styles.viewcheck}>
                                            <CheckBox onValueChange={(value)=>this.setState({agree:value})}/>
                                            <TextApp >{I18n.t("iAgreePrivacyPolicy")}</TextApp>
                                        </View>
                                    :   null    
                                }
                                <TouchableOpacity style={styles.touchRegister} onPress={this.registerUser} activeOpacity={1} >
                                    <TextApp style={styles.txtRegister}>{I18n.t("register")}</TextApp>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </React.Fragment>
            
        )
    }
 }

 let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#9dd4f9'
      },
    formregister:{
        flex:1,
        paddingHorizontal: 40,
        justifyContent:'center',
    },
    textInput:{
        margin:0,
        marginBottom:20,
        height:40,
        backgroundColor:'#fff',
        // borderRadius:4,
        paddingLeft:20,
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
    },
    txtRegister:{
        lineHeight:40,
        color:'#fff',
        fontWeight:'500'
    },
    touchRegister:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        // borderRadius:20,
        backgroundColor:Appcolor,
        height:40,
        zIndex:1
    },
    imglogo:{
        width:200,
        height:200,
        resizeMode:'contain',
        alignSelf:'center',
    },
    viewcheck:{
        flexDirection:'row',
        width,
        height:40,
        alignItems:'center'
    },
    header:{
        position: 'absolute',
    }
  })

function mapStateToProps(state) {
	return {
		register: state.users.register
	};
}

function mapDispatchToProps(dispatch) {
	return {
		registerUser:(data)=>dispatch(register(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);