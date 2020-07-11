import React, { Component } from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList
 } from 'react-native';
import NavigationService from 'helpers/NavigationService';
import {TextApp} from 'App';
import {ReplaceLink} from 'App';
import {Overlay} from 'App';
import CountListing from './Inners/CountListing';
import { AppFontMedium } from 'styles';
import { H3 } from '../../../styles';

class Item extends Component {
    _keyExtractor = (item,index)=>index.toString()

    _renderItem = ({item,index})=>{
        return(
            <View style={styles.item}>
                <TouchableOpacity onPress={()=>NavigationService.navigate('ListingOfCat',(item.id))}  >
                    <View style={styles.content} >
                        <TextApp style={styles.title} >{item.name}</TextApp>
                        <View style={styles.line}></View>
                        <TextApp numberOfLines={2} style={styles.txtContent}>
                            {item.description ? item.description : 'Constant care and attention to the patients makes good record'}
                        </TextApp>
                    </View>
                    <View style={styles.containerImg}>
                        <Image source={{uri:ReplaceLink(item.term_meta.featured_img.url)}} style={styles.image}/>
                        <Overlay />
                    </View>
                    <CountListing count={item.count} />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        //console.log("Item Listing Cats",this.props)
        return (
            <View  style={styles.container}>
                <FlatList 
                    horizontal={true}
                    data={this.props.listingCats}
                    renderItem = {this._renderItem}
                    keyExtractor={this._keyExtractor}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                />
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerImg:{
        width:250
    },
    item:{
        marginRight:7,
    },
    image:{
        width:250,
        height:165,
        resizeMode:'cover',
        borderRadius: 5,
    },
    title:{
        color:'#fff',
        fontSize:H3,
        fontWeight: 'bold',
    },
    flatList:{
        paddingLeft:10,
    },
    content:{
        position:'absolute',
        bottom:30,
        zIndex:10,
        left:15,
        right:5
    },
    line:{
        width:40,
        height:1,
        backgroundColor:'#fff',
        marginLeft:5
    },
    txtContent:{
        color:'#fff',
        marginLeft:5
    },
    listing_cat:{
        paddingTop:5,
        paddingBottom:5,
        color:'black',
        paddingLeft:5
    },
    countListing:{
        flexDirection:'row',
        alignItems:'center'
    },
    textCount:{
        fontSize:AppFontMedium,
        color:'#fff',
        paddingLeft:2
    }
})

export default Item;