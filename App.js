import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Animated,
    Easing,
    View,
    Text
} from 'react-native';
import {Provider} from 'react-redux';
// import configureStore from './src/store/configureStore';
// import ListingPage from './src/components/Listings/Page/Page';
import NavigationService from './src/helpers/NavigationService';
// import {FluidNavigator} from 'react-navigation-fluid-transitions';
// import { createAppContainer } from 'react-navigation';
import {
    createBottomTabNavigator,
    createStackNavigator,
    // createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/components/Home';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppIconSize} from 'styles';
import Content from './src/components/Listings/Item/Content/Content';
import Comments from './src/components/Listings/Item/Comment/Comment';
import Gallery from './src/components/Listings/Item/Gallery/Gallery';
import Dashboard from './src/components/User/Dashboard';
// import EditProfile from './src/components/Users/EditProfile/EditProfile';
import UserRouter from './src/components/Users/User/UserRouter';
import ListingBooking from './src/components/Listings/Item/Booking/Booking';
// import Booking from './src/components/Users/ListingBooking/Booking';
import ListingOfCat from './src/components/Listings/ListingOfCat/ListingsOfCat';
import MapsView from './src/components/Map/MapsView';
import SearchScreen from './src/components/Listings/Search/SearchScreen';
import { AppFontSmall } from './src/styles';
import Working from './src/components/Listings/Item/Working/Working';
import ReplyComment from './src/components/Listings/Item/ReplyComment/ReplyComment';
import Loading from './src/components/Screen/Loading/Loading';
import SearchPriceRange from './src/components/Listings/Search/Item/SearchPriceRange';
import SearchOrderBy from './src/components/Listings/Search/Item/SearchOrderBy';
import PostContent from './src/components/Posts/Item/Content/Content';
import PostComment from './src/components/Posts/Item/Comment/Comment';
import PostGallery from './src/components/Posts/Item/Gallery/Gallery';
import Contacts from './src/components/Users/Chat/Contacts/Contacts';
import ChatReply from './src/components/Users/Chat/ChatReply/ChatReply';
import I18n from './src/language/I18n'
import Container from './src/components/Listings/Item/HocContainer/Container';
//Navigation and store Redux
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './src/store/configureStore'
import Cart from './src/components/Screen/Cart';
import ListingItem from './src/components/ListingItem';
import Checkout from './src/components/Checkout';
import PaymentPayPal from './src/components/Inners/PaymentPaypal';
import SideMenu from './src/components/Inners/SideMenu';
import ListingComment from './src/components/ListingComment';
import ListingSearch from './src/components/ListingSearch';
import Cats from './src/components/Listing/Cats';
import Tags from './src/components/Listing/Tags';
import SearchResult from './src/components/Listing/SearchResult';
import PostItem from './src/components/Post/PostItem';
import Maps from './src/components/Listing/Maps';
import ListingPage from './src/components/ListingPage';
import FilterListing from './src/components/Inners/FilterListing';
import UserBookmark from './src/components/User/UserBookmark';
import ChangePassword from './src/components/User/ChangePassword';
import EditProfile from './src/components/User/EditProfile';
import UserBooking from './src/components/User/UserBooking';
import ForgotPassword from './src/components/User/ForgotPassword';
import Login from './src/components/User/Login';
import Register from './src/components/User/Register';
import PostPage from './src/components/Post/PostPage';
// const store = configureStore();
console.log('here');
export default class MyApp extends Component {
    render() {
        return (
            <View>
                <Text>Hello app</Text>
            </View>
    );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    backIcon:{
        ...Platform.select({
            ios:{
                marginLeft: 10,
            }
        })
    }
})


const DashboardScreen = createStackNavigator(
    {
        Dashboard:{
            screen:Dashboard
        },
        EditProfile:{
            screen:EditProfile
        },
        ChangePassword:{
            screen:ChangePassword
        },
        Booking:{
            screen:UserBooking
        },
        Bookmark:{
            screen:UserBookmark
        },
        Contacts:{
            screen:Contacts,
        },
    },
    {
        navigationOptions:{
            initialRouteName:'Dashboard',
            header:null
        }
    }
)
const UserScr = createStackNavigator(
    {
        UserRouter:UserRouter,
        DashboardScreen:DashboardScreen,

    },
    {
        navigationOptions:{
            header:null,

        },
        // backBehavior:initialRoute
    }
)

const listingItemTab = createBottomTabNavigator({
        Content:{
            screen:Content,
            navigationOptions:{
                tabBarLabel:I18n.t('content')
            }
        },
        Comments:{
            screen:Comments,
            navigationOptions:{
                tabBarLabel:I18n.t('comments')
            }
        },
        Gallery:{
            screen:Gallery,
            navigationOptions:{
                tabBarLabel:I18n.t('gallery')
            }
        },
        Working:{
            screen:Working,
            navigationOptions:{
                tabBarLabel:I18n.t('working')
            }
        },
        Booking:{
            screen:ListingBooking,
            navigationOptions:{
                tabBarLabel:I18n.t('booking')
            }
        },
    },
    {
        initialRouteName:'Content',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = ''
                if (routeName === 'Content') {
                    icon = 'file-document-box-outline'
                } else if (routeName === 'Comments') {
                    icon = 'comment-multiple-outline'
                }else if(routeName === 'Gallery'){
                    icon = 'image-filter'
                }else if(routeName==='Working'){
                    icon='clock-outline'
                }
                else{
                    icon = 'calendar-check'
                }
                return <IconM name={icon} size={17} color={tintColor}/>
            },
        }),
        tabBarOptions:{
            activeTintColor:'#4DB7FE',
            labelStyle: {
                fontSize: AppFontSmall,
                // fontFamily:'Quicksand',
            },
            style: {
                backgroundColor: '#fff',
                borderTopColor:'#eee',
                borderTopWidth:1,
                height:35
            },
        }
    }
)


