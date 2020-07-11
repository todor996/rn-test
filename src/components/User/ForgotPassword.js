import React, { Component } from 'react';
import { 
    View, 
    TextInput,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';
import { TextApp, ButtonlinearGradient } from '../App';
import I18n from 'language/I18n'
import { AppFontSize, AppFontFamily, H3, H2 } from '../../styles';
import {connect} from 'react-redux'
import {forgotPassword} from 'actions/UserActions'
import HeaderStack from '../Inners/HeaderStack';
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_login:''
        };
    }
    onChangeText = (text)=>{
        this.setState({
            user_login:text
        })
    }
    onPress = ()=>{
        this.props.forgotPassword(this.state)
    }
    componentDidUpdate(prevProps){
        if(this.props.resetPassword!==prevProps.resetPassword){
            if(this.props.resetPassword.success===false){
                Alert.alert('',this.props.resetPassword.error)
            }else{
                Alert.alert('',this.props.resetPassword.message)
            }
        }
    }
    render() { 
        //console.log("Forgot Password",this.props)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <HeaderStack {...this.props} style={styles.header} />
                <View style ={styles.container}>
                    <TextApp style={[styles.text,styles.title]} >{I18n.t('forgotPassword')}</TextApp>
                    <TextApp style={styles.text}>{I18n.t('userNameOrEmail')}</TextApp>
                    <TextInput 
                        underlineColorAndroid={'transparent'} 
                        style={styles.textInput} 
                        onChangeText={this.onChangeText} 
                        returnKeyType={'done'} 
                    />
                    <ButtonlinearGradient title={I18n.t('getNewPassword')} onPress={this.onPress} style={styles.button} />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#fff'
    },
    textInput:{
        height:40,
        padding: 0,
        margin: 0,
        paddingLeft: 10,
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginVertical: 10,
    },
    button:{
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#eee',
        margin: 20,
    },
    title:{
        fontSize:H2,
        color:'#000',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom:25,
    },
    text:{
        marginLeft:10
    }
})

function mapStateToProps(state){
    return{
        resetPassword:state.users.forgotPassword,
        loading:state.loading
    }
}
function mapDispatchToProps(dispatch){
    return{
        forgotPassword:(data)=>dispatch(forgotPassword(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword)