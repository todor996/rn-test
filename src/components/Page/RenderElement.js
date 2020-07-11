import React, { Component } from 'react';
import { 
    View
} from 'react-native';
import HeroSection from './Element/HeroSection/HeroSection';
import ListingList from '../Listings/List/ListingList';
import ListingCats from '../Listings/Cats/ListingCats';
import SectionTitle from './Element/SectionTitle/SectionTitle';
import Counter from './Element/Counter/Counter';
import Accordion from './Element/Accordion/Accordion';
import OurPartners from './Element/OurPartners/OurPartners';
import Process from './Element/Process/Process';
import CollageImages from './Element/CollageImages/CollageImages';
import TextEditor from './Element/TextEditor/TextEditor';
import BackgroundColor from './Container/Classic/BackgroundColor';
import BackgroundImage from './Container/Classic/BackgroundImage';
import BackgroundImageColor from './Container/Classic/BackgroundImageColor';
import TestimonialsSlider from './Element/TestimonialsSlider/TestimonialsSlider';
import MembersGrid from './Element/MembersGrid/MembersGrid';
import FeatureBox from './Element/FeatureBox/FeatureBox';
import ListingsGrid from './Element/ListingsGrid/ListingsGrid';
import ListingsSlider from './Element/ListingsSlider/ListingsSlider';
import TeamBox from './Element/TeamBox/TeamBox';
import HeroSectionMap from './Element/HeroSectionMap/HeroSectionMap';
import SectionText from './Element/SectionText/SectionText';
import PopupVideo from './Element/PopupVideo/PopupVideo';
import PostsGrid from './Element/PostsGrid/PostsGrid'

export default class RenderElement extends Component {
    _showElement = ()=>{
        let {settings} = this.props.element;
        //check widgetType
        switch(this.props.element.widgetType){
            case 'section_text':
                return <SectionText setting ={settings} style={this.props.style} /> 
            case 'hero_section':
                return <HeroSection settings={settings} />
            case 'posts_grid':
                return <PostsGrid setting ={settings} />
            case 'listings_slider':
                return <ListingsSlider setting={settings} />
            case 'listing_categories':
                return <ListingCats settings={settings} />
            case 'section_title':
                return <SectionTitle setting ={settings} />
            // case 'accordion':
            //     return <Accordion setting ={settings} />
            // case 'counter':
            //     return <Counter setting ={settings} /> 
            // case 'our_partners':
            //     return <OurPartners setting ={settings} /> 
            // case 'popup_video':
            //     return <PopupVideo  setting ={settings} />
            // case 'process':
            //     return <Process setting ={settings} /> 
            case 'collage_images':
                return <CollageImages setting ={settings} />
            // case 'text-editor':
            //     return <TextEditor setting ={settings} /> 
            case 'testimonials_slider':
                return <TestimonialsSlider setting ={settings} /> 
            case 'members_grid':
                return <MembersGrid setting = {settings} />
            // case 'feature_box':
            //     return <FeatureBox setting={settings} /> ;
            case 'listings_grid':
                return <ListingList setting={settings} />;
            // case 'team_box':
            //     return <TeamBox setting={settings} />;
            // case 'hero_section_map':
            //     return <HeroSectionMap setting={settings} /> ;
            default:
                return <View></View>
        }
    }
    _renderContainer = ()=>{
        let {settings} = this.props.element;
        if(Object.keys(settings).length!==0){
            if(settings._background_color!==undefined){
                if(settings._background_image!==undefined){
                    return(
                        <BackgroundImageColor
                            backgroundColor={settings._background_color}
                            source={settings._background_image.url.replace('localhost','10.0.2.2')}
                        >
                            {this._showElement()}
                        </BackgroundImageColor>
                    )
                }else{
                    return(
                        <BackgroundColor backgroundColor={settings._background_color}>
                            {this._showElement()}
                        </BackgroundColor>
                    )
                }
            }
            else{
                if(settings._background_image!==undefined){
                    return(
                        <BackgroundImage
                            backgroundColor={settings._background_color}
                            source={settings._background_image.url.replace('localhost','10.0.2.2')}
                        >
                            {this._showElement()}
                        </BackgroundImage>
                    )
                }else{
                    return this._showElement();
                }
            }
        }else{
            return (this._showElement())
        }
    }
    render() {
        //console.log("RenderElement",this.props)
        return (
            this._renderContainer()
        );
    }
}
