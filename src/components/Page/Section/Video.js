
import React, { Component } from 'react'
import { 
    StyleSheet,
    Dimensions,
    View
} from 'react-native'
import Video from 'react-native-video'
import RenderElement from '../RenderElement';

const {width} = Dimensions.get('window')
export default class SectionVideo extends Component {
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
    render() {
        //console.log("Section Video",this.props)
        let {settings} = this.props.elements
        return (
            <View style={[styles.container,this.props.style]}>
                <Video
                    source={ {uri: settings.background_video_link} } style={styles.video} repeat={true} resizeMode={'cover'}
                />
                <View style={styles.content}>
                    {this._renderElement()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    video:{
        width,
        height:200,
    },
    content:{
        position:'absolute',
        alignSelf:'center',
        padding:20,
    },
    element:{
        // backgroundColor:'transparent'
    }
})
