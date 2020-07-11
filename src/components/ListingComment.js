import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ScrollView,
    FlatList,
    TextInput,
    NativeModules,
    Alert
} from 'react-native';
import HeaderStack from './Inners/HeaderStack';
import CommentAvata from './Inners/CommentAvata';
import {TextApp} from './/App';
import { AppFontSize, AppIconSize, Appcolor, AppFontFamily } from 'styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {pushCommentListing} from 'actions/ListingActions';
import {connect} from 'react-redux'
import R from 'ramda'

const scriptURL = NativeModules.SourceCode.scriptURL;
const address = scriptURL.split('://')[1].split('/')[0];
class ListingComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentContent:''
        };
    }
    sendComment = ()=>{
        if(!R.isEmpty(this.props.user)){
            let data = {
                commentContent:this.state.commentContent,
                commentAuthorIp:address,
                ID  :this.props.navigation.state.params.id,
                name : this.props.user.data.display_name,
                email : this.props.user.data.user_email,
                userId : this.props.user.ID
            }
            //console.log(data)
            this.props.pushCommentListing(data)
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.comment!==this.props.comment){
            Alert.alert('','Your comment has been saved')
        }
    }
    renderItem = ({item,index})=>{
        return(
            <View style={styles.commentItem}>
                <CommentAvata comment={item} />
                <View style={styles.commentContent}>
                    <TextApp style={[styles.textComment]} >{item.comment_content}</TextApp>
                </View>
            </View>
        )
    }
    onChangeText = (text)=>{
        this.setState({
            commentContent:text
        })
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        //console.log("Listing Comment",this.props)
        let item = this.props.navigation.state.params
        return (
            <React.Fragment>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <HeaderStack {...this.props} style={styles.header} />
                    <FlatList
                        data={item.comments}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </ScrollView>
                <View style={styles.form}>
                    <TextInput style={styles.textInput} placeholder={'Aa'} onChangeText={this.onChangeText} />
                    <FontAwesome name='send-o' size={AppIconSize} color={Appcolor} style={styles.sendIcon} onPress={this.sendComment}/>
                </View>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        comment:state.listings.comment,
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        pushCommentListing: (data)=>dispatch(pushCommentListing(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingComment)
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#fff'
    },
    commentItem:{
        backgroundColor:'#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
        marginHorizontal: 5,
        marginBottom: 0,
    },
    textComment:{
        fontSize:AppFontSize,
        color:'#878C9F'
    },
    commentContent:{
        padding:10
    },
    form:{
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    textInput:{
        flex:0.8,
        height:35,
        paddingLeft: 10,
        // fontFamily: AppFontFamily ,
        fontSize:AppFontSize
    },
    sendIcon:{
        alignSelf:'center'
    }
})