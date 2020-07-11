
import React, { Component } from 'react'
import { 
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native'
// import Lottie from 'lottie-react-native'
import {connect} from 'react-redux'
import {getPageMobileApp} from 'actions/PageActions'
import {getUsers} from 'actions/UserActions'
import {getListingCats,getListingLocations} from 'actions/ListingActions'
import {Overlay} from 'App'
import LinearGradient from 'react-native-linear-gradient'

const {width,height} = Dimensions.get('window')


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {page: []}
    }
    componentDidMount(){
        this.props.getPageMobileApp()
        this.props.getListingCats()
        this.props.getListingLocations()
    }
    static getDerivedStateFromProps(props, state) {
        // console.log(props.pageMobileApp);
        // console.log(state.page);
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.
        if ( props.pageMobileApp != state.page ) {
            if(props.pageMobileApp.length) props.navigation.navigate('Home')
            return {
                page: props.pageMobileApp
            };
        }
        return null;
    }
    // UNSAFE_componentWillMount(){
    //     this.props.getPageMobileApp()
    //     this.props.getListingCats()
    //     this.props.getListingLocations()
    // }
    // UNSAFE_componentDidUpdate(prevProps){
    //     let {pageMobileApp} = this.props
    //     console.log(pageMobileApp);
    //     console.log(prevProps);
    //     if(pageMobileApp!==prevProps.pageMobileApp) 
    //         if(pageMobileApp.length) this.props.navigation.navigate('Home')
        
    // }
    render() {
        // console.log("Loading",this.props)
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Overlay backgroundColor={'rgba(47,59,89,0.98)'} />
                {/*<Lottie source={require('../../../img/animationMarker.json')} autoPlay={true} style={styles.lottie} autoSize={true} />*/}
                <Image source={require('../../../img/iconcitybook.png')} style={styles.image} />
            </LinearGradient>
           
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width,
        height,
        justifyContent:'center'
    },
    lottie:{
        transform:[{scale:0.32}],
        alignSelf:'center',
        zIndex:10
    },
    image:{
        zIndex:10,
        alignSelf:'center',
        position:'absolute',
        top:height/2
    }
})
function mapStateToProps(state){
    return{
        // state,
        pageMobileApp: state.pageMobileApp,
        // cats:state.listings.listing_cats
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPageMobileApp:()=>dispatch(getPageMobileApp()),
        getUsers:(user_info,data)=>dispatch(getUsers(user_info,data)),
        getListingCats:()=>dispatch(getListingCats()),
        getListingLocations:()=>dispatch(getListingLocations())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Loading)