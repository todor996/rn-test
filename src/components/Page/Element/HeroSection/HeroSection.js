import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
} from 'react-native';
import HeroSectionVideo from './HeroSectionVideo';
import HeroSectionBgImage from './HeroSectionBgImage';
import HeroSectionSlideShow from './HeroSectionSlideShow';
export default class HeroSection extends Component {
    render() {
        //console.log("HERO SECTION",this.props)
        return (
            <View style= {styles.container} >
                {
                    this.props.settings.bg_type?this.props.settings.bg_type=='ht_video'?
                        <HeroSectionVideo settings={this.props.settings} />
                    :
                        this.props.settings.bg_type=='slideshow'?
                        <HeroSectionSlideShow settings={this.props.settings} />
                    :null
                    :this.props.settings.bgimage?
                        <HeroSectionBgImage settings={this.props.settings} />
                    :null
                }
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:15
    },
})
