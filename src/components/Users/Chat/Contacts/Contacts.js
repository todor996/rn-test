
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'
import {connect} from 'react-redux'
import {getChats} from 'actions/ChatActions'
import Loading from '../../../Loading';
import List from './Inners/List';
import HeaderStack from '../../../Inners/HeaderStack';

const {width,height} = Dimensions.get('window')
class Contacts extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true
        }
    }
    static navigationOptions  = ()=>({
        header:null
    })
    UNSAFE_componentWillMount(){
        this.props.getChats(this.props.user.ID)
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.chats.contacts!==this.props.chats.contacts){
            this.setState({loading:false})
        }
    }
    render() {
        //console.log("Contacts",this.props)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <HeaderStack {...this.props} style={styles.header} />
                {
                    this.state.loading===false 
                    ?   <List contacts = {this.props.chats.contacts} />
                    :   <View style={styles.loading}>
                            <Loading />
                        </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height
    },
    textTitle:{
        fontWeight:'500',
        color:'#fff'
    },
    icon:{
        position:'absolute',
        left:10,
        zIndex:1
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
        getChats:(user_id)=>dispatch(getChats(user_id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contacts)
