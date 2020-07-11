
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {paymentMethod} from 'App'
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconSize } from 'styles';
const {width} = Dimensions.get('window')
export default class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderItem = ({item,index})=>{
        onPress= ()=>{
            this.props.changePaymentMethod(item.method)
        }
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1} >
                    {
                        this.props.paymentMethod===item.method
                        ?   <View style={styles.check} >
                                <Icon name='check-circle' color={Appcolor} size={AppIconSize} />
                            </View>
                        :null
                    }
                    <Image source={item.img} style={styles.image} />
                </TouchableOpacity>
            </View>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        return (
            <Carousel
                data={paymentMethod()}
                renderItem={this.renderItem}
                itemWidth={250}
                sliderWidth={width}
                loop={true}
                removeClippedSubviews={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:250,
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
        width:250,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        height:150,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image:{
        resizeMode:'cover',
        flex:1,
        width:null,
        height:null
    },
    check:{
        position: 'absolute',
        top: 0,
        right:0,
        zIndex:1
    }
})
