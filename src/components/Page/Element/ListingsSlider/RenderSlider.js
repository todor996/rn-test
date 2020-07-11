
import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types'
import {TextApp} from 'App'
import NavigationService from 'helpers/NavigationService'
import {Overlay} from 'App';
import {ReplaceLink} from 'App';
import Like from 'Listings/List/Item/Like';
import Cats from 'Listings/List/Item/Cats';
import Address from 'Listings/List/Item/Address';
import Review from './Inners/Review';
import Avatar from './Inners/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Appcolor, AppIconSmall } from 'styles';
import Feature from './Inners/Feature';
import { H3, AppIconMedium } from '../../../../styles';

const RenderSlider = (props)=>{
    propTypes = {
        item:PropTypes.object
    }
    _onPress = ()=>{
        NavigationService.navigate('ListingItem',props.item)
    }
    let {item} = props
    return(
        <TouchableOpacity style={styles.container} onPress={this._onPress} activeOpacity={1} >
            <View style={styles.ctnImage}>
                {
                    item.thumbnail
                    ?   <Image style={[styles.thumbnail]} source={{uri:ReplaceLink(item.thumbnail)}} />
                    :   <Image style={[styles.thumbnail]} source={require('../../../../img/noimage.png')} />
                }
                <Like like={item.likeCount} />
                <Overlay />
                <Avatar link={item.author_avatar} />
                <View style={styles.cats}>
                    {item.cats && item.cats.length!==0?<Cats cats = {item.cats} />:null}
                </View>
                {
                    item.featured
                    ?   <Feature />
                    :   null
                }
            </View>
            <View style={styles.content}>
                <TextApp style={styles.title} >
                    {item.title+' ' }
                    {
                        item.verified ? <Icon name='check-circle' size={AppIconMedium} color={Appcolor} /> : null
                    }
                </TextApp>
                <Address address={item.address} />
                <Review item={item} />
            </View>
        </TouchableOpacity>
    )
}
export default RenderSlider
const styles = StyleSheet.create({
    container:{
        width:230,
        marginRight:6,
        flex:1,
    },
    ctnImage:{
        flex:1,
        height:140,
        ...Platform.select({
            ios:{
                zIndex:2
            }
        }),
    },
    thumbnail:{
        width:null,
        height:null,
        resizeMode:'cover',
        flex:1
    },
    content:{
        flex:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        ...Platform.select({
            ios:{
                zIndex:1
            }
        }),
    },
    title:{
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:15,
        fontSize: H3,
    },
    authorAvatar:{
        width:30,
        height:30,
        borderRadius:15,
        alignSelf: 'center',
    },
    cats:{
        position:'absolute',
        bottom:-10,
        left:10,
        zIndex:1,
        flexDirection:'row'
    },
    avatar:{
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom:-15,
        zIndex:10,
        width:40,
        height:40,
        right:20,
        borderRadius:20,
    },
    isAd:{
        padding:3,
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#5ecfb1',
    }
})