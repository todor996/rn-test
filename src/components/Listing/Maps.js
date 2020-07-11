/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Linking,
} from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps';
import Constants from 'constants';
import {TextApp} from 'App';
import Icon from 'react-native-vector-icons/Entypo'
import getCurrentGeoLocation from 'helpers/GoogleGeocoder'
import {ReplaceLink} from 'App';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';

export default class Maps extends Component {
    constructor(props){
        super(props);
        let item = this.props.navigation.state.params;
        this.state = {
            region:{
                latitude:Number(item.latitude),
                longitude:Number(item.longitude),
                latitudeDelta:Constants.Maps.latitudeDelta,
                longitudeDelta:Constants.Maps.longitudeDelta
            },
        }
    }
    _handlePressDirection = ()=>{
        let listing = this.props.navigation.state.params;
        let url = ''
        getCurrentGeoLocation((item)=>{
            //console.log(item)
            if(item){
                url = `https://www.google.com/maps/dir/${item.lat},${item.lng}/${listing.latitude},${listing.longitude}`
                //console.log(url)
                Linking.openURL(url)
            }else{
                //console.log("err")
            }
        })
    }
    render() {
        //console.log(this.props)
        let item = this.props.navigation.state.params;
        return (
            <React.Fragment>
                <HeaderStack {...this.props} style={styles.header} />
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    mapType={Constants.Maps.type}
                >
                    <Marker
                    key={item.id}
                    coordinate={{
                        latitude:this.state.region.latitude,
                        longitude:this.state.region.longitude
                    }}
                    image={require('../../img/marker.png')}
                    >
                        <Callout tooltip={true} >
                            <View  style={[styles.customMarker]} >
                                <Image source={{uri:ReplaceLink(item.thumbnail)}} style={styles.image} />
                                <TextApp style={[styles.text]} >{item.title}</TextApp>
                                <TextApp style={[styles.txt_add_phone]}>{`${I18n.t('address')}: ${item.address}`}</TextApp>
                                <TextApp style={[styles.txt_add_phone]}>{`${I18n.t('phone')}: ${item.phone}`}</TextApp>
                                <TextApp style={[styles.post_working_hours]} >{item.post_working_hours.statusText}</TextApp>
                            </View>
                        </Callout>
                    </Marker>
                    <Icon name='direction' color='#4b8af4' size={30} style={styles.iconDirection} onPress={this._handlePressDirection} />
                </MapView>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        flex:1,
        backgroundColor:'#fff',
        ...StyleSheet.absoluteFillObject,
    },
    customMarker:{
      backgroundColor:'#fff',
      borderRadius:10,
      marginBottom:10,
      width:250
    },
    text:{
      padding:10,
      color:'black'
    },
    txt_add_phone:{
      padding:5,
      paddingLeft:10,
      color:'black'
    },
    image:{
      width:250,
      height:160
    },
    post_working_hours:{
      color:'red',
      padding:5,
      paddingLeft:10,
      paddingBottom:10
    },
    iconDirection:{
        position:'absolute',
        bottom:30,
        right:15
    },
    header:{
        position: 'absolute',
    }
});

