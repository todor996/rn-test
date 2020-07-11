
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native'
import { Appcolor, AppFontSize, AppFontMedium } from 'styles';
import {TextApp} from 'App';
import {connect} from 'react-redux'
import {setPriceRange} from 'actions/SearchActions'
import I18n from 'language/I18n'
import HeaderStack from '../../../Inners/HeaderStack';

let priceRange = [
    'inexpensive','moderate', 'pricey','ultrahigh'
]
class SearchPriceRange extends Component {
    _renderItem = ({item,index})=>{
        _handlePress = ()=>{
            this.props.setPriceRange(item)
            this.props.navigation.goBack()
        }
        return(
            <TouchableOpacity style={styles.list} onPress={_handlePress} >
                <TextApp style={styles.textPriceRange}>{item}</TextApp>
            </TouchableOpacity>
        )
    }
    _key = (item,index)=>index.toString()
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header}>
                </HeaderStack>
                <View style={styles.container} >
                    <FlatList
                        data={priceRange}
                        renderItem={this._renderItem}
                        keyExtractor={this._key}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
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
    list:{
        height:40,
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    textPriceRange:{
        fontSize:AppFontSize,
        paddingLeft:10
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
export default connect(mapStateToProps,mapDispatchToProps)(SearchPriceRange)