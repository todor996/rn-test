
import React, { Component } from 'react';
import{
    View,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput,
    Platform
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'actions/UserActions';
// import AnimationButton from './AnimationButton';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import NavigationService from 'helpers/NavigationService';
import R from 'ramda'
import HeaderDrawer from '../Inners/HeaderDrawer';
import HeaderStack from '../Inners/HeaderStack';
import { AppFontSize, AppFontFamily, Appcolor } from '../../styles';

const {width} = Dimensions.get('window')

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:''
        }
    }
    onPress=()=>{
        this.props.UserActions.getUsers(this.state);
    }
    onChangeText = (name)=>(text)=>{
        this.setState({[name]:text})
    }
    componentDidUpdate(prevProps){
        if(this.props.user!==prevProps.user){
            if(this.props.user.success===true){
                let routeName = this.props.navigation.state.params
                if(routeName){
                    this.props.navigation.goBack()
                }else{
                    !R.isEmpty(this.props.user) ? NavigationService.navigate('UserRouter'):null
                }
            }else{
                // this.props.user.error
                Alert.alert('',I18n.t('userNameOrPasswordWrongLoginFail'))
                
            }
        }
    }
    goBack = ()=>{
        this.props.navigation.goBack()
        //console.log(this.props.navigation)
        
    }
    forgotPassword = ()=>{
        this.props.navigation.navigate('ForgotPassword')
    }
    componentWillUnmount(){
        //console.log("Login UnMount")
    }
    onSubmitEditing = ()=>{
        this.password.focus()
    }
    render() {
        //console.log("LOGIN State",this.state)
        // console.log("LOGIN Props",this.props)
        let behavior = Platform.OS==='ios' ? 'padding' : null
        return(
            <React.Fragment>
                {
                    this.props.navigation.state.routeName==='UserRouter'
                    ?   <HeaderDrawer {...this.props} style={styles.header} hiddenSearchIcon={true} iconMenuColor='#fff' />
                    :   <HeaderStack {...this.props} style={styles.header} iconBackColor='#fff' />
                }

                <KeyboardAvoidingView style={styles.container} behavior={behavior}  >
                    <TouchableWithoutFeedback  style={styles.container} onPress={dismissKeyboard} >
                        <ImageBackground source={require('../../img/citybook.png')} style={styles.container} >
                            <View style={styles.ctnImage}>
                                <Image source={require('../../img/ctb.png')} style={styles.imglogo}></Image>
                            </View>
                            <View style={styles.form}>
                                <TextInput 
                                    placeholder={I18n.t("userName")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText('userName')}
                                    returnKeyType='next'
                                    onSubmitEditing = {this.onSubmitEditing}
                                    autoCorrect={false}
                                    underlineColorAndroid={'transparent'}
                                />
                                <TextInput 
                                    placeholder={I18n.t("password")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText('password')}
                                    secureTextEntry={true}
                                    returnKeyType='done'
                                    ref={input=>this.password = input}
                                    autoCorrect={false}
                                    underlineColorAndroid={'transparent'}

                                />
                                <TouchableOpacity activeOpacity={1} onPress={this.forgotPassword} style={styles.lostPassword} >
                                    <TextApp>{I18n.t('lostYourPassword')} ?</TextApp>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} onPress={this.onPress} style={styles.button} >
                                    <TextApp style={styles.textButton} >{I18n.t('signIn')}</TextApp>
                                </TouchableOpacity>
                                <TextApp style={styles.textSignUp} onPress={()=>this.props.navigation.navigate('Register')}  >{`${I18n.t("haveNotAccountYet")}? `}{I18n.t("signUp")} </TextApp>
                                
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </React.Fragment>
                
        );
    }
  }

let styles = StyleSheet.create({
    flex:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:'#9dd4f9',
        // backgroundColor:'#2F3B59'
    },
    button:{
        height:40,
        backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
        // borderRadius:20
    },
    ctnImage:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    form:{
        flex:1,
        paddingHorizontal: 40,
    },
    imglogo:{
        width:200,
        height:200,
        resizeMode:'contain',
        alignSelf:'flex-end',
        // flex:1
    },
    textInput:{
        margin:0,
        marginTop:20,
        height:40,
        backgroundColor:'#fff',
        // borderRadius:20,
        paddingLeft:15,
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
        borderRadius: 4,
    },
    txtLogin:{
        color:'#fff',
        fontWeight:'500'
    },
    text:{
        color:'#fff',
        fontWeight:'500'
    },
    viewRegister:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    viewcheck:{
        flexDirection:'row',
        width,
        height:40,
        alignItems:'center'
    },
    loading:{
        width:15,
        height:15,
        resizeMode:'cover',
        marginLeft: 5,
    },
    header:{
        position: 'absolute',
    },
    lostPassword:{
        alignSelf:'flex-end',
        marginBottom: 20,
        marginTop:5
    },
    textSignUp:{
        marginVertical: 5,
        alignSelf: 'center',
    },
    textButton:{
        color:'#fff',
        fontWeight:'bold'
    }
})

function mapStateToProps(state) {
	return {
        user: state.users.userData,
        loading:state.loading
	};
}

function mapDispatchToProps(dispatch) {
	return {
		UserActions: bindActionCreators(UserActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)  ;


