
import React, { Component } from 'react';
import {  
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {getListings} from 'actions/ListingActions';
import Carousel from 'react-native-snap-carousel';
import RenderSlider from './RenderSlider';
import RenderSliderLoading from './RenderSliderLoading';
import {TextApp} from 'App';
import { Appcolor, AppIconMedium } from 'styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import NavigationService from 'helpers/NavigationService';
import I18n from 'language/I18n'

let arr = [1,2,3,4]
const {width} = Dimensions.get('window')
class ListingsSlider extends Component {
    static defaultProps = {
        setting:{
            'posts_per_page':5,
            'orderby' : 'Date',
            'order' : 'Descending',
        }
    }
    UNSAFE_componentWillMount(){
        let {setting} = this.props;
        let query = {
            'posts_per_page':setting.posts_per_page?setting.posts_per_page:5,
            'orderby' : setting.orderby?setting.orderby:'Date',
            'order' : setting.order?setting.order:'Descending',
        }
        setting.ids?query['ids'] = setting.ids :null;
        setting.ids_not?query['ids_not'] = setting.ids_not:null;
        // //console.log(query)
        this.props.getListings(query)
    }
    renderItem=({item,index})=>{
        return(
            <RenderSlider item={item}/>
        )
    }
    handlePress = ()=>{
        NavigationService.navigate('ListingPage')
    }
    render() {
        //console.log("Listings Slider",this.props)
        return (
            this.props.listings.length!==0?
                <View style={styles.carousel}>
                    <Carousel
                        data={this.props.listings}
                        renderItem={this.renderItem}
                        itemWidth={230}
                        sliderWidth={width}
                        loop={true}
                        removeClippedSubviews={false}
                    />
                    {/* <TouchableOpacity style={styles.button} onPress={this.handlePress} >
                        <TextApp style={styles.text} >{I18n.t('seeMore')}</TextApp>
                        <SimpleLineIcons name='arrow-right' size={AppIconMedium} color='#fff' style={styles.icon} />
                    </TouchableOpacity> */}
                </View>
            :
                <View style={styles.carousel}>
                    <Carousel
                        data={arr}
                        renderItem={({item,index})=><RenderSliderLoading item={item} />}
                        itemWidth={230}
                        sliderWidth={width}
                        loop={true}
                        removeClippedSubviews={false}
                    />
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginBottom:30
    },
    carousel:{
        marginBottom:30
    },
    button:{
        alignSelf:'center',
        marginTop: 10,
        backgroundColor:Appcolor,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:'#fff'
    },
    icon:{
        marginLeft:5
    }
})
function mapStateToProps(state){
    return{
        listings:state.listings.posts
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListings:(query)=>dispatch(getListings(query))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingsSlider)
