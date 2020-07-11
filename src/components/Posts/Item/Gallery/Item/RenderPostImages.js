import React from 'react';
import RenderImages from '../../../../Listings/Item/Gallery/Item/RenderImages';

const transformedComponent = (func)=>(BaseComponent)=>props=>{
    let imgs = func(props.imgs)
    return(
        <BaseComponent {...props} imgs={imgs}  />
    )
}
export const transformedImages = (imgs)=>{
    let images = []
    for(id in imgs){
        images.push(imgs[id])
    }
    return images
}
const RenderPostImages = transformedComponent(transformedImages)(RenderImages)
export default RenderPostImages