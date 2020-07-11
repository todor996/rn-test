import React, { Component } from 'react';
import {  
    View,
    StyleSheet,
    Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import {connect} from 'react-redux'
import { AppFontMedium } from '../../../../styles';

const FilterLocation = (props)=>{
    //console.log("Filter locations",props)
    onValueChange = (value)=>{
        if(value!==null){
            props.filter((page)=>{
                let newPage =  page.filter(listing=>{
                    return listing.locations[0].slug === value
                })
                return newPage
            })
        }else{
            props.filter()
        }
        
    }
    listingLocations = ()=>{
        let locations = []
        for(slug in props.locations){
            locations.push(
                {
                    label:props.locations[slug],
                    name:slug
                }
            )
        }
        //console.log(locations)
        return locations
    }
    return(
        <View style={styles.container} >
            <RNPickerSelect
                items={listingLocations()}
                onValueChange={this.onValueChange}
                style={
                    stylePicker
                }
                hideIcon={true}
                placeholder = {{
                    label:'All location',
                    value:null
                }}
                placeholderTextColor='#fff'
            >
            </RNPickerSelect>
        </View>
    )
}
mapStateToProps = (state)=>{
    return{
        locations:state.listings.locations
    }
}
export default connect(mapStateToProps,null)(FilterLocation)
const styles = StyleSheet.create({
    container:{
        marginRight:5
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