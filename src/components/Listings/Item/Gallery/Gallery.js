import React from 'react'
import { 
    View,
    StyleSheet
 } from 'react-native';
import Item from './Item/Item';
import {TextApp} from 'App';
import Container from '../HocContainer/Container';
import I18n from 'language/I18n'
import HocContainer from '../HocContainer/HocContainer';

const Gallery = props =>{
    let item = props.navigation.state.params
    //console.log("GALLERY",this.props)
    let RenderGallery = ()=>{
        return(
            item._cth_gallery_imgs.length!==0
            ?   <Item imgs={item._cth_gallery_imgs} />
            :   <View style={styles.gallery}>
                    <TextApp >{I18n.t('thisPostDontHaveGallery')}</TextApp>
                </View>
        )
    }
    const Render = HocContainer(RenderGallery)
    return(
        <Render item={item} />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    gallery:{
        flex:1,
        padding:10,
        backgroundColor:'#fff',
        margin:10
    },
    flex:{
        flex:1
    },
})

export default Gallery;