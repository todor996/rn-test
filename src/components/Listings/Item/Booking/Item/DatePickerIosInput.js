
import React, { Component } from 'react';
import { 
    Modal,
    DatePickerIOS,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {TextApp} from '../../../..//App';
import I18n from 'language/I18n'
import { AppFontSize } from '../../../../../styles';

const {width} = Dimensions.get('window')
export default class DatePickerIosInput extends Component {
    onDateChange = (date)=>{
        let newDate = false
        if (date)
            newDate = new Date(date)
        else
            newDate = new Date()
        let chooseDate = {
            day: newDate.getDate(),
            month: parseInt(newDate.getMonth()+1),
            year: newDate.getFullYear()
        }
        this.props.changeDate(chooseDate)
    }
    
    render() {
        return (
            <Modal 
                animationType="slide"
                transparent={true}
                visible={this.props.dateModalVisible}
                onRequestClose={()=> {}}
            >
                <SafeAreaView style={styles.safeView}>
                    <View style={styles.container}>
                        <View style={styles.picker}>
                            <View style={styles.header}>
                                <TextApp>{I18n.t('pickADate')}</TextApp>
                            </View>
                            <DatePickerIOS 
                                mode='date'
                                onDateChange = {this.onDateChange}
                                date={new Date(this.props.date)}
                            />
                            <TouchableOpacity style={styles.confirm} onPress={this.props.closeDatePickerIos}>
                                <TextApp style={styles.textConfirm} >{I18n.t('confirm')}</TextApp>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            onPress={this.props.closeDatePickerIos} 
                            style={styles.cancel} 
                        >
                            <TextApp style={styles.textConfirm} >{I18n.t('cancel')}</TextApp>
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    safeView:{
        flex:1
    },
    container:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex:1,
        
    },
    picker:{
        backgroundColor:'#fff',
        height:320,
        position: 'absolute',
        bottom:80,
        zIndex:10,
        width:width-20,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    confirm:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    textConfirm:{
        fontWeight:'500',
        fontSize:AppFontSize
    },
    cancel:{
        width:width-20,
        height:50,
        position: 'absolute',
        bottom:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        alignSelf:'center',
        borderRadius:10
    }
})
