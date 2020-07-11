import React, { Component } from 'react'
import { 
    View,
    Image,
    Animated,
    ScrollView,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native'
import {Appcolor, AppFontSize} from 'styles/mainStyles'
import TextApp from 'App/TextApp';

const TRANSLATE = 215
const AnimText = Animated.createAnimatedComponent(TextApp)
export default class HocContainer extends Component {
    componentWillMount(){
        this.anim = new Animated.Value(0)
    }
    onScroll = ({nativeEvent})=>{
        this.anim.setValue(nativeEvent.contentOffset.y);
    }
    renderImageHeader = ()=>{
        let {item} = this.props
        if(item.thumbnail) return <Image source={{uri: ReplaceLink(item.thumbnail)}} style={styles.headerImage} />
        else return null
    }
    renderAuthorImage = ()=>{
        let {item} = this.props
        let avata = item.author_avatar
        return(
            <Animated.Image
                source={{uri: ReplaceLink(avata)}} 
                style={[styles.avataImage,{transform:this.computeTransformationStyleAuthorAvata()}]} 
            />
        )
    }
    computeTransformationStyleAuthorAvata = ()=>{
        let transform = [
            {
                scale:this.anim.interpolate({
                    inputRange:[0,TRANSLATE],
                    outputRange:[1,0],
                    extrapolate:'clamp',
                    useNativeDriver:'true'
                })
            }
        ]
        return transform
    }
    render() {
        // console.log("Hoc Container ",this.props)
        let {item} = this.props
        let translateY = this.anim.interpolate({
            inputRange:[0,TRANSLATE],
            outputRange:[0,-TRANSLATE],
            extrapolate:'clamp',
            useNativeDriver:'true'
        })
        return (
            <SafeAreaView style={styles.safeView}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}
                    style={styles.container}
                >
                    <Animated.View style={[{transform:[{translateY}]}]}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri:'https://citybook.cththemes.com/wp-content/uploads/2018/03/22.jpg'}} style={styles.headerImage} />
                        </View>
                    </Animated.View>
                    <View style={{height:250,backgroundColor:'red'}} />
                    <View style={{height:250,backgroundColor:'yellow'}} />
                    <View style={{height:250,backgroundColor:'blue'}} />
                    <View style={{height:250,backgroundColor:'black'}} />
                    <View style={{height:250,backgroundColor:'red'}} />
                    <View style={{height:250,backgroundColor:'red'}} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    },
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    imageContainer:{
        height:250
    },
    headerImage:{
        flex:1,
        resizeMode:'cover'
    },

})