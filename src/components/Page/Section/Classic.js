
import React from 'react';
import { 
    ImageBackground,
    StyleSheet,
} from 'react-native';
import RenderElement from '../RenderElement';
import {Overlay} from './Overlay/Overlay';
import {ReplaceLink} from '../../App';

export default class Classic extends React.PureComponent {
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
    _backgroundImage = ()=>{
        let {settings} = this.props.elements
        if(settings.background_image) return ReplaceLink( settings.background_image.url)
        else return null
    }
    _backgroundColor = ()=>{
        let {settings} = this.props.elements
        if(settings.background_color) return {backgroundColor:settings.background_color}
        else return null
    }
    render() {
        let {settings} = this.props.elements
        //console.log("Section Classic",this.props)
        return (
            <ImageBackground
                source={{uri:this._backgroundImage()}}
                style={[styles.container,this.props.style,this._backgroundColor()]}
            >
                {
                    settings.background_overlay_background?
                        <Overlay settings={settings} />
                    :null
                }
                {/* {this.props.render(this.props)} */}
                {this._renderElement()}
                
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        marginBottom:30
    },
    // element:{
    //     margin:20,
    // }
})