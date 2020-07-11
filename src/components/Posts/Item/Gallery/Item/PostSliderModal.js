import React from 'react';
import { transformedImages } from './RenderPostImages';
import SliderModal from '../../../../Listings/Item/Gallery/Item/SliderModal';

const transformedSliderModal = (func)=>(BaseComponent)=>props=>{
    let imgs = func(props.imgs)
    // //console.log("Post Slider Modal",props)
    return(
        <BaseComponent  {...props} imgs={imgs}  />
    )
}
const PostSliderModal = transformedSliderModal(transformedImages)(SliderModal)
export default PostSliderModal