import React, { Component } from 'react'
import { 
    StyleSheet,
    ImageBackground
} from 'react-native'

export default class Classic extends Component {
    _backgroundImage = ()=>{
        let {settings} = this.props 
        if(settings.background_overlay_image) return settings.background_overlay_image.url.replace('localhost','10.0.2.2')
        else return null
    }
    _backgroundColor = ()=>{
        let {settings} = this.props 
        let style={}
        if(settings.background_overlay_color) style.backgroundColor = settings.background_overlay_color
        if(settings.background_overlay_opacity) style.opacity = settings.background_overlay_opacity.size
        return style
    }
    render() {
        //console.log("Classic",this.props)
        return (
            <ImageBackground 
                source={{uri:this._backgroundImage()}}
                style={[styles.container,this._backgroundColor()]} 
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
    }
})
