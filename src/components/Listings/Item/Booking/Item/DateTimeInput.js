

import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {TextApp} from '../../../..//App';
import {FormContext} from '../Booking'
import { Appcolor, AppIconLarge } from '../../../../../styles';

export default class DateTimeInput extends Component {
    render() {
        return (
            <FormContext.Consumer>
                {
                    context=>(
                        <View style={styles.container}>
                        
                            <View style={styles.flex05}>
                                <View style={styles.dateTime}>
                                    <Icon name='calendar-check' color={Appcolor} size={AppIconLarge} style={styles.iconDateTime} />
                                    <TouchableOpacity 
                                        onPress={
                                            Platform.OS === 'ios'
                                            ?   this.props.openDatePickerIos
                                            :   context.showDatePicker
                                        } 
                                        style={styles.touchDateTime} 
                                    >
                                        <TextApp style={[styles.txtDateTime]}>{`${context.date.day}/${context.date.month}/${context.date.year}`}</TextApp>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.flex05}>
                                <View style={styles.dateTime}>
                                    <Icon name='clock' color={Appcolor} size={AppIconLarge} style={styles.iconDateTime} />
                                    <TouchableOpacity 
                                        onPress={
                                            Platform.OS === 'ios'
                                            ?   this.props.openTimePickerIos
                                            :   context.showTimePicker
                                        } 
                                        style={styles.touchDateTime}
                                    >
                                        <TextApp style={[styles.txtDateTime]}>{`${context.time.hour }:${ context.time.minute}`}</TextApp>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }
            </FormContext.Consumer>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop:20,
        paddingBottom:20
    },
    flex05:{
        flex:0.5
    },
    dateTime:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    touchDateTime:{
        padding:10,
        width:120,
        height:40,
        backgroundColor:'#f0f0f3',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
    },
    txtDateTime:{
        color:'#666',
    },
    iconDateTime:{
        position:'absolute',
        zIndex:1,
        left:10
    }
})
