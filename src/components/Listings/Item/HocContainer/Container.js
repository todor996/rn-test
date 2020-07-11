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
import {Appcolor, AppFontSize} from 'styles'
import {TextApp} from 'App';
import {Overlay} from 'App';
import {ReplaceLink} from 'App';

const TRANSLATE = 215
const AnimText = Animated.createAnimatedComponent(TextApp)
export default class Container extends Component {
    UNSAFE_componentWillMount(){
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
        // //console.log("Hoc Container ",this.props)
        let {item} = this.props
        let translateY = this.anim.interpolate({
            inputRange:[0,TRANSLATE],
            outputRange:[0,-TRANSLATE],
            extrapolate:'clamp',
            useNativeDriver:'true'
        })
        let opacity = this.anim.interpolate({
            inputRange:[0,TRANSLATE],
            outputRange:[0,1],
            extrapolate:'clamp',
            useNativeDriver:'true'
        })
        
        let bottom = this.anim.interpolate({
            inputRange:[TRANSLATE+18.5,TRANSLATE+55],
            outputRange:[-13,8],
            extrapolate:'clamp',
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
                    <React.Fragment>
                        <Animated.View style={[{transform:[{translateY}]}]}>
                            <View style={styles.imageContainer}>
                                {
                                    this.renderImageHeader()
                                }
                                <Animated.View style={[styles.overlay,{opacity}]} />
                                <Overlay />
                                <AnimText style={[styles.titleOverlay,{bottom}]} >{item.title}</AnimText>
                            </View>
                            {
                                Platform.OS=='ios'
                                ?this.renderAuthorImage()
                                :null
                            }
                        </Animated.View>
                    </React.Fragment>
                    
                    <View>
                        {
                            Platform.OS=='android'
                            ?this.renderAuthorImage()
                            :null
                        }
                        <View style={styles.titleContainer}>
                            <TextApp style={styles.textTitle} >{item.title}</TextApp>
                        </View>
                    </View>
                    {
                        this.props.render()
                    }
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
    overlay:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        backgroundColor:Appcolor,
        zIndex:1,
        width:'100%',
        height:'100%'
    },
    avataImage:{
        width:40,
        height:40,
        ...Platform.select({
            ios:{
                bottom:-20,
            },
            android:{
                top:-20
            }
        }),
        zIndex:10,
        borderRadius:20,
        alignSelf:'center',
        position:'absolute'
    },
    titleContainer:{
        height:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    textTitle:{
        marginTop:5,
        fontSize:AppFontSize,
        color:'#334e6f'
    },
    titleOverlay:{
        position:'absolute',
        zIndex:3,
        fontSize:AppFontSize,
        color:'#fff',
        alignSelf:'center'
    },
})