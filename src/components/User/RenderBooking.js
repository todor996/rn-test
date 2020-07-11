import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';
import {connect } from 'react-redux';
import {getListingItem} from 'actions/ListingActions';
import {getLbooking,cancelLbooking} from 'actions/UserActions';
import { Appcolor, AppFontSize } from 'styles';
import NavigationService from 'helpers/NavigationService';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import { H3 } from '../../styles';
import { ReplaceLink, Overlay } from '../App';
import Swipeout from 'react-native-swipeout'

class RenderBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing_item:{}
        };
    }
    UNSAFE_componentWillMount(){
        //Get data listing item
        this.props.getListingItem(this.props.item.meta.listing_id[0],(data)=>{
            this.setState({listing_item:data})
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        //When user cancel lbooking success
        if(nextProps.canLbooking!==this.props.canLbooking && nextProps.canLbooking===true ){
            // //console.log('Change')
            this.props.getLbooking(this.props.user.ID);
        }
    }
    _onPress = ()=>{
        //cancel lbooking click
        
        Alert.alert(
            'Citybook say',
            `Are you sure you want to cancel ${this.props.item.post_title} ?`,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.props.cancelLbooking(this.props.item.ID)},
            ],
        )
    }
    render() {
        let item = this.props.listing_item;
        //console.log("Render Item ",this.props)
        //console.log("Render Item ",this.state)
        return (
                <View style={styles.container}>
                    <TextApp style={[styles.text,styles.title]}>{this.props.item.post_title}</TextApp>
                    <View style={styles.content}>
                        <TextApp style={[styles.text]}>{I18n.t('listingItem')}:</TextApp>
                        <TextApp style={[styles.txt]} onPress={()=>NavigationService.navigate('ListingTab',item)} >{this.props.listing_item.title}</TextApp>
                    </View>
                    <View style={styles.content}>
                        <TextApp style={[styles.text]}>{I18n.t('persons')+':'}</TextApp>
                        <TextApp style={[styles.txt]} >{this.props.item.meta.lb_quantity[0]}</TextApp>
                    </View>
                    <View style={styles.content}>
                        <TextApp style={[styles.text]}>{I18n.t('date')}:</TextApp>
                        <TextApp style={[styles.txt]} >{`${this.props.item.meta.lb_date[0]} at ${this.props.item.meta.lb_time[0]}`}</TextApp>
                    </View>
                    <View style={styles.content}>
                        <TextApp style={[styles.text]}>{I18n.t('mail')}:</TextApp>
                        <TextApp style={[styles.txt]} >{this.props.item.meta.lb_email[0]}</TextApp>
                    </View>
                    <View style={styles.content}>
                        <TextApp style={[styles.text]}>{I18n.t('phone')}:</TextApp>
                        <TextApp style={[styles.txt]} >{this.props.item.meta.lb_phone[0]}</TextApp>
                    </View>
                    <TouchableOpacity onPress={this._onPress} style={styles.touch}>
                        <TextApp style={[styles.txtCancel]} >{I18n.t('cancel')}</TextApp>
                    </TouchableOpacity>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#fff',
        // marginBottom:0,
        // // height:100,s
        // // padding:10,
        // borderWidth:1,
        // borderColor:'#eee',
        // // alignItems: 'center',
        // // flexDirection:'row'
        // // borderRadius:2
        margin:10,
        backgroundColor:'#fff',
        marginBottom:0,
        padding:10,
        borderWidth:1,
        borderColor:'#f5f5f8',
        borderRadius:2
    },
    swipeout:{
        overflow: 'hidden',
        marginHorizontal: 20,
        marginVertical: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    text:{
        paddingBottom: 5,
    },
    title:{
        fontSize:H3,
        color:'#000',
        // marginBottom:50
        // position:'absolute'
    },
    content:{
        flexDirection: 'row',
    },
    txt:{
        color:Appcolor,
        marginLeft:5
    },
    touch:{
        padding:10,
        backgroundColor:'#5ECFB1',
        borderRadius:20,
        alignSelf: 'flex-start',
        paddingLeft:18,
        paddingRight:18,
        marginTop:10
    },
    txtCancel:{
        color:'#fff'
    },
    content:{
        flexDirection: 'row',
    }
})
function mapStateToProps(state){
    return{
        listing_item:state.listings.item,
        canLbooking:state.users.cancelLbooking,
        user:state.users.userData.data
    }
}

function mapDispatchToProps(dispatch) {
	return {
        getListingItem:(id,callback)=>dispatch(getListingItem(id,callback)),
        cancelLbooking:(id)=>dispatch(cancelLbooking(id)),
        getLbooking:(id)=>dispatch(getLbooking(id))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderBooking)