import React from 'react'
import { 
    View,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Appcolor, AppIconLarge } from 'styles';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import RenderImages from '../../Gallery/Item/RenderImages';
import SliderModal from '../../Gallery/Item/SliderModal';
import {GalleryModal,transformedGallery} from '../../Gallery/Item/Item';
const RenderComponent = (props)=>{
    return(
        <React.Fragment>
            <View style={styles.photos}>
                <Icon name="image-filter" size={AppIconLarge} color={Appcolor} />
                <TextApp style={[styles.text]} >{I18n.t('photos')}</TextApp>
            </View>
            <RenderImages imgs={props.imgs} showModal={props.showModal} />
            <SliderModal imgs={props.imgs} closeModal={props.closeModal} index={props.index} visible={props.modalshow}/>
        </React.Fragment>
    )
}
const Photos = transformedGallery(GalleryModal)(RenderComponent)
export default Photos
const styles = StyleSheet.create({
    photos:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        padding:5,
        paddingTop:15,
        paddingBottom:15
    },
    text:{
        color:'#334e6f',
        paddingLeft:5,
        fontWeight:'500'
    }
})
