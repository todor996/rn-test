
import React, { Component } from 'react'
import { 
    Image,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'
import {Overlay} from 'App';

const {width} = Dimensions.get('window');
export default class Header extends Component {
    render() {
        //console.log("HEADER",this.props)
        return (
            this.props.item.thumbnail?
                <View style={styles.container}>
                    <Image source={{uri:this.props.item.thumbnail.replace('localhost','10.0.2.2')}} style={styles.image} />
                    <Overlay />
                </View>
            :null
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width,
        position:'absolute',
        top:0,
        left:0,
        right:0,
    },
    image:{
        width,
        overflow:'hidden',
        height:250
    },
})