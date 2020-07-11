
import React, { Component } from 'react'
import { 
    View,
    TimePickerAndroid,
    DatePickerAndroid,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native'
import CustomUSerInput from './Item/CustomUserInput'
import PersonInput from './Item/PersonInput'
import DateTimeInput from './Item/DateTimeInput'
import InputApp from 'App/InputApp'
import {TextApp} from 'App'
import {booking} from 'actions/ListingActions'
import {connect} from 'react-redux'
import R from 'ramda'
import { Appcolor, AppIconLarge } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import I18n from 'language/I18n'
import DatePickerIosInput from './Item/DatePickerIosInput';
import TimePickerInputIos from './Item/TimePickerInputIos';
import HocContainer from '../HocContainer/HocContainer';

export const FormContext = React.createContext()
class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                
            },
            person:1,
            date:{
                day: 24,
                month: 8,
                year: 2018,
            },
            time:{
                hour: 20,
                minute: 40,
            },
            dateModalVisible:false,
            timeModalVisible:false,
            onChangeText:(text,name)=>{
                this.setState({
                    [name]:text
                })
            },
            addPerson:()=>{
                // person + 1
                this.setState({person:this.state.person+1})
            },
            removePerson:()=>{
                // person - 1
                if(this.state.person===1){
                    this.setState({person:1})
                }else{
                    this.setState({person:this.state.person-1})
                }
            },
            showDatePicker:()=>{
                //Show date picker, set Date
                DatePickerAndroid.open().then(result=>{
                    // //console.log("DATE",result);
                    if(result.action!=='dismissedAction'){
                        this.setState({date:result})
                    }else{
                        this.setState({date:{
                                day: 24,
                                month: 8,
                                year: 2018,
                            }
                        })
                    }
                })
            },
            showTimePicker:()=>{
                //Show time picker, set Time 
                TimePickerAndroid.open({is24Hour:true}).then(result=>{
                    // //console.log("TIME",result);
                    this.setState({time:result})
                    if(result.action!=='dismissedAction'){
                        this.setState({time:result})
                    }else{
                        this.setState({time:{
                                hour: 20,
                                minute: 40,
                            }
                        })
                    }
                })
            }
        }
    }
    openDatePickerIos = ()=>{
        this.setState({dateModalVisible:true})
    }
    closeDatePickerIos = ()=>{
        this.setState({dateModalVisible:false})
    }
    openTimePickerIos = ()=>{
        this.setState({timeModalVisible:true})
    }
    closeTimePickerIos = ()=>{
        this.setState({timeModalVisible:false})
    }
    changeTime = (time)=>{
        this.setState({time})
    }
    changeDate = (date)=>{
        this.setState({date})
    }
    handleBookingPress = ()=>{
        let item = this.props.navigation.state.params
        //Click button booking
        let data = {
            title:item.title,
            listingId:item.id
        }
        data.meta_fields = {
            'lb_date'           :   `${this.state.date.month}/${this.state.date.day}/${this.state.date.year}`,
            'lb_time'           :   `${this.state.time.hour}:${this.state.time.minute}`,
            'lb_quantity'       :   this.state.person,
            'lb_booking_type'   :   'text',
            'lb_add_info'       :   this.state.description?this.state.description:''
        };
        if(!R.isEmpty(this.props.users)){
            data.meta_fields['lb_name'] = this.props.users.data.display_name;
            data.meta_fields['lb_email'] = this.props.users.data.user_email;
            data.meta_fields['lb_phone'] = this.props.users.data.meta._cth_phone?this.props.users.data.meta._cth_phone[0]:0;
            data.meta_fields['user_id'] = this.props.users.ID;
            this.props.booking(data);
        }else{
            //Validate form using Promise return promise
            var validateForm =  new Promise((resolve,reject)=>{
                if(this.state.name&&this.state.email&&this.state.phone!==undefined){
                    //User enter all infomation * in the form
                    resolve();
                }else{
                    //User not enter all infomation * in the form
                    reject('Please enter all information in the form !')
                }
            })
            validateForm.then((response)=>{
                data.meta_fields['lb_name'] = this.state.name;
                data.meta_fields['lb_email'] = this.state.email;
                data.meta_fields['lb_phone'] = this.state.phone;
                data.meta_fields['user_id'] = 0 ; //user id  = 0 because user not login
                //Send action booking with data
                this.props.booking(data);
            }).catch(err=>{
                Alert.alert('', err);
            })
        }
        // //console.log(data);
    }
    componentDidUpdate(prevProps){
        if(this.props.bookingListing!==prevProps.bookingListing){
            this.props.bookingListing!==0? Alert.alert('','Booking Success'):null
        }
    }
    RenderBooking = ()=>{
        
        return(
            <FormContext.Provider value={this.state} >
                <View style={styles.container} >
                    <View style={styles.booking}>
                        <Icon name='calendar-check' size={AppIconLarge} color={Appcolor} />
                        <TextApp style={styles.textTitle} >{I18n.t('booking')}</TextApp>
                    </View>
                    <View style={styles.form}>
                        {
                            R.isEmpty(this.props.users)
                            ?   <CustomUSerInput />
                            :   null
                        }
                        <PersonInput />
                        <DateTimeInput 
                            openDatePickerIos={this.openDatePickerIos} 
                            openTimePickerIos={this.openTimePickerIos}
                        />
                        <InputApp 
                            name='description' 
                            onChangeText={this.state.onChangeText} 
                            style={styles.txtDescription}
                            multiline={true}
                            placeholder='Additional Information:'
                        />
                    </View>
                    <TouchableOpacity onPress={this.handleBookingPress} style={styles.touchBooking} >
                        <TextApp style={styles.touchTitle} >{I18n.t('booking')}</TextApp>
                    </TouchableOpacity>
                    {
                        Platform.OS==='ios' 
                        ?   <DatePickerIosInput 
                                changeDate={this.changeDate} 
                                dateModalVisible={this.state.dateModalVisible} 
                                closeDatePickerIos={this.closeDatePickerIos} 
                                date={this.state.date}
                            />
                        :   null
                    }
                    {
                        Platform.OS==='ios'
                        ?   <TimePickerInputIos 
                                changeTime={this.changeTime}
                                timeModalVisible={this.state.timeModalVisible}
                                closeTimePickerIos = {this.closeTimePickerIos}
                                time={this.state.time}
                            />
                        :   null
                    }
                </View>
            </FormContext.Provider>
        )
    }
    render() {
        let item = this.props.navigation.state.params
        //console.log("FORM Props",this.props)
        //console.log("FORM State",this.state)
        let Render = HocContainer(this.RenderBooking)
        return (
            <Render item={item} />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    form:{
        padding:10,
        backgroundColor:'#fff'
    },
    txtDescription:{
        paddingBottom:100,
        backgroundColor:'#f0f0f3',
        paddingLeft:10,
        color:'#666'
    },
    touchBooking:{
        height:40,
        backgroundColor:Appcolor,
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    touchTitle:{
        color:'#fff',
        fontWeight:'500'
    },
    booking:{
        flexDirection:'row',
        height:50,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f3',
        backgroundColor:'#fff'
    },
    textTitle:{
        color:'#334e6f',
        paddingLeft:5,
        fontWeight:'500'
    }
})

function mapStateToProps(state){
    return{
        users:state.users.userData.data,
        loading:state.loading,
        bookingListing:state.listings.booking
    }
}
function mapDispatchToProps(dispatch){
    return{
        booking:(data)=>dispatch(booking(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Booking);