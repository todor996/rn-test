
import React, { Component } from 'react'
import { 
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    TextInput,
    Alert,
    SafeAreaView
} from 'react-native'
import Item from './Item/Item';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {pushCommentListing} from '../../../../actions/ListingActions';
import NavigationService from '../../../../helpers/NavigationService';
import ListChildComment from './Item/ListChildComment'
import { AppFontMedium, AppIconSmall } from '../../../../styles';

const {width} = Dimensions.get('window')
class ReplyComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.comment!==prevProps.comment){
            if(typeof this.props.comment==='number'){
                Alert.alert('','Your comment has been saved.')
            }
        }
    }
    _onPress = ()=>{
        // let date = new Date()
        let data = {
            ID:this.props.navigation.state.params[2],
            name:this.props.user.data.display_name,
            email:this.props.user.data.user_email,
            commentContent:this.state.content,
            comment_parent:this.props.navigation.state.params[1].comment_ID,
            userId:this.props.user.ID,
            commentAuthorIp:'',
            // time:`${date.getFullYear()}-${date.getMonth()}-${date.getHours()}-${date.getMinutes()} `
        }
        //console.log(data)
        if(Object.keys(this.props.user).length==0) NavigationService.navigate('Login')
        else this.props.pushCommentListing(data)
    }
    onChangeText = (text)=>{
        this.setState({content:text})
    }
    render() {
        let comments = this.props.navigation.state.params;
        //console.log("Reply Comment",this.props)
        //console.log("Reply comment",this.state)
        return (
            <SafeAreaView style={styles.safeView}>
                <View style={styles.container}>
                    <ScrollView 
                        style={styles.container} 
                        showsVerticalScrollIndicator={false}
                    >
                        <Item comment={comments[1]} />
                        {
                            comments[0].length!==0?
                                <ListChildComment comments = {comments[0]} />
                            :null
                        }
                    </ScrollView>
                    <View style={styles.ctnShowModal}>
                        <TextInput onPress={this._showModal} onChangeText={this.onChangeText} style={[styles.showModal]} placeholder='Aa' underlineColorAndroid={'transparent'} />
                        <View style={styles.up}>
                            <Icon name='arrow-up' size={AppIconSmall} color='#fff' style={styles.iconUp} onPress={this._onPress} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    safeView:{
        flex:1
    },
    showModal:{
        padding:0,
        margin:0,
        width:'90%',
        height:30,
        borderRadius:20,
        backgroundColor:'#fff',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#eee',
        paddingLeft:10,
        fontSize:AppFontMedium,
        // fontFamily: 'Quicksand',
    },
    ctnShowModal:{
        width:width,
        padding:5,
        backgroundColor:'#fafafb',
        alignSelf:'center',
        position:'absolute',
        bottom:0,
        borderTopWidth:1,
        borderTopColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    up:{
        width:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    iconUp:{
        padding:8,
        borderRadius:20,
        backgroundColor:'orange',
        overflow: 'hidden',
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data,
        comment:state.listings.comment
    }
}
function mapDispatchToProps(dispatch){
    return{
        pushCommentListing:(data)=>dispatch(pushCommentListing(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReplyComment)