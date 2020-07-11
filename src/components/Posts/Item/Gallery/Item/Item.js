
import React from 'react';
import { 
    StyleSheet
} from 'react-native';
import RenderPostImages from './RenderPostImages';
import { transformedGallery, GalleryModal } from '../../../../Listings/Item/Gallery/Item/Item';
import Header from '../../../../Listings/Item/Gallery/Item/Header';
import PostSliderModal from './PostSliderModal';
const RenderItem = (props)=>{
    return(
        <React.Fragment>
            <Header />
            <RenderPostImages imgs={props.item.post_slider_images} showModal={props.showModal} />
            <PostSliderModal imgs={props.item.post_slider_images} closeModal={props.closeModal} index={props.index} visible={props.modalshow} />
        </React.Fragment>
    )
}
const Item = transformedGallery(GalleryModal)(RenderItem)
export default Item
const styles = StyleSheet.create({
    
})
