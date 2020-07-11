
import React, { Component } from 'react'
import { 
    StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Gradient extends Component {
    _colors = ()=>{
        let settings = this.props
        let colors = []
        settings.background_overlay_color_b?colors.push(settings.background_overlay_color_b):colors.push('#f72a5d')
        settings.background_overlay_color?colors.push(settings.background_overlay_color):colors.push('#3bce4f')
        return colors
    }
    _locations = ()=>{
        let settings = this.props
        let locations = []
        settings.background_overlay_color_stop?locations.push(settings.background_overlay_color_stop.size/100):locations.push(0.4)
        settings.background_overlay_color_b_stop?locations.push(settings.background_overlay_color_b_stop.size/100):locations.push(0.6)
        return locations
    }
    _style = ()=>{
        let {settings} = this.props
        let style = {}
        if(settings.background_overlay_opacity) style.opacity = settings.background_overlay_opacity.size
        else style.opacity = 1
        return style
    }
    render() {
        //console.log("Gradient",this.props)
        return (
            <LinearGradient 
                style={[styles.container,this._style()]}
                colors={this._colors()}
                locations={this._locations()}
            >

            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        overflow:'hidden',
    }
})
