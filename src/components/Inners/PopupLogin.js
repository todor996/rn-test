import React, { Component } from 'react';
import { 
    View, 
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Dimensions
} from 'react-native';
import { RInput } from 'App';
import {connect} from 'react-redux'
import {getUsers} from 'actions/UserActions'
import {TextApp} from 'App';
import { AppFontSize } from 'styles';
import R from 'ramda'
import { Appcolor } from '../../styles';
import LinearGradient from 'react-native-linear-gradient'
import I18n from 'language/I18n'

const {height} = Dimensions.get('window')
class PopupLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:''
        };
    }
    changeUserName = (text)=>{
        this.setState({
            userName:text
        })
    }
    changePassword = (text)=>{
        this.setState({
            password:text
        })
    }
    login = ()=>{
        this.props.getUsers({
            userName:this.state.userName,
            passWord:this.state.password
        })
    }
    close = ()=>{
        this.setState({
            userName:'',
            passWord:''
        },()=>{
            this.props.closeModal()
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.user!==this.props.user){
            if(!R.isEmpty(this.props.user)){
                this.props.closeModal()
            }else{
                Alert.alert('','User Name or Password wrong. Login fail')
            }
        }
    }
    render() {
        return (
            <Modal  
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                }}
            >
                <TouchableOpacity style={styles.container} onPress={this.close} activeOpacity={1} />
                <View style={styles.currentUser}>
                    <View style={styles.textSign}>
                        <Text>{I18n.t('signInCitybook')}</Text>
                    </View>
                    <TextApp style={styles.textLogged} >{I18n.t('youMustLogged')}</TextApp>
                    <View style={styles.ctnInput} >
                        <RInput label={I18n.t('userName')} containerStyles={styles.textInput} onChangeText={this.changeUserName} />
                        <RInput label={I18n.t('password')} secureTextEntry={true} containerStyles={styles.textInput} onChangeText={this.changePassword} />
                    </View>
                    <View style={styles.ctnButton} >
                        <TouchableOpacity onPress={this.login} style={styles.buttonLogin}  >
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Appcolor, '#f471d6']} style={styles.linearGradient}>
                                <TextApp style={styles.textLogin} >{I18n.t('continueBook')}</TextApp>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        zIndex:1
    },
    currentUser:{
        width:300,
        backgroundColor:'#fff',
        height:280,
        marginHorizontal: 20,
        borderRadius: 5,
        alignSelf:'center',
        overflow: 'hidden',
        zIndex:10,
        position: 'absolute',
        top:(height-300)/2
    },
    textInput:{
        backgroundColor:'#fff',
        marginBottom:10,
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    ctnButton:{
        flexDirection:'row',
        height:40,
        width:'100%',
        position:'absolute',
        bottom:0
    },
    buttonLogin:{
        flex:1,
    },
    linearGradient:{
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    textLogin:{
        fontSize:AppFontSize,
        color:'#fff'
    },
    textSign:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        marginBottom:5
    },
    textLogged:{
        alignSelf:'center'
    },
    ctnInput:{
        padding:10
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUsers:(data)=>dispatch(getUsers(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PopupLogin)