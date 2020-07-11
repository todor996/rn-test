import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import {TextApp} from '..//App';
import { AppFontSize, AppIconSize, Appcolor } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {setSortBy} from 'actions/SearchActions'
let sortBy = [
    {
        key:"most_reviewed",
        value:"Most Reviewed"
    },
    {
        key:"most_viewed",
        value:"Most Viewed"
    },
    {
        key:"most_liked",
        value:"Most Liked"
    },
    {
        key:"highest_rated",
        value:"Highest Rated"
    }
]

class SortBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy:""
        };
    }
    onPress = (key)=>()=>{
        //console.log('press')
        this.setState({
            sortBy:key
        })
        this.props.setSortBy(key)
    }
    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,index})=>{
        return(
            <View style={styles.item} >
                <TextApp style={styles.text} >{item.value}</TextApp>
                <TouchableOpacity style={styles.checkBox} activeOpacity={1} onPress={this.onPress(item.key)} >
                    {
                        this.state.sortBy===item.key
                        ? <Ionicons name='ios-radio-button-on' size={AppIconSize} color={Appcolor} />
                        :  <Ionicons name='ios-radio-button-off' size={AppIconSize} color={Appcolor} />
                    }
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <FlatList 
                data={sortBy}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                extraData={this.state.sortBy}
            />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#eee'
    },
    text:{
        fontSize:AppFontSize,
        marginLeft: 15,
        // color:'#8f95a5'
    },
    item:{
        height:50,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    checkBox:{
        position:'absolute',
        right:15,
        overflow:'hidden',
        // height:30,
        // width:30,
        zIndex:1,
        // backgroundColor:'red'
    }
})
function mapStateToProps(state){
    return{
        sortBy:state.search.sortBy
    }
}
function mapDispatchToProps(dispatch){
    return{
        setSortBy:(sortBy)=>dispatch(setSortBy(sortBy))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SortBy)