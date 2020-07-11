import React, { Component } from 'react';
import {  
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    Animated,
} from 'react-native';
import { Appcolor } from 'styles';
import {ReplaceLink} from 'App';
import {Overlay} from 'App';
import {TextApp} from 'App';
import { AppFontSize } from 'styles';
import AddToCart from '../../AddToCart';


const AnimText = Animated.createAnimatedComponent(TextApp)
const TRANSLATE = 215
const HocContainer = (BaseComponent)=>{
    return class HocContainer extends Component{
        constructor(props){
            super(props)
            this.state = {
                anim: new Animated.Value(0)
            }
        }
        renderAuthorImage = ()=>{
            let {item} = this.props
            let avata = item.author_avatar
            return(
                <Animated.View style={[styles.avataContainer,{transform:this.transformedAvata()}]} >
                    <Animated.Image
                        source={{uri: ReplaceLink(avata)}} 
                        style={[styles.avataImage,{transform:this.transformedAvata()}]} 
                    />
                </Animated.View>
            )
        }
        transformedAvata = ()=>{
            let transform = [
                {
                    scale:this.state.anim.interpolate({
                        inputRange:[0,TRANSLATE],
                        outputRange:[1,0],
                        useNativeDriver:'true',
                        extrapolate:'clamp',
                    })
                }
            ]
            return transform
        }
        onScroll = ({nativeEvent})=>{
            //console.log(nativeEvent.contentOffset.y)
            this.state.anim.setValue(nativeEvent.contentOffset.y)
        }
        render(){
            let {item} = this.props
            let translateY = this.state.anim.interpolate({
                inputRange:[0,TRANSLATE],
                outputRange:[0,-TRANSLATE],
                extrapolate:'clamp',
                useNativeDriver:'true'
            })
            let opacity = this.state.anim.interpolate({
                inputRange:[0,TRANSLATE],
                outputRange:[0,1],
                extrapolate:'clamp',
                useNativeDriver:'true'
            })
            let top = this.state.anim.interpolate({
                inputRange:[TRANSLATE,265],
                outputRange:[265,220],
                extrapolate:'clamp',
                useNativeDriver:'true'
            })
            return(
                <SafeAreaView style={styles.safeView}>
                    <Animated.ScrollView 
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={[0]}
                        onScroll={
                            this.onScroll
                        }
                        scrollEventThrottle={16}
                        style={styles.container}
                    >
                        <React.Fragment >
                            <Animated.View style={[{transform:[{translateY}]}]}>
                                <Image source={{uri: ReplaceLink(item.thumbnail)}} style={[styles.headerImage]} />
                                
                                <Overlay />
                                {
                                    this.renderAuthorImage()
                                }
                                <Animated.View style={[styles.overlay,{opacity}]}>
                                    <AnimText style={[{top},styles.titleAnim]}>{item.title}</AnimText>
                                </Animated.View>
                            </Animated.View>
                        </React.Fragment>
                        <View style={styles.titleContainer}>
                            <TextApp style={styles.textTitle} >{item.title}</TextApp>
                        </View>
                        <BaseComponent />
                    </Animated.ScrollView>
                </SafeAreaView>
            )
        }
        
    }
}
export default HocContainer
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    },
    headerImage:{
        resizeMode:'cover',
        flex:1,
        height:250
    },
    titleContainer:{
        height:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        zIndex:-1
    },
    textTitle:{
        marginTop:5,
        fontSize:AppFontSize,
        color:'#334e6f'
    },
    avataImage:{
        width:40,
        height:40,
        borderRadius:20
    },
    avataContainer:{
        width:50,
        height:50,
        backgroundColor:'rgba(255,255,255,0.5)',
        bottom:-20,
        zIndex:20,
        borderRadius:25,
        alignSelf:'center',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:Appcolor,
        zIndex:15,
        overflow: 'hidden',
    },
    titleAnim:{
        alignSelf:'center',
        fontSize:AppFontSize,
        color:'#fff',
        position:'absolute'
    }
})