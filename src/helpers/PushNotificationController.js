
import React, { Component } from 'react';
// import OneSignal from 'react-native-onesignal'
import Constants from 'constants'

export default class PushNotificationController extends Component {

constructor(properties) {
        super(properties);
        // OneSignal.init(Constants.OneSignal.oneSignalAppId);

        // OneSignal.addEventListener('received', this.onReceived);
        // OneSignal.addEventListener('opened', this.onOpened);
        // OneSignal.addEventListener('ids', this.onIds);
        // OneSignal.inFocusDisplaying(2)
    }

    componentWillUnmount() {
        // OneSignal.removeEventListener('received', this.onReceived);
        // OneSignal.removeEventListener('opened', this.onOpened);
        // OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        //console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        //console.log('Message: ', openResult.notification.payload.body);
        //console.log('Data: ', openResult.notification.payload.additionalData);
        //console.log('isActive: ', openResult.notification.isAppInFocus);
        //console.log('openResult: ', openResult);
    }

    onIds(device) {
        //console.log('Device info: ', device);
    }
    render(){
        return null
    }
}