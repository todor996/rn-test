
import React from 'react';
import { 
    View,
    Image,
    Modal,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconF from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import { Appcolor, AppIconSize, AppIconMedium, AppFontMedium } from '../../../../../styles';
import {ReplaceLink} from 'App';
import {Overlay} from 'App';

const {width} = Dimensions.get('window')
const SliderModal = (props) => {
    // //console.log("Slider Modal",props)
    onPress = ()=>{
        props.closeModal()
    }
    return(
        <SafeAreaView style={styles.safeView}>
            <Modal animationType='fade'  onRequestClose={()=>{}}  visible={props.visible} >
                <Icon name='close' size={AppIconSize} onPress={onPress} style={styles.iconClose}/>
                <Swiper 
                    showsButtons={true} 
                    showsPagination={false} 
                    index={props.index}
                    nextButton={<IconF name='long-arrow-right' size={AppIconMedium} color={'#fff'} style={styles.swiperButton} />}
                    prevButton={<IconF name='long-arrow-left' size={AppFontMedium} color={'#fff'} style={styles.swiperButton}/>}
                    containerStyle={styles.wrapper}
                >
                    {
                        props.imgs.map((item,index)=>{
                            return(
                                <View style={styles.gallerySlide} key={index} >
                                    <View>
                                        <Image source = {{uri: ReplaceLink(item)}} style={[styles.image]} />
                                        <Overlay />
                                    </View>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </Modal>
        </SafeAreaView>
    )
}
export default SliderModal
const styles = StyleSheet.create({
    wrapper:{
        // height:250
    },
    gallerySlide:{
        flex: 1,
        height:250,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        flexWrap: 'wrap',
        overflow:'hidden',
    },
    safeView:{
        flex:1
    },
    image:{
        width,
        height:250,
        resizeMode:'cover',
    },
    swiperButton:{
        padding:10,
        borderRadius:20,
        backgroundColor:Appcolor,
        zIndex:1,
        justifyContent:'center',
        alignSelf:'center',
        overflow: 'hidden',
    },
    iconClose:{
        position:'absolute',
        zIndex:1,
        right:0,
        color:'#4DB7FE',
        marginTop: 30,
    }
})