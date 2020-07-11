

import React from 'react';
import { 
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import SlideItem from './SlideItem';
import Carousel,{ Pagination } from 'react-native-snap-carousel'
import { Appcolor } from '../../../../styles';

const {width} = Dimensions.get('window')
export default class TestimonialsSlider extends React.PureComponent {
    static propTypes = {
        setting:PropTypes.object,
    }
    static defaultProps = {
        setting:{
            testimonials:[]
        }
    }
    constructor(props){
        super(props)
        this.state = {
            entries:0, 
            activeSlide:0
        }
    }
    renderItem = ({item,index})=>{
        return(
            <SlideItem item={item} key={index} />
        )
    }
    get pagination () {
        const {  activeSlide } = this.state;
        const entries = this.props.setting.testimonials
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              dotStyle={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  marginHorizontal: 8,
              }}
              containerStyle={styles.containerPagination}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              dotColor={Appcolor}
              inactiveDotColor={'grey'}
              
            />
        );
    }
    render() {
        //console.log("Testimonials Slider",this.props)
        return (
            this.props.setting.testimonials.length!==0
            ?   <View style={styles.container}>
                    <Carousel
                        renderItem={this.renderItem}
                        sliderWidth={width-20}
                        itemWidth={width-20}
                        data={this.props.setting.testimonials}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        loop={true}
                        autoplay={false}
                    />
                    {
                        this.pagination
                    }
                </View>   
            :   null
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        overflow: 'hidden',
        margin:10
    },
    slide: {
        flex:1,
    },
    slideInnerContainer: {
        flex:1,
    },
    content:{
        flex:1,
        backgroundColor:'red'
    },
    containerPagination:{
        position:'absolute',
        bottom:-10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
})