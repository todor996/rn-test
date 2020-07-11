
import React from 'react';
import { 
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Appcolor, AppFontMedium, AppIconLarge } from 'styles';
import Form from './Item/Form/Form';
import {TextApp} from 'App';
import IconF from 'react-native-vector-icons/Feather'
import ButtonApp from 'App/ButtonApp';
import {connect } from 'react-redux'
import {searchListing} from 'actions/ListingActions'
import I18n from 'language/I18n'
import HeaderStack from '../../Inners/HeaderStack';
// import Lottie from 'lottie-react-native'
import { AppFontSize } from '../../../styles';

class SearchScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userLocation:I18n.t('yourLocation'),
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.searchData!==prevProps.searchData){
            this.props.navigation.navigate('SearchResult',this.props.searchData)
        }
    }
    _checkLocation = (location)=>{
        this.setState({
            userLocation:location
        })
    }
    _onChangeText = (text,name)=>{
        this.setState({[name]:text})
    }
    _handleSearchClick = ()=>{
        let data = {}
        this.state.userLocation!=='Your Location'?data['userLocation'] = this.state.userLocation:null
        this.props.cat!==''?data['category'] = this.props.cat:null
        this.state.s!==undefined?data['s'] = this.state.s:null
        this.props.price!==''?data['priceRange'] = this.props.price:null
        this.props.orderBy!==''?data['sortBy'] = this.props.orderBy:null
        this.props.tags.length!==0?data['tags'] = this.props.tags:null
        //console.log("Data Search",data)
        this.props.searchListing(data)
    }
    render() {
        //console.log("SearchScreen",this.state)
        //console.log("SearchScreen",this.props)
        return (
            <ScrollView style={styles.scrollView}>
                <HeaderStack {...this.props} style={styles.header} >
                    <TextApp style={styles.textSearch} >{I18n.t('search')}</TextApp>
                    {/* <Lottie style={{width:100,height:100}} source={require('../../../img/location.json')}  /> */}
                </HeaderStack>
                <View style={styles.container}>
                    <React.Fragment>
                        <View style={styles.s}>
                            <TextApp style={styles.textLocation} >{this.state.userLocation}</TextApp>
                            <IconF name='search' size={AppIconLarge} color={'grey'} style={styles.iconSearch} />
                        </View>
                        <Form  
                            name='s' 
                            onChangeText={this._onChangeText} 
                            priceRange={this.props.price}
                            orderBy={this.props.orderBy}
                            cat={this.props.cat}
                        />
                    </React.Fragment>
                    <View style={styles.bottom}>
                        <ButtonApp title={I18n.t('searchNow')} style={styles.button} onPress={this._handleSearchClick} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    scrollView:{
        flex:1,
    },
    container:{
        backgroundColor:'#fff',
        flex:1,
        marginHorizontal: 5,
        marginTop: 10,
    },
    header:{
        backgroundColor:'#fff'
    },
    textSearch:{
        position:'absolute',
        top:40,
        alignSelf:'center',
        fontSize:AppFontSize
    },
    iconSearch:{
        position:'absolute',
        alignSelf:'flex-end'
    },
    s:{
        justifyContent:'center',
        margin:10
    },
    textLocation:{
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        fontSize:AppFontSize,
        paddingTop:20
    },
    button:{
        backgroundColor:Appcolor,
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        position:'absolute',
        bottom:0,
        width:'100%'
    },
})
function mapStateToProps(state){
    return{
        searchData:state.listings.searchData,
        tags:state.search.tags,
        cat:state.search.cat,
        price:state.search.price,
        orderBy:state.search.orderBy
    }
}
function mapDispatchToProps(dispatch){
    return{
        searchListing:(data)=>dispatch(searchListing(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen)