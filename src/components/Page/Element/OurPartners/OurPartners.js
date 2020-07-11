import React from 'react';
import { 
    View, 
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import Next from '../ListingsSlider/Buttons/Next';
import Prev from '../ListingsSlider/Buttons/Prev';
import { Appcolor } from '../../../../styles';

const {width} = Dimensions.get('window');
export default class OurPartners extends React.PureComponent {
    _renderImage = ()=>{
        let images = Array();
        this.props.setting.images.forEach((img,index)=>{
            images.push(
                <View  style={styles.ctnImg} key={index} >
                    <View style={styles.coverImg} >
                        <Image source={{uri:img.url.replace('localhost','10.0.2.2')}} style={styles.image} />
                    </View>
                </View>
            )
        })
        return images;
    }
    render() {
        //console.log("OurPartners",this.props)
        return (
            <Swiper 
                containerStyle={styles.wrapper} 
                showsButtons={true} 
                showsPagination={false} 
                removeClippedSubviews={false}
                nextButton={<Next style={styles.button} />}
                prevButton={<Prev style={styles.button}/>}
            >
                {
                    this.props.setting.images.length!==0?this._renderImage():null
                }
                
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        width,
        height:80,
        justifyContent: 'center',
    },
    ctnImg:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
    },
    image:{
        width:200,
        height:50,
        resizeMode:'contain'
    },
    button:{
        padding:8,
        borderRadius:20,
        backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center'
    },
    coverImg:{
        backgroundColor:'#fff',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
})