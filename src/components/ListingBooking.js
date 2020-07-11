import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import { AppFontSize, AppFontFamily } from 'styles';
import {TextApp} from 'App';
import {connect} from 'react-redux'
import R from 'ramda'
import LinearGradient from 'react-native-linear-gradient';
import I18n from 'language/I18n'
import {addBooking} from 'actions/UserActions'
import NavigationService from '../helpers/NavigationService';

class ListingBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date:'',
            time:'',
        };
    }
    booking = ()=> {
        if(!R.isEmpty(this.props.user||this.props.user!==undefined)){
            this.setState({ isDateTimePickerVisible: true })
        }else{
            NavigationService.navigate('Login','ListingBooking')
            //console.log("Click")
        }
    }
    closeModal = ()=>{
        this.setState({modalVisible:false})
    }
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
    _handleDatePicked = (dateTime) => {
        //console.log(dateTime)
        let date = new Date(dateTime)
        let data = {
            'listing_id':this.props.item.id,
            'user_id'   : this.props.user.ID,
            'lb_date'   : `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`, 
            'lb_time'   : `${date.getHours()}:${date.getMinutes()}`,
            'amount'    : this.props.item.price,
            'thumbnail' : this.props.item.thumbnail,
            'title'     : this.props.item.title
        }
        this.props.addBooking(data)
        //console.log(data)
        this._hideDateTimePicker();
    }
    componentDidUpdate(prevProps){
        if(prevProps.booking!==this.props.booking){
            setTimeout(()=>{
                NavigationService.navigate('Checkout')
            },500)
        }
    }
    render() {
        //console.log("Listing booking",this.props)
        return (
            <TouchableOpacity style={styles.container} onPress={this.booking} activeOpacity={1} >
                <LinearGradient colors={['#9ff9ac','#35c74a' ]} style={styles.ctnIcon} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
                    <TextApp style={styles.book} >{I18n.t('book')}</TextApp>
                </LinearGradient>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='datetime'
                    // confirmTextStyle={styles.text}
                    // cancelTextStyle = {styles.text}
                    titleStyle = {styles.text}
                    headerTextIOS={'Pick date & time'}
                />
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
    },
    text:{
        fontSize:AppFontSize,
        fontWeight: 'bold',
        // fontFamily: AppFontFamily,
    },
    ctnIcon:{
        borderRadius: 20,
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    book:{
        fontSize:AppFontSize,
        fontWeight: 'bold',
        color:'#fff'
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data,
        booking:state.users.booking
    }
}
function mapDispatchToProps(dispatch){
    return{
        addBooking:(data)=>dispatch(addBooking(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingBooking)