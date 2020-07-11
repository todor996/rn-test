import React, { Component } from 'react';
import { 
    View, 
    Text,
    Modal,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { RInput } from 'App';
import {connect} from 'react-redux'
import {getUsers} from 'actions/UserActions'
import {TextApp} from 'App';
import { AppFontSize } from 'styles';
import R from 'ramda'

class CurrentUser extends Component {
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
                // animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                }}
            >
                <SafeAreaView style={styles.safeView} >
                    <View style={styles.container} >
                        <View style={styles.currentUser}>
                            <View style={{height:50,justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#eee',marginBottom:5}}>
                                <Text>Sign In Citybook</Text>
                            </View>
                            <TextApp style={{alignSelf:'center'}} >You must be logged in to checkout.</TextApp>
                            <View style={{padding:10}} >
                                <RInput label='User name' containerStyles={styles.textInput} onChangeText={this.changeUserName} />
                                <RInput label='Password' secureTextEntry={true} containerStyles={styles.textInput} onChangeText={this.changePassword} />
                            </View>
                            <View style={styles.ctnButton} >
                                <TouchableOpacity onPress={this.close} style={styles.buttonClose} >
                                    <TextApp style={styles.textClose} >Close</TextApp>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.login} style={styles.buttonLogin} >
                                    <TextApp style={styles.textLogin} >Login</TextApp>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    safeView:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    currentUser:{
        flex:1,
        backgroundColor:'#fff',
        marginVertical: 150,
        marginHorizontal: 20,
        borderRadius: 5,
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
    buttonClose:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f7f7f7'
    },
    buttonLogin:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#35c74a'
    },
    textClose:{
        fontSize:AppFontSize
    },
    textLogin:{
        fontSize:AppFontSize,
        color:'#fff'
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
export default connect(mapStateToProps,mapDispatchToProps)(CurrentUser)