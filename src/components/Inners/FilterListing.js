
import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import HeaderStack from './HeaderStack';
import {connect} from 'react-redux'
import Location from '../Listing/Location';
import { TextApp } from '../App';
import { H3, AppIconSize, Appcolor } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import I18n from 'language/I18n'

// import {getListingCats} from 'actions/ListingActions'

class FilterListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location:'',
            category:'',
        };
    }
    setLocation = (location)=>{
        this.setState({location})
    }
    // UNSAFE_componentWillMount(){
    //     if(!this.props.listing_cats.length){
    //         this.props.getListingCats()
    //     }
    // }
    onPress = ()=>{
        // //console.log('press')
        let filterListing = this.props.navigation.state.params
        let filtered = true
        let page = this.props.page.filter((item,index)=>{
            if(this.state.location){
                if(this.state.category){
                    return item.locations[0].name===this.state.location&&item.cats[0].name===this.state.category
                }else{
                    return item.locations[0].name===this.state.location
                }
            }else if(this.state.category){
                return item.cats[0].name===this.state.category
            }else{
                filtered=false
                return this.props.page
            }
        })
        filterListing(page,filtered)
        this.props.navigation.navigate('ListingPage')
    }
    setCategory = (category)=>()=>{
        this.setState({category})
    }
    renderItem = ({item,index})=>{
        return(
            <TouchableOpacity style={[styles.category]} activeOpacity={1} onPress={this.setCategory(item.name)} >
                <TextApp style={styles.textCategory}>{item.name}</TextApp>
                {
                    this.state.category===item.name
                    ?   <Ionicons name='ios-radio-button-on' size={AppIconSize} color={Appcolor} style={styles.icon} />
                    :   <Ionicons name='ios-radio-button-off' size={AppIconSize} color={Appcolor} style={styles.icon} />
                }
                
            </TouchableOpacity>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        // //console.log(this.props)
        //console.log(this.state)
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header}>
                    <TextApp style={styles.textDone} onPress={this.onPress} >{I18n.t('done')}</TextApp>
                </HeaderStack>
                <View style={styles.container}>
                    <TextApp style={styles.text}>{I18n.t('location')}</TextApp>
                    <Location setLocation={this.setLocation} location={this.state.location} />
                    <TextApp style={styles.text}>{I18n.t('category')}</TextApp>
                    <FlatList 
                        data={this.props.listing_cats}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        showsVerticalScrollIndicator={false}
                        extraData={this.state.category}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    text:{
        fontSize: H3, 
        // color: '#566985', 
        marginLeft: 10,
        marginVertical: 10,
    },
    category:{
        height:50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    icon:{
        position: 'absolute',
        right:10
    },
    textDone:{
        position:'absolute',
        top:40,
        right:10
    }
})
function mapStateToProps(state){
    return{
        listing_cats:state.listings.listing_cats,
        page:state.listings.page,
        locations:state.listings.locations,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListingCats:()=>dispatch(getListingCats())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(FilterListing)