// new bottom navigation
const HomeTab = createBottomTabNavigator(
    {
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                tabBarLabel:I18n.t('home')
            }
        },
        ListingPage:{
            screen: ListingPage,
            // navigationOptions:{
            //     tabBarLabel:I18n.t('listing')
            // }
        },
        Post:{
            screen: PostPage,
            navigationOptions:{
                tabBarLabel:I18n.t('post')
            }
        },
        Map:{
            screen: MapsView,
            navigationOptions:{
                tabBarLabel:I18n.t('map')
            }
        },
        User:{
            screen: UserScr,
            navigationOptions:{
                tabBarLabel:I18n.t('user')
            }
        },
    },
    {
        // contentComponent:SideMenu,
        // drawerWidth: 50,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                var icon = '';
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    icon = 'home';
                    return <AntDesign name={icon} size={AppIconSize} color={tintColor} />
                }else if (routeName === 'ListingPage'){
                    icon = 'enviromento';
                    return <AntDesign name={icon} size={AppIconSize} color={tintColor} />
                }
                else if (routeName === 'User') {
                    icon = 'user';
                    return <AntDesign name={icon} size={AppIconSize} color={tintColor} />
                }else if (routeName === 'Map'){
                    icon = 'map';
                    return <Icon name={icon} size={AppIconSize} color={tintColor} />
                }
                else if (routeName=== 'Post') icon='pin'; return <IconM name={icon} size={19} color={tintColor}/>
            },
        }),
        tabBarOptions:{
            activeTintColor:'#4DB7FE',
            // labelStyle: {
            //     fontSize: AppFontSmall,
            //     fontFamily:'Quicksand',
            // },
            showLabel:false,
            // style: {
            //         backgroundColor: '#fff',
            //         borderTopColor:'#eee',
            //         borderTopWidth:1,
            //         height:35
            //     },
        },
    }
);
const AppStackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeTab,
        },
        Container:{
            screen: Container
        },
        Loading:{
            screen: Loading,
        },
        Cart:{
            screen: Cart,
        },
        // PostPage:{
        //     screen: PostPage,
        // },
        PostItem:{
            screen: PostItem,
        },
        Maps:{
            screen: Maps,
        },
        ListingTab:{
            screen: listingItemTab,
        },
        ListingComment:{
            screen:ListingComment
        },
        ListingOfCat:{
            screen: ListingOfCat
        },
        Search:{
            screen: SearchScreen,
        },
        ListingSearch:{
            screen:ListingSearch
        },
        Cats:{
            screen: Cats,
        },
        Tags:{
            screen: Tags,
        },
        SearchResult:{
            screen: SearchResult,
        },
        SearchPriceRange:{
            screen: SearchPriceRange,
        },
        SearchOrderBy:{
            screen: SearchOrderBy,
        },
        ReplyComment:{
            screen: ReplyComment
        },
        ChatReply:{
            screen: ChatReply,
        },
        Checkout:{
            screen: Checkout
        },
        ListingItem:{
            screen: ListingItem,
        },
        PaymentPayPal:{
            screen: PaymentPayPal
        },
        FilterListing:{
            screen:FilterListing
        },
        Login:{
            screen:Login
        },
        ForgotPassword:{
            screen:ForgotPassword
        },
        Register:{
            screen:Register
        },

    },
    {
        initialRouteName: 'Loading',
        navigationOptions:{
            // headerTintColor: '#4DB7FE',
            // headerStyle: {
            //     height:35,
            //     backgroundColor: '#fff',
            //     shadowOpacity: 0,
            //     elevation: 0,
            //     borderBottomWidth:1,
            //     borderBottomColor:'#eee'
            // },
            // headerBackImage:<Icon name='arrow-left' size={AppIconLarge} color='#fff' style={styles.backIcon}  />
            header:null,
            gesturesEnabled:false
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 350,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps
                const { index } = scene

                const width = layout.initHeight
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                })

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                })

                return { opacity, transform: [{ translateX }] }
            },
        }),
    }
);

