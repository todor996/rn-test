

import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import getCurrentGeoLocation from '../../../../helpers/GoogleGeocoder';
import {connect} from 'react-redux';
import {searchListing} from '../../../../actions/ListingActions';


const {width,height} = Dimensions.get('window');
class HeroSectionMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            query:{

            }
        }
    }
    UNSAFE_componentWillMount(){
        getCurrentGeoLocation((data)=>{
            this.setState({
                query:{
                    ...this.state.query,
                    address_add:data.formatted_address
                }
            })
        })
        this.props.searchListing({address_add:"1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"})
    }
    render() {
        //console.log("Hero section map",this.props)
        return (
            <View style={{ flex: 1, minHeight: 150}}>
                <MapView  style={styles.map} initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>
                    {/* <Marker region={this.state.region}>

                    </Marker> */}
                </MapView>
            </View>
                
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex:1,
        ...StyleSheet.absoluteFillObject,
    },
})

function mapStateToProps(state){
    return{
        searchData:state.searchData
    }
}
function mapDispatchToProps(dispatch){
    return{
        searchListing:(data)=>dispatch(searchListing(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeroSectionMap);
