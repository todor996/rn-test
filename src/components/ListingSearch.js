
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Platform
} from 'react-native';
import HeaderStack from './Inners/HeaderStack';
import {connect} from 'react-redux'
import SortBy from './Listing/SortBy';
import {TextApp} from './/App';
import PriceRange from './Listing/PriceRange';
import { H3, AppFontSize, AppFontFamily, Appcolor, AppIconSize, AppIconLarge } from '../styles';
import I18n from 'language/I18n'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {searchListing} from 'actions/ListingActions'
import getCurrentGeoLocation from 'helpers/GoogleGeocoder'

class ListingSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s:'',
            userLocation:''
        };
    }
    componentDidUpdate(prevProps){
        if(this.props.searchData!==prevProps.searchData){
            this.props.navigation.navigate('SearchResult',this.props.searchData)
        }
    }
    navigateToScreen = (screen)=>()=>{
        this.props.navigation.navigate(screen)
    }
    onChangeText = (text)=>{
        this.setState({
            s:text
        })
    }
    searchYourLocation = ()=>{
        getCurrentGeoLocation((data)=>{
            //console.log(data)
            this.refs.yourLocation.setNativeProps({text: data.formatted_address})
            this.setState({
                userLocation:data.formatted_address
            })
        })
    }
    search = ()=>{
        let {search} = this.props
        let data = {}
        this.state.userLocation ? data['userLocation'] = this.state.userLocation:null
        search.cat!=='' ? data['category'] = search.cat:null
        search.s ? data['s'] = this.state.s:null
        search.price!=='' ? data['priceRange'] = search.price:null
        search.orderBy!=='' ? data['sortBy'] = search.orderBy:null
        search.tags.length ? data['tags'] = search.tags:null
        //console.log("Data Search",data)
        this.props.searchListing(data)
    }
    render() {
        let {search} = this.props
        let icon = this.state.userLocation?'my-location':'location-searching'
        return (
            <React.Fragment>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} >
                    <HeaderStack {...this.props} style={styles.header}>
                        <MaterialIcons name={icon} color={Appcolor} size={AppIconSize} style={styles.searchLocation} onPress={this.searchYourLocation} />
                    </HeaderStack>
                    <View style={styles.container}>
                        <TextInput ref={'yourLocation'} style={styles.textInput}  underlineColorAndroid={'transparent'} placeholder={I18n.t('yourLocation')} editable={false} />
                        <TextInput style={styles.textInput} onChangeText={this.onChangeText} underlineColorAndroid={'transparent'} placeholder={I18n.t('whereAreYouLookingFor')} />
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={this.navigateToScreen('Cats')} >
                            <TextApp style={styles.text} >{search.cat?search.cat:'Category'}</TextApp>
                            <SimpleLineIcons name='arrow-right' size={AppIconLarge} color={Appcolor} style={styles.arrowRight} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={this.navigateToScreen('Tags')} >
                            <TextApp style={styles.text}>{search.tags.length?search.tags.join(', '):'Tags'}</TextApp>
                            <SimpleLineIcons name='arrow-right' size={AppIconLarge} color={Appcolor} style={styles.arrowRight} />
                        </TouchableOpacity>
                        <TextApp style={styles.title} >{I18n.t('priceRange')}</TextApp>
                        <PriceRange />
                        <TextApp style={styles.title}>{I18n.t('sortBy')}</TextApp>
                        <SortBy />
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.buttonSearch} activeOpacity={1} onPress={this.search} >
                    <TextApp style={styles.textSearch} >{I18n.t('searchNow')}</TextApp>
                </TouchableOpacity>
            </React.Fragment>
            
        );
    }
}
function mapStateToProps(state){
    return{
        search:state.search,
        searchData:state.listings.searchData,
    }
}
function mapDispatchToProps(dispatch){
    return{
        searchListing:(data)=>dispatch(searchListing(data))
    }   
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingSearch)
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    title:{
        fontSize: H3, 
        // color: '#566985', 
        marginBottom: 10 , 
        marginLeft: 10,
    },
    button:{
        height:50,
        justifyContent: 'center',
        marginBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text:{
        fontSize:AppFontSize,
        marginLeft:10
    },
    textInput:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        marginBottom:10,
        // fontFamily: AppFontFamily,
        fontSize:AppFontSize,
        paddingLeft: 10,
    },
    searchLocation:{
        position:'absolute',
        right:10,
        ...Platform.select({
            ios:{
                top:40,
                paddingHorizontal: 15,
            },
            android:{
                top:10
            }
        }),
        zIndex:10
    },
    buttonSearch:{
        height:40,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:Appcolor
    },
    textSearch:{
        fontSize:AppFontSize,
        color:'#fff'
    },
    arrowRight:{
        position: 'absolute',
        right:10
    }
})