
import React, { Component } from 'react';
import{
    View,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet,
    AsyncStorage,
    Alert,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'actions/UserActions';
const base64 = require('base-64');
import AnimationButton from './AnimationButton';
import {TextApp} from 'App';
import InputApp from 'App/InputApp';
import I18n from 'language/I18n'
import NavigationService from 'helpers/NavigationService';
import R from 'ramda'
import HeaderDrawer from '../../Inners/HeaderDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AppIconSize } from '../../../styles';
import HeaderStack from '../../Inners/HeaderStack';

const {width} = Dimensions.get('window')

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            passWord:''
        }
    }
    onPress=(callback)=>{
        //check user enter user name and password
        let user = new Promise((resolve,reject)=>{
            if(this.state.userName !== ''){
                if(this.state.passWord !== ''){
                    resolve()
                }else{
                    reject(`${I18n.t('enterUserNameAndPassword')}.`);
                }
            }else{
                reject(`${I18n.t('enterUserNameAndPassword')}.`);
            }
        })
        user.then(response=>{
            //get user data and save user data in AsyncStorage
            callback()
            // let pass = base64.encode(this.state.passWord);
            // AsyncStorage.setItem('login',JSON.stringify(pass));
            this.props.UserActions.getUsers({userName:this.state.userName,passWord:this.state.passWord});
        }).catch(err=>{
            Alert.alert('',err);
        })
    }
    onChangeText = (text,name)=>{
        this.setState({[name]:text})
    }
    componentDidUpdate(prevProps){
        if(this.props.users!==prevProps.users){
            let routeName = this.props.navigation.state.params
            if(routeName){
                this.props.navigation.goBack()
            }else{
                !R.isEmpty(this.props.users) ? NavigationService.navigate('Dashboard'):null
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
    render() {
        //console.log("LOGIN State",this.state)
        //console.log("LOGIN Props",this.props)
        return(
            <React.Fragment>
                {
                    this.props.navigation.state.routeName==='UserRouter'
                    ?   <HeaderDrawer {...this.props} style={styles.header} hiddenSearchIcon={true} iconMenuColor='#fff' />
                    :   <HeaderStack {...this.props} style={styles.header} iconBackColor='#fff' />
                }
                <KeyboardAvoidingView style={styles.container} behavior='padding'  >
                    <TouchableWithoutFeedback  style={styles.container} onPress={dismissKeyboard} >
                        <ImageBackground source={require('../../../img/citybook.png')} style={styles.container} >
                            <View style={styles.formLogin}>
                                <Image source={require('../../../img/ctb.png')} style={styles.imglogo}></Image>
                                <InputApp 
                                    value={this.state.userName}
                                    placeholder={I18n.t("userName")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText}
                                    returnKeyType='next'
                                    name='userName'
                                />
                                <InputApp 
                                    value={this.state.passWord}
                                    placeholder={I18n.t("password")}
                                    style={styles.textInput}
                                    onChangeText={this.onChangeText}
                                    secureTextEntry={true}
                                    returnKeyType='go'
                                    name='passWord'
                                />
                                <AnimationButton users={this.props.users} onPress={this.onPress} />
                                <View style={styles.viewRegister}>
                                    <TextApp > {`${I18n.t("haveNotAccountYet")} ?`}  </TextApp>
                                    <TextApp onPress={()=>this.props.navigation.navigate('Register')}  >{I18n.t("register")} </TextApp>
                                </View>
                                <TouchableOpacity activeOpacity={1} onPress={this.forgotPassword} >
                                    <TextApp>{I18n.t('lostYourPassword')} ?</TextApp>
                                </TouchableOpacity>
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
        backgroundColor:'#9dd4f9'
    },
    viewUserData:{
        flex:1,
        backgroundColor:'#fff'
    },
    button:{
        justifyContent:'center',
        alignItems:'center'
    },
    formLogin:{
        flex:1,
        margin:60,
        justifyContent:'center',
        overflow: 'hidden',
    },
    imglogo:{
        width:200,
        height:200,
        resizeMode:'contain',
        alignSelf:'center',
    },
    textInput:{
        margin:0,
        marginBottom:20,
        height:35,
        backgroundColor:'#fff',
        borderRadius:20,
        paddingLeft:20
    },
    txtLogin:{
        color:'#fff',
        fontWeight:'500'
    },
    touch:{
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        borderRadius:20
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
    }
})

function mapStateToProps(state) {
	return {
        users: state.users.userData.data,
        loading:state.loading
	};
}

function mapDispatchToProps(dispatch) {
	return {
		UserActions: bindActionCreators(UserActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)  ;


