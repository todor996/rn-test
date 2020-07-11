
import React, { Component } from 'react';
import { 
    View, 
    Modal,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel'
import {ReplaceLink} from 'App';
import {Overlay} from 'App';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AppIconLarge } from 'styles';

const {width,height} = Dimensions.get('window')
export default class ModalGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    close = ()=>{
        this.props.closeModal()
    }
    renderItem = ({item,index})=>{
        return(
            <View style={styles.slideItem}>
                <Image source={{uri:ReplaceLink(item)}} style={styles.image} />
                <Overlay />
            </View>
        )
    }
    next = ()=>{
        this.refs.carousel.snapToNext()
    }
    prev = ()=>{
        this.refs.carousel.snapToPrev()
    }
    render() {
        return (
            <Modal
                // animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
            }}>
                <TouchableOpacity style={styles.container} onPress={this.close} activeOpacity={1} >
                        
                </TouchableOpacity>
                <View style={styles.slideShow}>
                    <Carousel
                        data={this.props.item._cth_gallery_imgs}
                        renderItem={this.renderItem}
                        itemWidth={width}
                        sliderWidth={width}
                        sliderHeight={200}
                        itemHeight={200}
                        loop={true}
                        removeClippedSubviews={false}
                        autoplay={false}
                        ref={'carousel'}
                    />
                    <TouchableOpacity onPress={this.next} style={styles.buttonNext} activeOpacity={1} >
                        <FontAwesome name='long-arrow-right' color={'#fff'} size={AppIconLarge} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.prev} style={styles.buttonPrev} activeOpacity={1} >
                        <FontAwesome name='long-arrow-left' color={'#fff'} size={AppIconLarge} />
                    </TouchableOpacity>
                </View>
                
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        height,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        zIndex:5,
        position: 'absolute',
    },
    slideShow:{
        zIndex:10,
        width:width,
        height:200,
        marginTop:(height-200)/2,
        justifyContent: 'center',
    },
    slideItem:{
        width,
        height:200,
        backgroundColor:'transparent',
    },
    image:{
        width:width,
        height:200,
        resizeMode:'cover'
    },
    buttonNext:{
        position:'absolute',
        zIndex:10,
        right:10
    },
    buttonPrev:{
        position:'absolute',
        zIndex:10,
        left:10
    }
})
