
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Description from './Inners/Description';
import ListingBooking from './ListingBooking';
import Tags from './Inners/Tags';
import {ReplaceLink} from './App';
import {Overlay} from './App';
import {TextApp} from './/App';
import { H3, H1 } from 'styles';
import I18n from 'language/I18n'
import DateTime from './Inners/DateTime';
import Location from './Inners/Location';
import Features from './Inners/Features';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconLarge, AppFontSize } from 'styles';
import ListingBookmark from './ListingBookmark';
import Photos from './Inners/Photos';
import ListComment from './Inners/ListComment';
import Feather from 'react-native-vector-icons/Feather'
import IconMessage from './Inners/IconMessage';
import {connect} from 'react-redux'

export default class ListingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    UNSAFE_componentWillMount(){
        
    }
    onPress = ()=>{
        this.props.navigation.goBack()
    }
    navigateToScreen = (screen)=>()=>{
        this.props.navigation.navigate(screen,this.props.navigation.state.params)
    }
    navigateToMaps = ()=>{
        let item = this.props.navigation.state.params
        this.props.navigation.navigate('Maps',item)
    }
    render() {
        //console.log("Listing Item",this.props)
        let item = this.props.navigation.state.params
        return (
            <React.Fragment>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.container}
                    // stickyHeaderIndices={[0]}
                >
                    <View style={styles.ctnImage} >
                        <Image source={{uri:ReplaceLink(item.thumbnail)}} style={styles.image} />
                        <Overlay />
                    </View>
                    <View style={styles.ctnContent}>
                        <TextApp style={styles.title}>{item.title}</TextApp>
                        <DateTime item={item} />
                        <Location item={item} />
                        <Tags item={item} />
                        <View style={styles.line} />
                        <Description item={item} />
                        <TextApp style={styles.textFeature}>{I18n.t('features')}</TextApp>
                        <View style={styles.listingFeature}>
                            <Features item={item} />
                        </View>
                        <TextApp style={styles.textFeature} >{I18n.t('photos')}</TextApp>
                        <Photos item={item} />
                        {
                            item.comments.length?<TextApp style={styles.textFeature} >{I18n.t('comments')}</TextApp>:null
                        }
                        <ListComment item={item} />
                    </View>
                </ScrollView>
                <View style={styles.action}>
                    <TouchableOpacity onPress={this.onPress} style={styles.backButton} activeOpacity={1} >
                        <Icon name='arrow-left' size={AppIconLarge} color='#fff' />
                        <TextApp style={styles.textBack} >{I18n.t('back')}</TextApp>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.commentButton} activeOpacity={1} onPress={this.navigateToScreen('ListingComment')} >
                        <FontAwesome5 name='comment' size={AppIconLarge} color={Appcolor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mapButton} activeOpacity={1} onPress={this.navigateToMaps} >
                        <Feather name='map-pin' size={AppIconLarge} color={Appcolor} />
                    </TouchableOpacity>
                    <ListingBookmark item={item} {...this.props} />
                    <ListingBooking item={item} {...this.props} />
                </View>
                <IconMessage {...this.props} />

            </React.Fragment>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    ctnContent:{
        backgroundColor:'#fff',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        zIndex:10,
        marginTop: 250,
        borderWidth: 1,
        borderColor: '#ebebf3',
        paddingBottom: 50,
    },
    textFeature:{
        fontSize:H3,
        color:'#566985',
        marginBottom: 5,
    },
    title:{
        fontSize:H1,
        color:'#566985',
        marginBottom: 10,
        fontWeight: '500',
    },
    ctnImage:{
        height:350,
        width:'100%',
        position:'absolute',
        zIndex:5
    },
    image:{
        width:'100%',
        height:350,
        resizeMode:'cover'
    },
    line:{
        height:1,
        backgroundColor:'#eee',
        marginTop:20
    },
    listingFeature:{
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    action:{
        position: 'absolute',
        bottom:15,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:Appcolor,
        borderRadius:20,
        flexDirection:'row',
        marginRight: 5,
        marginLeft: 15,
    },
    textBack:{
        fontSize:AppFontSize,
        fontWeight: 'bold',
        color:'#fff',
    },
    commentButton:{
        padding:13,
        borderRadius:30,
        backgroundColor:'#fff',
        marginRight:5,
        shadowColor: '#d2d2de',
        shadowOpacity: 1,
    },
    mapButton:{
        padding:13,
        borderRadius:20,
        backgroundColor:'#fff',
        marginRight:5,
        shadowColor: '#d2d2de',
        shadowOpacity: 1,
    }
})
