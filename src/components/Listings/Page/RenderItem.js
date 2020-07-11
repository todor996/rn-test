
import React from 'react'
import {  
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
} from 'react-native'
import NavigationService from 'helpers/NavigationService'
import {Appcolor, AppFontSize, AppFontMedium, H3} from '../../../styles'
import {TextApp} from 'App'
import {ReplaceLink} from 'App';
import {Overlay} from 'App';
import Address from '../List/Item/Address';
import Like from '../List/Item/Like';
import Review from '../../Page/Element/ListingsSlider/Inners/Review';

class RenderItem extends React.Component{
    render(){
        let {item}= this.props;
        //console.log("Render Item Page",this.props)
        let margin = this.props.index%2==0?{marginRight:2.5}:{marginLeft:2.5}
        return(
            <TouchableOpacity
                onPress={()=>{
                    setTimeout(function(){
                            NavigationService.navigate('ListingItem', item)
                        },450)
                    }} 
                onPressIn={this._onPressIn} 
                style={[styles.touchO,margin]}
            >
                <View style={[styles.listing]} >
                    <Like like={item.likeCount} />
                    <View>
                        <Image style={[styles.image]} source={{uri: ReplaceLink(item.thumbnail)}} />
                        <Overlay />
                    </View>
                    <View style={styles.content}>
                        <TextApp style={styles.title} >{item.title}</TextApp>
                        <Address address={item.address} />
                        {/* <View style={styles.sttBottom}>
                            <TextApp style={styles.star} >8<TextApp style={styles.starMax}>/ 10</TextApp></TextApp>
                            <TextApp style={[styles.status,item.statusText=="Now Closed"?{color:'#fc7171'}:{color:Appcolor}]}>{item.statusText?item.statusText:''}</TextApp>
                        </View> */}
                        <Review item={item} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listing:{
        flex:1,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        overflow:'hidden',
    },
	content:{
        backgroundColor:'#fff',
        paddingTop:5,
        flexWrap: 'wrap',
    },
    touchO:{
        marginBottom:5,
        flex:1
    },
    image: {
        width:'100%',
        height:150,
        resizeMode:'cover'
    },
    like:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        backgroundColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        top:10,
        right:10,
        borderRadius:3,
        zIndex:10
    },
    textLike:{
        color:'#fff'
    },
    content:{
        backgroundColor:'#fff',
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
    },
    title:{
        fontSize:H3,
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:15
    },
    status:{
        textAlign:'right',
        fontSize:AppFontMedium,
        position:'absolute',
        right:10
    },
    sttBottom:{
        borderTopWidth:1,
        borderTopColor:'#eee',
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'center',
    },
    star:{
        fontSize:AppFontSize,
        color:'#52d38b'
    },
    starMax:{
        color:'grey'
    }
})

export default RenderItem;