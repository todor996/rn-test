

import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    NativeModules,
    Alert,
    Image
} from 'react-native';
import {Appcolor, AppFontMedium, AppIconSize} from 'styles';
import {connect} from 'react-redux';
import {pushCommentListing} from 'actions/ListingActions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {checkEmail} from '../../../../../constants/validate';
import I18n from 'language/I18n'
import {TextApp} from 'App'

const scriptURL = NativeModules.SourceCode.scriptURL;
const address = scriptURL.split('://')[1].split('/')[0];
class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            commentContent:''
        };
    }
    componentDidUpdate(prevProps, prevState){
        //Update listing when comment success
        if(this.props.comment!==prevProps.comment){
            Alert.alert('','Your comment has been saved');
        }
    }
    _onPress = ()=>{
        //Push comment with data
        let data = {
            commentContent:this.state.commentContent,
            commentAuthorIp:address,
            ID:this.props.ID
        }
        if(Object.keys(this.props.user).length!==0){
            data.name = this.props.user.data.display_name;
            data.email = this.props.user.data.user_email;
            data.userId = this.props.user.ID;
            this.props.pushCommentListing(data);
        }else{
            //new promise
            let userData = new Promise((resolve,reject)=>{
                if(this.state.name!=='' && this.state.email!==''){
                    if(checkEmail(this.state.email)){
                        resolve();
                    }else{
                        reject('Please enter a valid email address.')
                    }
                    
                }else{
                    reject('You must enter all infomation * in the form.')
                }
            })
            userData.then(resolve=>{
                data.name = this.state.name;
                data.email = this.state.email;
                data.userId = 0;//user id = 0 if user not login
                this.props.pushCommentListing(data);
                // this.props.hidden();
            }).catch(err=>{
                Alert.alert('Alert',err);
            })
        }
        // //console.log(data);
    }
    _currentUser = ()=>{
        //Current user data
        return(
            <View>
                <TextApp style={[styles.text]}>{`${I18n.t('name')}:`}</TextApp>
                <TextInput style= {styles.textInp} onChangeText={(value)=>this.setState({name:value})}  underlineColorAndroid={'transparent'} />
                <TextApp style={[styles.text]}>{`${I18n.t('email')}:`}</TextApp>
                <TextInput style= {styles.textInp} onChangeText={(value)=>this.setState({email:value})}  underlineColorAndroid={'transparent'} />
            </View>
        )
    }
    render() {
        //console.log("Send Comment",this.props)
        //console.log("Send Comment",this.state)
        return (
            <View style= {styles.container} >
                <View style={styles.formComment}>
                    <Icon name='close' size={AppIconSize} onPress={this.props.hidden} color={'red'}  style={styles.close}/>
                    {
                        Object.keys(this.props.user).length===0
                        ?   this._currentUser()
                        :   null
                    }
                    <TextInput  style={styles.inpText} onChangeText={(value)=>this.setState({commentContent:value})} placeholder='Your Review:' underlineColorAndroid={'transparent'}/>
                    <TouchableOpacity style={styles.touch} onPress={this._onPress}>
                        <TextApp style={[styles.txtSubmit]}>{I18n.t('submitReview')}</TextApp>
                        {
                            this.props.loading===true?
                                <Image source={require('../../../../../img/loading.gif')} style={styles.loading}/>
                            :null
                        }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
    },
    inpText:{
        paddingBottom:80,
        paddingLeft: 5,
        paddingTop:5,
        margin: 0,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius:5,
        marginBottom:10,
        marginTop: 5,
        fontSize:AppFontMedium,
        // fontFamily: 'Quicksand',
    },
    formComment:{
        padding:20,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius:7.5,
        marginTop: 0,
        borderWidth:1,
        borderColor:'#eee'
    },
    text:{
        paddingBottom:5
    },
    textInp:{
        padding:0,
        margin: 0,
        paddingLeft:5,
        borderWidth:1,
        borderColor:'#eee',
        marginBottom: 10,
        height:30,
        borderRadius:3
    },
    touch:{
        padding:8,
        backgroundColor: Appcolor,
        alignSelf: 'flex-start',
        borderRadius:3,
        flexDirection: 'row',
    },
    txtSubmit:{
        color:'#fff'
    },
    close:{
        position: 'absolute',
        right:0,
        top: 0,
        padding:5
    },
    loading:{
        width:15,
        height:15
    }
})
function mapStateToProps(state){
    return{
        comment:state.listings.comment,
        loading:state.loading,
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        pushCommentListing:(data)=>dispatch(pushCommentListing(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Send)
