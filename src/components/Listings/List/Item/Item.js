

import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions
 } from 'react-native';
import {Appcolor, AppFontMedium, AppFontSmall} from 'styles';
import NavigationService from 'helpers/NavigationService';
import Rating from './Rating';
import Cats from './Cats';
import {TextApp} from 'App';
import {Overlay} from 'App';
import {ReplaceLink} from 'App';
import I18n from 'language/I18n'
import Like from './Like';
import Address from './Address';
import Avatar from '../../../Page/Element/ListingsSlider/Inners/Avatar';
const {width}  = Dimensions.get('window')

export default class Item extends Component{
    constructor(props){
        super(props);
        // //console.log(this.props)
        this.state = {
            scale:new Animated.Value(1)
        }
    }
    _onPressIn = ()=>{
        Animated.sequence([
            Animated.timing(
                this.state.scale,
                {
                    toValue:0.95, 
                    duration:225
                }
            ),
            Animated.timing(
                this.state.scale,
                {
                    toValue:1,
                    duration:200
                }
            )
        ]).start()
    }
    render(){
        let item = this.props.item;
        return(
            <TouchableOpacity
                onPress={()=>{
                    setTimeout(function(){
                            NavigationService.navigate('ListingTab', item)
                        },450)
                    }} 
                onPressIn={this._onPressIn} 
                style={styles.touchO}
            >
                <View style={styles.listing} >
                    <View style={styles.ctnImg}>
                        <View style={styles.cats}>
                            {item.cats.length!==0?<Cats cats = {item.cats} />:null}
                        </View>
                        <Like like={item.likeCount} />
                        <View style={styles.img} >
                            {
                                item.thumbnail
                                ?   <Animated.Image style={[styles.image,{transform:[{scale:this.state.scale}]}]} source={{uri: ReplaceLink(item.thumbnail)}} />
                                :   <Animated.Image style={[styles.image,{transform:[{scale:this.state.scale}]}]} source={require('../../../../img/noimage.png')} />
                            }
                            <Overlay />
                        </View>
                        <Avatar link={item.author_avatar} style={styles.avatar} />
                    </View>
                    <Animated.View style={[styles.content,{transform:[{scale:this.state.scale}]}]} >
                        <TextApp style={styles.title} >{item.title}</TextApp>
                        <TextApp style={[styles.price]} >{`$ ${item.price_from?item.price_from:''} - $ ${item.price_to?item.price_to:''}`}</TextApp>
                        <Address address={item.address} />
                        <View style={styles.rating} >
                            {
                                item.rating!==""
                                ?   <Rating rating={item.rating} />
                                :   <TextApp style={[styles.notReview]} >{I18n.t('notReviewYet')}</TextApp>
                            }
                            {
                                item.rating_count!==""
                                ?   <TextApp style={[styles.ratingCount]} >{`(${item.rating_count} review)`}</TextApp>
                                :   null
                            }
                        </View>
                        <TextApp  style={[styles.statusT,item.statusText=="Now Closed"?{color:'red'}:{color:Appcolor}]}>{item.statusText?item.statusText:''}</TextApp>
                    </Animated.View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    listing:{
        flexDirection:'row',
    },
	content:{
        width:width/2,
        backgroundColor:'#fff',
        paddingLeft:5,
        paddingTop:5,
        overflow:'hidden',
    },
    touchO:{
        marginBottom:10,
    },
    img:{
        flex:1,
        overflow: 'hidden',
    },
    image: {
        height:null,
        width:null,
        resizeMode:'cover',
        flex:1,
        borderTopLeftRadius:2,
        borderBottomLeftRadius:2
    },
    text: {
        color:'#334e6f',
        marginBottom:10
    },
    ctnImg:{
        width:width/2,
        height:150,
    },
    price:{
		color:'#5ECFB1',
		fontSize:AppFontMedium,
        fontWeight:'500',
        paddingBottom:10,
        paddingLeft:5
    },
    line:{
        backgroundColor:'#eee',
        height:1,
        width:'80%',
        marginTop:10,
        alignSelf:'center',
        marginBottom:10
    },
    statusT:{
        opacity:0.8,
        fontSize:AppFontSmall,
        paddingLeft:5
    },
    cats:{
        position:'absolute',
        top:5,
        left:5,
        zIndex:1,
        flexDirection:'row'
    },
    rating:{
        flexDirection: 'row',
        marginTop:5,
        alignItems:'center'
    },
    notReview:{
        color:'#999',
        paddingLeft:5,
        fontSize:AppFontSmall,
        paddingBottom:5
    },
    ratingCount:{
        marginLeft:5,
        color:'#999'
    },
    title:{
        fontSize:AppFontMedium,
        color:'black',
        paddingLeft:5,
        paddingBottom:5,
        paddingTop:5,
    },
    avatar:{
        position: 'absolute',
        bottom:15,
        right:10
    }
})