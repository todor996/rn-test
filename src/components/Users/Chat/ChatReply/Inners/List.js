
import React, { Component } from 'react'
import { 
    FlatList,
    View,
    StyleSheet
} from 'react-native'
import RenderChat from './RenderChat';
import {TextApp} from '../../../..//App';
import {connect} from 'react-redux'
import {getMoreTopReplies} from '../../../../../actions/ChatActions'
import RenderUserChat from './RenderUserChat';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            refreshing:false
        }
    }
    renderItem = ({item,index})=>{
        if(Number(item.uid)===this.props.user.ID){
            return(
                <RenderUserChat item={item} />
            )
        }else{
            return(
                <RenderChat item={item} />
            )
        }
        
    }
    keyExtractor=(item,index)=>index.toString()
    componentDidMount(){
        //console.log("Scroll to End")
        setTimeout(() => this.flatList.scrollToEnd({animated:true}), 1000)
    }
    componentDidUpdate(prevProps){
        if(this.props.replies!==prevProps.replies){
            //refreshing set 
            this.setState({refreshing:false})
        }
    }
    onRefresh = ()=>{
        this.setState({refreshing:true},()=>{
            this.props.getMoreTopReplies(this.props.active,this.props.firstID)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.replies}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent = {<TextApp>No message</TextApp>}
                    style={styles.container}
                    ref={ref => this.flatList = ref}
                    extraData={this.props.replies}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingTop:0,
        marginTop: 5,
    },
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMoreTopReplies:(contact_id,firstID)=>dispatch(getMoreTopReplies(contact_id,firstID))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)
