

import React from 'react';
import RenderElement from './RenderElement';

class Elements extends React.PureComponent{
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
                <RenderElement element={element} key={element.id} />
            )
        })
        return elements ;
    }
    // _renderSection = ()=>{
    //     if(this.props.elements.settings instanceof Array ){
    //         return this._renderElement()
    //     }else if(this.props.elements.settings instanceof Object){
    //         return(
    //            <Section settings={this.props.elements.settings}>
    //                 {this._renderElement()}
                    
    //             </Section> 
    //         )
    //     }else{
    //         return this._renderElement()
    //     }
    // }
    render(){
        // //console.log("Elements",this.props)
        return(
            this._renderElement()
        )
    }
}
export default Elements