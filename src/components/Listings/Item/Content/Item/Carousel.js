
import React, { Component } from 'react';
import { 
    StyleSheet,
    Dimensions,
    Image,
    View
 } from 'react-native';
import {Appcolor, AppIconMedium} from '../../../../../styles';
import Swiper from 'react-native-swiper';
import {Overlay} from '../../../../App';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {TextApp} from '../../../..//App';
import {ReplaceLink} from '../../../../App';
import I18n from '../../../../../language/I18n'

const {width} = Dimensions.get('window');
class ItemCarousel extends Component {
    _renderItem = ()=>{
        let slide = Array();
        this.props.headerimgs.forEach((url,index)=>{
            slide.push(
                <View style={styles.item} key={index}>
                    <Image source={{uri: ReplaceLink( url)}} style={styles.image}  />
                    <Overlay />
                </View>
            )
        })
        return slide;
    }
    render() {
        // //console.log("Item Carousel",this.props)
        return (
            <View style={styles.container}>
                <View style={styles.carousel}>
                    <Icon name='images' size={AppIconMedium} color={Appcolor}/>
                    <TextApp style={styles.textCarousel}>{I18n.t('carousel')}</TextApp>
                </View>
                <Swiper 
                    autoplay={true} 
                    showsButtons={true} 
                    containerStyle={styles.wrapper}
                    activeDotColor={Appcolor}
                    showsButtons={false}
                    autoplayTimeout={3}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                >
                    {this._renderItem()}
                </Swiper>
            </View>
                
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginBottom:10,
        flexWrap:'wrap'
    },
    image:{
        height:300,
        width,
        resizeMode:'cover'
    },
    wrapper:{
        height:300
    },
    dot:{
        width:6,
        height:6,
        borderRadius:3
    },
    activeDot:{
        width:6,
        height:6,
        borderRadius:3
    },
    carousel:{
        borderBottomWidth:1,
        borderBottomColor:'#e7e7ed',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        backgroundColor:'#fff',
        height:50
    },
    textCarousel:{
        fontWeight:'500',
        color:'#334e6f',
        paddingLeft:5
    },
    item:{

    }
})
export default ItemCarousel
