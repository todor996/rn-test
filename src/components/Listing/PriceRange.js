
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'
import { Appcolor, AppFontSize, AppFontMedium } from 'styles';
import {TextApp} from 'App';
import {connect} from 'react-redux'
import {setPriceRange} from 'actions/SearchActions'
import I18n from 'language/I18n'

const {width} = Dimensions.get('window')
let priceRange = [
    {
        key:"inexpensive",
        value:"$"
    },
    {
        key:"moderate",
        value:"$$"
    },
    {
        key:"pricey",
        value:"$$$"
    },
    {
        key:"ultrahigh",
        value:"$$$$"
    }
]
class PriceRange extends Component {
    _renderItem = ({item,index})=>{
        _handlePress = ()=>{
            this.props.setPriceRange(item.key)
        }
        let styleItem = this.props.price===item.key ? styles.itemChecked : styles.item 
        let styleText = this.props.price===item.key ? styles.textChecked : styles.text 
        return(
            <TouchableOpacity style={styleItem} onPress={_handlePress} activeOpacity={1} >
                <TextApp style={styleText}>{item.value}</TextApp>
            </TouchableOpacity>
        )
    }
    _key = (item,index)=>index.toString()
    render() {
        return (
            <FlatList
                data={priceRange}
                renderItem={this._renderItem}
                keyExtractor={this._key}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                extraData={this.props.price}
                style={styles.container}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        // backgroundColor:'#fff',
        marginBottom: 10,
    },
    scrollView:{
        flex:1
    },
    header:{
        backgroundColor:'#fff'
    },
    priceRange:{
        fontSize:AppFontSize,
        fontWeight:'500',
        color:'#fff'
    },
    item:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        width:width/4,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#eee',
    },
    itemChecked:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        width:width/4,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: Appcolor,
        backgroundColor:Appcolor
    },
    text:{
        fontSize:AppFontSize,
        color:'#8f95a5'
    },
    textChecked:{
        fontSize:AppFontSize,
        color:'#fff'
    }
})
function mapStateToProps(state){
    return{
        price:state.search.price
    }
}
function mapDispatchToProps(dispatch){
    return{
        setPriceRange:(price)=>dispatch(setPriceRange(price))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PriceRange)