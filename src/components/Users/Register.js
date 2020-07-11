

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
    Platform
 } from 'react-native';
import {connect} from 'react-redux';
import {register} from 'actions/UserActions';
import { Appcolor } from 'styles';
import {checkEmail,checkUserName,checkPassword} from '../constants/validate';
import InputApp from 'App/InputApp';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';

const {width,height} = Dimensions.get('window');
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            passWord:'',
            email:''
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.register!==this.props.register&&nextProps.register=="Register Success"){
            Alert.alert(
                '',
                I18n.t('registerSuccess'),
                [
                  {text: 'OK', onPress: () => this.props.navigation.navigate('UserRouter')},
                ],
                { cancelable: false }
            )
        }else{
            Alert.alert('',nextProps.register)
        }
    }
    registerUser = ()=>{
        let user = new Promise((resolve,reject)=>{
            if(this.state.userName==''||this.state.passWord==''||this.state.email==''){
                reject(I18n.t('enterAllInfomation'))
            }else{
                if(checkEmail(this.state.email)==false){
                    reject(I18n.t('enterAValidEmailAddress'))
                }else{
                    if(checkPassword(this.state.passWord)==false){
                        reject(I18n.t('passwordNeed'))
                    }else{
                        if(checkUserName(this.state.userName)==false){
                            reject(I18n.t('enterUserName'))
                        }else{
                            resolve()
                        }
                    } 
                }
            }
        });
        user.then(response=>{
            this.props.registerUser(this.state)
        }).catch(err=>{
            Alert.alert('',err)
        })
    }
    _onChangeText = (text,name)=>{
        this.setState({[name]:text})
    }
    render(){
        return(
            <View style={styles.flex_1} >

                {/* <Header androidStatusBarColor={'rgba(0,0,0,0.5)'} style={styles.header} /> */}
                <HeaderStack {...this.props} iconBackColor='#fff' style={{position:'absolute'}} />
                <ImageBackground source={require('../../img/citybook.png')} style={styles.container} >
                    <View style={styles.formregister}>
                        <Image source={require('../../img/ctb.png')} style={styles.imglogo}></Image>
                        <InputApp 
                            placeholder={I18n.t("userName")}
                            onChangeText={this._onChangeText}
                            name='userName'
                            style={styles.txtinput}
                        />
                        <InputApp 
                            placeholder={I18n.t("email")}
                            onChangeText={this._onChangeText}
                            name='email'
                            style={styles.txtinput}
                        />
                        <InputApp 
                            placeholder={I18n.t("password")}
                            onChangeText={this._onChangeText}
                            name='passWord'
                            style={styles.txtinput}
                            secureTextEntry={true}
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
            </View>
        )
    }
 }

 let styles = StyleSheet.create({
    flex_1:{
      flex:1
    },
    form_register:{
      padding:10,
      alignItems:'center',
      backgroundColor:'#fff'
    },
    container: {
        flex: 1,
        backgroundColor:'#9dd4f9'
      },
      formregister:{
        flex:1,
        margin:60,
        justifyContent:'center',
      },
      txtinput:{
        margin:0,
        marginBottom:20,
        height:35,
        backgroundColor:'#fff',
        borderRadius:4,
        paddingLeft:20
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
        borderRadius:20,
        backgroundColor:Appcolor,
        height:35,
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