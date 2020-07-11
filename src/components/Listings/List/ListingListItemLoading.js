
import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
// import Lottie from 'lottie-react-native'
let arr = [1,2,3,4,5]
export default class ListingListItemLoading extends Component {
    _renderItem = ()=>{
        let items = arr.map((item,index)=>{
            return(
                <View style={styles.container} key={index} >
                    <View style={styles.ctnImage}>
                        {/*<Lottie source={require('../../../img/imageLoad.json')} style={styles.lottie} autoPlay={true} />*/}
                    </View>
                    <View style={styles.content}>

                    </View>
                </View>
            )
        })
        return items
    }
    render() {
        return (
            <View style={styles.section} >
                {
                    this._renderItem()
                }
            </View>
        )
    }
}
const styles =StyleSheet.create({
    section:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:15
    },
    container:{
        flexDirection:'row',
        height:150,
        marginBottom:10
    },
    ctnImage:{
        width:'50%',
        backgroundColor:'#fff',
        borderRightWidth:1,
        borderRightColor:'#eee',
        borderTopLeftRadius:2,
        borderBottomLeftRadius:2,
        alignItems:'center',
        justifyContent:'center'
    },
    content:{
        width:'50%',
        backgroundColor:'#fff'
    },
    lottie:{
        width:70,
        height:70
    }
})
