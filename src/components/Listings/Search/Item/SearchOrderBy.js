
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native'
import {TextApp} from 'App';
import { Appcolor, AppFontMedium, AppFontSize } from 'styles';
import {connect} from 'react-redux'
import {setOrderBy} from 'actions/SearchActions'
import I18n from 'language/I18n'
import HeaderStack from '../../../Inners/HeaderStack';

let sortBy = {
    "most_reviewed":"Most Reviewed",
    "most_viewed":"Most Viewed",
    "most_liked":"Most Liked",
    "highest_rated":"Highest Rated"
}
    

class SearchOrderBy extends Component {
    _renderList = ()=>{
        let result = []
        for(let key in sortBy){
            _handlePress = ()=>{
                this.props.setOrderBy(key)
                this.props.navigation.goBack()
            }
            result.push(
                <TouchableOpacity style={styles.list} onPress={_handlePress} key={key} >
                    <TextApp style={styles.textOrderBy}>{sortBy[key]}</TextApp>
                </TouchableOpacity>
            )
        }
        return result
    }
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header} />
                <View style={styles.container} >
                    {
                        this._renderList()
                    }
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
        backgroundColor:'#fff',
    },
    sortBy:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight:'500'
    },
    list:{
        height:40,
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    textOrderBy:{
        fontSize:AppFontSize,
        paddingLeft:10
    }
})
function mapStateToProps(state){
    return{
        orderBy:state.search.orderBy
    }
}
function mapDispatchToProps(dispatch){
    return{
        setOrderBy:(orderBy)=>dispatch(setOrderBy(orderBy))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchOrderBy)