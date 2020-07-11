
import React from 'react';
import { 
    StyleSheet,
} from 'react-native';
import RenderElement from '../RenderElement';
import {Overlay} from './Overlay/Overlay';
import LinearGradient  from 'react-native-linear-gradient'

export default class Gradient extends React.PureComponent {
    _findElement = ()=>{
        //find element and push in array elements
        let els = this.props.elements.elements[0];
        let elements = Array();
        let settings = new Promise((resolve,reject)=>{
            if(els.elements.length!==0){
                if(els.elements[0].elements.length>1){
                    els.elements[0].elements.forEach(ele=>{
                        elements.push(ele.elements[0])
                    })
                }
                else if(els.elements.length>1){
                    els.elements.forEach(ele=>{
                        if(ele.elements.length===0){
                            elements.push(ele)
                        }else{
                            ele.elements.forEach(el=>{
                                elements.push(el.elements[0])
                            })
                        }
                    })
                }else{
                    elements.push(els.elements[0])
                }
            }else{
                reject('No element in section.')
            }
        })
        settings.then().catch(err=>{
            //console.log(err)
        })
        // //console.log(elements);
        return elements;
    }
    _renderElement = ()=>{
        let elements = Array();
        this._findElement().forEach((element,index)=>{
            elements.push(
                <RenderElement element={element} key={element.id} style={styles.element} />
            )
        })
        return elements ;
    }
    _colors = ()=>{
        let {settings} = this.props.elements
        let colors = []
        settings.background_color?colors.push(settings.background_color):colors.push('#3bce4f')
        settings.background_color_b?colors.push(settings.background_color_b):colors.push('#f72a5d')
        return colors
    }
    _locations = ()=>{
        let {settings} = this.props.elements
        let locations = []
        settings.background_color_stop?locations.push(settings.background_color_stop.size/100):locations.push(0.4)
        settings.background_color_b_stop?locations.push(settings.background_color_b_stop.size/100):locations.push(0.6)
        return locations
    }
    render() {
        let {settings} = this.props.elements
        //console.log("Section gradient",this.props)
        return (
            <LinearGradient
                style={[styles.container,this.props.style]}
                colors={this._colors()}
                locations={this._locations()}
            >
                {
                    settings.background_overlay_background?
                        <Overlay settings={settings} />
                    :null
                }
                {this._renderElement()}
            </LinearGradient>
                
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    element:{
        margin:20
    }
})