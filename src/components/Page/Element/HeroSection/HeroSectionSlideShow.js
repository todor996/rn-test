import React from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper'
import {Appcolor} from 'styles';
import {ReplaceLink} from 'App';
import {Overlay} from 'App';
import Content from './Inners/Content';


const {width} = Dimensions.get('window');
const renderItem =  (imgs)=>{
    let slides = imgs.map((item,index)=>{
        return(
            <View style={styles.wrapper} key={index}>
                <Image source={{uri:ReplaceLink(item.url)}} style={styles.image}  />
                <Overlay />
            </View>
        )
    })
    return slides
}
const HeroSectionSlideShow = ((BaseComponent)=>(props)=>{
    return(
        <View style={styles.container}>
            {
                props.settings.slideshow_imgs.length!==0
                ?   <Swiper 
                            // autoplay={true} 
                            showsButtons={true} 
                            containerStyle={styles.wrapper}
                            activeDotColor={Appcolor}
                            showsButtons={false}
                            autoplayTimeout={3}
                        >
                            {renderItem(props.settings.slideshow_imgs)}
                    </Swiper>
                :   null
            }
            <View style={styles.content}>
                <BaseComponent {...props} />
            </View>
        </View>
    )
})(Content)
export default HeroSectionSlideShow
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    content:{
        position: 'absolute',
        alignSelf: 'center',
    },
    wrapper:{
        width,
        height:200
    },
    image:{
        height:200,
        resizeMode:'cover',
        width:null,
        flex:1
    }
})
