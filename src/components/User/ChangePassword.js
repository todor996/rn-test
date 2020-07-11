
import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import HeaderStack from '../Inners/HeaderStack';
import { TextApp, } from '../App';
import I18n from 'language/I18n'
import { H2, Appcolor, AppFontSize, AppFontFamily } from '../../styles';
import LinearGradient from 'react-native-linear-gradient'
import {connect} from 'react-redux'
import {changeUserPassword} from 'actions/UserActions'

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_pass:'',
            old_pass:'',
            confirm_pass:'',
        };
    }
    onPress = ()=>{
        let data = {
            user_id:this.props.user.ID,
            ...this.state
        }
        this.props.changeUserPassword(data);
    }
    onSubmitEditing =(ref)=> ()=>{
        //console.log("End")
        ref.focus()
    }
    onChangeText = (name)=>(text)=>{
        this.setState({[name]:text})
    }
    componentDidUpdate(prevProps){
        if(this.props.change_user_password!==prevProps.change_user_password){
            if(this.props.change_user_password.success===false){
                Alert.alert('',this.props.change_user_password.error)
            }else{
                Alert.alert('',this.props.change_user_password.message)
            }
        }
    }
    render() {
        //console.log("Change Password",this.props)
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} >
                <HeaderStack {...this.props} style={styles.header}/>
                <View style={styles.container}>
                    <TextApp style={styles.title} >{I18n.t('changePassword')}</TextApp>
                    <TextApp style={styles.text}>{I18n.t('currentPassword')}</TextApp>
                    <TextInput 
                        underlineColorAndroid={'transparent'} 
                        style={styles.input} 
                        secureTextEntry={true} 
                        returnKeyType='next' 
                        onSubmitEditing={this.onSubmitEditing(this.newPass)} 
                        onChangeText={this.onChangeText('old_pass')}
                    />
                    <TextApp style={styles.text}>{I18n.t('newPassword')}</TextApp>
                    <TextInput 
                        onChangeText={this.onChangeText('new_pass')} 
                        underlineColorAndroid={'transparent'} 
                        style={styles.input} secureTextEntry={true} 
                        returnKeyType='next' 
                        ref={ref => this.newPass = ref} 
                        onSubmitEditing={this.onSubmitEditing(this.confirmPass)} 
                    />
                    <TextApp style={styles.text}>{I18n.t('confirmNewPassword')}</TextApp>
                    <TextInput 
                        onChangeText={this.onChangeText('confirm_pass')} 
                        underlineColorAndroid={'transparent'} 
                        style={styles.input} 
                        secureTextEntry={true} 
                        returnKeyType='done' 
                        ref={input => {this.confirmPass = input}} 
                    />
                    <TouchableOpacity style={styles.button} activeOpacity={1} onPress={this.onPress} >
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Appcolor, '#f471d6']} style={styles.linearGradient}>
                            <TextApp style={styles.textUpdatePassword} >{I18n.t('updatePassword')}</TextApp>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 10,
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    title:{
        fontSize:H2,
        marginTop: 5,
        marginBottom:25,
        fontWeight: 'bold',
        color:'#000'
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor: '#eee',
        marginBottom: 5,
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
        padding: 0,
        margin: 0,
        paddingBottom: 5,
    },
    button:{
        marginHorizontal:10,
        marginTop:40,
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
    textUpdatePassword:{
        color:'#fff',
        fontWeight:'bold'
    },
    text:{
        marginBottom:20
    }
})

function mapStateToProps(state){
    return{
        change_user_password:state.users.change_user_password,
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        changeUserPassword:(data)=>dispatch(changeUserPassword(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword)