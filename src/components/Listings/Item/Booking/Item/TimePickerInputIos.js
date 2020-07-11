import React, { Component } from 'react';
import { 
    View, 
    Modal,
    SafeAreaView,
    StyleSheet,
    DatePickerIOS,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {TextApp} from 'App'
import I18n from 'language/I18n'
import { AppFontSize } from 'styles';

const {width} = Dimensions.get('window')
export default class TimePickerInputIos extends Component {
    onTimeChange = (time)=>{
        let newTime = false
        if (time)
            newTime = new Date(time)
        else
            newTime = new Date()
        let chooseTime = {
            hour: newTime.getHours(),
            minute: newTime.getMinutes(),
        }
        this.props.changeTime(chooseTime)
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.timeModalVisible}
                onRequestClose={()=> {}}
            >
                <SafeAreaView style={styles.safeView}>
                    <View style={styles.container}>
                        <View style={styles.picker}>
                            <View style={styles.header}>
                                <TextApp>{I18n.t('pickATime')}</TextApp>
                            </View>
                            <DatePickerIOS 
                                mode='time'
                                onDateChange = {this.onTimeChange}
                                date={new Date(this.props.time)}
                            />
                            <TouchableOpacity style={styles.confirm} onPress={this.props.closeTimePickerIos}>
                                <TextApp style={styles.textConfirm} >{I18n.t('confirm')}</TextApp>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={this.props.closeTimePickerIos} style={styles.cancel} >
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
        flex:1
    },
    header:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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