import React, { Component } from 'react'
import { 
    View,
    FlatList,
    StyleSheet
} from 'react-native'
// import Lottie from 'lottie-react-native'

let arr = [1,2,3,4]
export default class ItemLoading extends Component {
    _renderItem= ({item,index})=>{
        return(
            <View style={styles.item}>
                {/*<Lottie source={require('../../../img/imageLoad.json')} style={styles.lottie} autoPlay={true} />*/}
            </View>
        )
    }
    _keyExtractor = (item,index)=>index.toString()
    render() {
        return (
            <FlatList 
                data={arr}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        width:250,
        height:165,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginRight:7,
        borderRadius: 5,
        overflow: 'hidden',
    },
    lottie:{
        width:100,
        height:100
    },
    flatList:{
        paddingLeft:10
    }
})