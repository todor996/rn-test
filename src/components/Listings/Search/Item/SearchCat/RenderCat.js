import React, { Component } from 'react'
import { 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {TextApp} from '../../../..//App';
import IconF from 'react-native-vector-icons/Feather'
import {Appcolor, AppFontMedium, AppIconLarge, AppFontSize} from '../../../../../styles'
import {connect} from 'react-redux'
import {setCat} from '../../../../../actions/SearchActions'

class RenderCat extends Component {
    _onPress = ()=>{
        this.props.setCat(this.props.item.name)
        this.props.goBack()
    }
    _renderCheck = ()=>{
        if(this.props.cat!==''){
            if(this.props.cat===this.props.item.name) return true
            else return false
        }else return false
    }
    render() {
        let {item} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress} >
                <TextApp style={[styles.textCat,]}  >{item.name}</TextApp>
                {
                    this._renderCheck()===true?
                        <IconF name='check' size={AppIconLarge} color={Appcolor} style={styles.iconCheck}/>
                    :null
                }
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:40,
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    textCat:{
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
        cat:state.search.cat
    }
}
function mapDispatchToProps(dispatch){
    return{
        setCat:(cat)=>dispatch(setCat(cat))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderCat)