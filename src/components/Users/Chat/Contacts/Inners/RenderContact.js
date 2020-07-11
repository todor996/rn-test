
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {TextApp} from 'App';
import {ReplaceLink} from 'App';
import NavigationService from 'helpers/NavigationService';
import {connect} from 'react-redux'
import {getReplies,updateFirstLastID,changeContact} from 'actions/ChatActions'
import { H4 } from '../../../../../styles';

class RenderContact extends Component {
    componentWillUpdate(nextProps){
        this.historyChange = nextProps.replies!==this.props.replies
    }
    componentDidUpdate(prevProps){
        let {replies} = this.props
        if(this.historyChange){
            let firstID = 0,
				lastID = 0;
			replies.map((item,i)=>{
				if(i === 0) firstID = item.crid
				lastID = item.crid
			});
            this.props.updateFirstLastID(firstID,lastID)
        }
        if(replies!== prevProps.replies){
            //console.log("Open chat replies when have data")
            NavigationService.navigate('ChatReply')
        }
    }
    handlePress = ()=>{
        // NavigationService.navigate('ChatReply')
        //console.log("Get replies ")
        this.props.getReplies(this.props.item.cid,false)
        this.props.changeContact(this.props.item)
        // NavigationService.navigate('ChatReply')
    }
    render() {
        let {item} = this.props
        //console.log("Render Contacts",this.props)
        // //console.log("Render Contacts",this.state)
        return (
            <TouchableOpacity style={styles.container} onPress={this.handlePress} >
                <Image source={{uri:ReplaceLink(item.avatar)}} style={styles.avatar} />
                <View style={styles.content}>
                    <TextApp style={styles.textName} >{item.display_name}</TextApp>
                    <TextApp>{item.reply}</TextApp>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginBottom:20
    },
    textName:{
        fontWeight:'500',
        paddingBottom:5,
        fontSize:H4,
        color:'#666'
    },
    content:{
        marginLeft:10,
        flexWrap:'wrap'
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20,
        resizeMode:'cover'
    }
})
function mapStateToProps(state){
    return{
        replies:state.chats.replies
    }
}
function mapDispatchToProps(dispatch){
    return{
        getReplies:(cid,lastID)=>dispatch(getReplies(cid,lastID)),
        updateFirstLastID:(firstID,lastID)=>dispatch(updateFirstLastID(firstID,lastID)),
        changeContact:(contact)=>dispatch(changeContact(contact))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderContact)
