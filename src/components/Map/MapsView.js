

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Constants from '../../constants';
import {connect} from 'react-redux';
import {getPage} from '../../actions/ListingActions';
import Index from './RenderListing/Index';
import RenderMakerIos from './RenderMarkerIos';
import HeaderDrawer from '../Inners/HeaderDrawer';

class MapsView extends Component {
    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude:41.0572159,
                longitude:-74.12218899999999,
                latitudeDelta:0.3,
                longitudeDelta:0.3
            },
            index:0
        }
    }
    UNSAFE_componentWillMount(){
        //set number == 0 get all listing post
        this.props.getPage(0)
    }
    _setIndex = (number)=>{
        this.setState({index:number})
        if (this.state.index !== number && number>-1 && number<this.props.page.length-1 ) {
            this.map.animateToRegion(
                {
                    longitude:Number(this.props.page[number].longitude),
                    latitude:Number(this.props.page[number].latitude),
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                },
                350
            );
            Platform.OS=='android'
            ?
                this.marker.animateMarkerToCoordinate(
                    {
                        longitude:Number(this.props.page[number].longitude),
                        latitude:Number(this.props.page[number].latitude),
                    },
                    350
                )
            :null
        }
    }
    render() {
        //console.log('MapView',this.props);
        return (
            <View style={styles.container}>
                <HeaderDrawer {...this.props} style={{position:'absolute'}} />
                <MapView
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress = {this.onPress}
                    mapType={Constants.Maps.type}
                    ref={map => this.map = map}
                >
                    {
                        Platform.OS==='android'
                        ?   <Marker
                                coordinate={this.state.region}
                                image={require('../../img/marker.png')}
                                ref={(marker)=>this.marker=marker}
                            />
                        :   <RenderMakerIos page={this.props.page} index={this.state.index} />
                    }
                    
                </MapView>
                <Index setIndex = {this._setIndex} />
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex:1
    },
    map: {
        flex:1,
        backgroundColor:'#fff',
        ...StyleSheet.absoluteFillObject,
    },
});
function mapStateToProps(state){
    return{
	    page:state.listings.page,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPage:(number)=>dispatch(getPage(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MapsView)
