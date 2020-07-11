import React, { Component } from 'react';
import { 
    Image,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps'
import AnimImage from './Inners/AnimImage';

export default class RenderMakerIos extends Component {
    renderMaker = ()=>{
        let markers = this.props.page.map((listing,index)=>{
            return(
                <MapView.Marker 
                    key={index}
                    coordinate = {
                        {
                            latitude:Number(listing.latitude),
                            longitude:Number(listing.longitude),
                        }
                    }
                    
                >
                    {
                        index==this.props.index
                        ?   <AnimImage />
                        :   <Image 
                                source={require('../../img/marker.png')} 
                                style={[styles.image]} 
                            />
                    }
                    
                </MapView.Marker>
            )
        })
        return markers
    }
    render() {
        return (
            this.props.page.length!==0
            ?   this.renderMaker()
            :   null
        );
    }
}
const styles = StyleSheet.create({
    image:{
        width:40,
        height:40,
        resizeMode:'cover'
    }
})
