
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import {getReplies,updateFirstLastID,chatReply} from 'actions/ChatActions'
import List from './Inners/List';
import { Appcolor, AppIconSize } from 'styles';
import {TextApp} from 'App';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HeaderStack from '../../../Inners/HeaderStack';
import { AppFontSize } from 'styles';

class ChatReply extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'',
            typing:false
        }
    }
    componentWillUpdate(nextProps){
        this.historyChange = nextProps.chats.replies.length!==this.props.chats.replies.length
    }
    componentDidMount(){
        //
        //
        (
            getRepliesTimeOut = ()=>{
                let {chats} = this.props
                this.props.getReplies(this.props.chats.active,this.props.chats.lastID)
                nextRequest = 1000
                if(chats.noReplyNum > 3){
                    nextRequest = 2000;
                }
                if(chats.noReplyNum > 10){
                    nextRequest = 5000;
                }
                // 15 seconds
                if(chats.noReplyNum > 20){
                    nextRequest = 15000;
                }
                this.time = setTimeout(()=>{
                    getRepliesTimeOut()
                },nextRequest) 
            }
        )()
    }
    componentDidUpdate(prevProps){
        let {chats} = this.props
        if(this.historyChange){
            let firstID = 0,
				lastID = 0;
			chats.replies.map((item,i)=>{
				if(i === 0) firstID = item.crid
				lastID = item.crid
			});
            this.props.updateFirstLastID(firstID,lastID)
        }
    }
    componentWillUnmount(){
        clearTimeout(this.time)
    }
    onChangeText = (text)=>{
        this.setState({message:text})
    }
    handlePress = ()=>{
        let data = {
            message:this.state.message,
            touid:this.props.chats.touid,
            cid:this.props.chats.replies[0].cid,
            user_id:this.props.user.ID
        }
        //console.log("DATA MESSAGE",data)
        this.props.chatReply(data)
    }
    onFocus = ()=>{
        this.setState({typing:true})
    }
    render() {
        //console.log("Chat Reply",this.props)
        return (
            <React.Fragment>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                    <HeaderStack {...this.props} style={styles.header}>
                        <TextApp style={styles.textName} >{this.props.chats.display_name}</TextApp>
                    </HeaderStack>
                    <View style={styles.container}>
                        <List replies={this.props.chats.replies} active={this.props.chats.active} firstID={this.props.chats.firstID} />
                        
                    </View>
                </ScrollView>
                <KeyboardAvoidingView style={styles.form}  >
                    <TextInput 
                        placeholder='Aa' 
                        onChangeText={this.onChangeText} 
                        style={styles.textInput} 
                        underlineColorAndroid={'transparent'} 
                        onFocus={this.onFocus}
                    />
                    <View style={styles.send}>
                        <FontAwesome name='send' size={AppIconSize} color={Appcolor} onPress={this.handlePress} />
                    </View>
                </KeyboardAvoidingView>
            </React.Fragment>
            
        )
    }
}

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#eee',
        paddingHorizontal: 10,
        backgroundColor:'#fff'
    },
    textInput:{
        width:'85%',
        height:40,
        padding:0,
        margin:0,
        paddingLeft:10,
        fontSize:AppFontSize,
        // fontFamily:'Quicksand',
    },
    send:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    typing:{
        width:150,
        backgroundColor:Appcolor,
        padding:10,
        borderRadius:15,
        position:'absolute',
        bottom:40,
    },
    iconBack:{
        position:'absolute',
        left:10
    },
    header:{
        backgroundColor:'#fff'
    },
    textName:{
        position: 'absolute',
        top: 40,
    }
})

function mapStateToProps(state){
    return{
        chats:state.chats,
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        getReplies:(cid,lastID)=>dispatch(getReplies(cid,lastID)),
        updateFirstLastID:(firstID,lastID)=>dispatch(updateFirstLastID(firstID,lastID)),
        chatReply:(data)=>dispatch(chatReply(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChatReply)