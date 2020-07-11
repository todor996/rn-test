
import React, { Component } from 'react';
import { 
    View, 
    Image,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import HTML from 'react-native-render-html';
import {ReplaceLink, Overlay} from '../../../App';
import { AppFontFamily, H3 } from '../../../../styles';

const tagsStyles = {
    h3:{
        // fontFamily:AppFontFamily,
        fontSize:H3,
        color:'#566985',
        fontWeight: '500',
    },
    span:{
        color:'#4db7fe',
    }
}
class AnimImage extends Component{
    constructor(props){
        super(props)
        this.state = {
            anim:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    this.state.anim,
                    {
                        toValue:1,
                        duration:1200,
                    }
                ),
                Animated.timing(
                    this.state.anim,
                    {
                        toValue:0,
                        duration:1200,
                        easing:Easing.ease
                    }
                )
            ])
        ).start()
    }
    render(){
        let animTop = this.state.anim.interpolate({
            inputRange:[0,1],
            outputRange:[`${(this.props.top)-10}%`,`${this.props.top}%`]
        })
        let {left} = this.props;
        return(
            <Animated.Image 
                source={{uri:this.props.url}} 
                style={[styles.animImg,{top:animTop,left:`${left}%`}]}
            />
            
        )
    }
}
export default class CollageImages extends React.PureComponent{
    _renderImage = ()=>{
        let images = Array();
        this.props.setting.images.forEach((image,index)=>{
            if(index===0){
                images.push(
                    <View style={styles.ctnMain} key={index}>
                        <Image 
                            source={{uri: ReplaceLink(image.image.url)}} 
                            style={[styles.mainImage]}
                        /> 
                        <Overlay />
                    </View>
                )
            }else if(image.use_animation==='yes'){
                let url = ReplaceLink(image.image.url);
                images.push(
                    <AnimImage url={url} key={index} left={Number(image.left_pos)} top={Number(image.top_pos)} />
                )
            }else{
                images.push(
                    <View style={[styles.ctnImage,{left:`${Number(image.left_pos)}%`,top:`${Number(image.top_pos)}%`}]} key={index} >
                        <Image 
                            source={{uri:ReplaceLink(image.image.url)}} 
                            style={[styles.image]}  
                            
                        />
                        <Overlay />
                    </View>
                    
                )
            }
        })
        return images;
    }
    render() {
        //console.log("CollageImages",this.props);
        return (
            <View style={[styles.container]}>
                <View style={styles.title} >
                    <HTML html={`<h3>${ this.props.setting.title.toUpperCase() }</h3>`} tagsStyles={tagsStyles} />
                </View>
                <View style={styles.border} />
                {
                    this._renderImage()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        height:200,
        borderRadius:5,
        overflow:'hidden'
    },
    ctnImage:{
        position:'absolute',
        width:50,
        height:50,
        borderRadius:25,
        overflow:'hidden'
    },
    image:{
        
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover'
    },
    mainImage:{
        width:100,
        height:100,
        borderRadius:50,
        zIndex:3
    },
    title:{
        position: 'absolute',
        right:'30%',
        top:10,
        padding:5,
        backgroundColor: '#fff',
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10
    },
    bgImg:{
        flex:1,
        height:160,
        resizeMode:'cover',
        zIndex:1
    },
    animImg:{
        width:50,
        height:50,
        borderRadius:25,
        zIndex: 1,
        position: 'absolute',
    },
    ctnMain:{
        padding:5,
        borderRadius:100,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    border:{
        width:150,
        height:150,
        borderRadius:75,
        borderStyle:'dotted',
        borderWidth:1,
        borderColor:'#fff',
        position:'absolute',
        zIndex:-1,
        top:0
    }
})
