import React, { Component } from 'react'
import { 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {TextApp} from 'App';
import Feather from 'react-native-vector-icons/Feather'
import { Appcolor,AppFontSize, AppIconSize } from 'styles';
import {connect} from 'react-redux'
import {setTag} from 'actions/SearchActions'
import R from 'ramda'

 class RenderTag extends Component {
    _onPress = ()=>{
        let tag = this.props.item.name
        if(this.props.tags.length>0){
            R.forEach((item)=>{
                if(tag!==item){
                    this.props.setTag([...this.props.tags,tag])
                }else{
                    let tags = this.props.tags
                    let index = tags.indexOf(tag)
                    tags.splice(index,1)
                    this.props.setTag(tags)
                }
            },this.props.tags)
        }else{
            this.props.setTag([tag])
        }
    }
    _renderCheck = ()=>{
        if(this.props.tags.length!==0){
            let tag = this.props.item.name
            return this.props.tags.find(item=>item===tag)
        }else{
            return null
        }
    }
    render() {
        // //console.log("List Tag",this.props)
        let {item} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress} activeOpacity={1} >
                <TextApp style={styles.textTag}>{item.name}</TextApp>
                {
                    this._renderCheck()!==null && this._renderCheck()!==undefined ?
                        <Feather name='check' size={AppIconSize} color={Appcolor} style={styles.iconCheck}/>
                    :null
                }                
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    textTag:{
        fontSize:AppFontSize,
        paddingLeft:10
    },
    iconCheck:{
        position:'absolute',
        right:10
    }
})
function mapStateToProps(state){
    return{
        tags:state.search.tags
    }
}
function mapDispatchToProps(dispatch){
    return{
        setTag:(tag)=>dispatch(setTag(tag))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderTag)