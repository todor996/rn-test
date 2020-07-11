
import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import {connect} from 'react-redux'
import {TextApp} from 'App';
import Icon from 'react-native-vector-icons/Feather'
import I18n from 'language/I18n'
import { AppFontMedium, AppIconSmall } from '../../../../styles';
const FilterCategory = (props)=>{
    //console.log(props)
    onValueChange = (value)=>{
        if(value!==null){
            props.filter((page)=>{
                let newPage =  page.filter(listing=>{
                    return listing.cats[0].slug === value
                })
                return newPage
            })
        }else{
            props.filter()
        }
        
    }
    listingCats = ()=>{
        let cats = props.cats.map(cat=>{
            return {
                label:cat.name,
                value:cat.slug
            }
        })
        return cats
    }
    return(
        <View style={styles.container} >
            <RNPickerSelect
                items={listingCats()}
                onValueChange={this.onValueChange}
                style={
                    stylePicker
                }
                hideIcon={true}
                placeholder = {{
                    label:'All categories',
                    value:null
                }}
                placeholderTextColor='#fff'
            >
                {
                    Platform.OS==='android'
                    ?   <View style={styles.placeholder} >
                            <TextApp style={styles.text} >{I18n.t('allCats')}</TextApp>
                            <Icon name='chevron-down' size={AppIconSmall} color='#fff' style={styles.icon} />
                        </View>
                    :   null
                }
                
            </RNPickerSelect>
        </View>
    )
}
mapStateToProps = (state)=>{
    return{
        cats:state.listings.listing_cats,
        locations:state.listings.locations
    }
}
export default connect(mapStateToProps,null) (FilterCategory)
const styles = StyleSheet.create({
    container:{

    },
    placeholder:{
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        marginLeft:2
    },
    text:{
        color:'#fff'
    }
})
const stylePicker = {
    inputIOS:{
        // fontFamily: 'Quicksand',
        fontSize:AppFontMedium,
        color:'#fff'
    },
    
    ...Platform.select({
        ios:{
            viewContainer:{
                borderWidth:1,
                borderColor:'#fff',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
                paddingVertical: 2,
            }
        },
        android:{
            headlessAndroidContainer:{
                borderWidth:1,
                borderColor:'#fff',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
                paddingVertical:2
            }
        }
    })
    
}