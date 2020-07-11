import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
 } from 'react-native';
import Page from '../Page/Page';
import { Appcolor } from 'styles';
import PushNotificationController from 'helpers/PushNotificationController';
import Header from './Inners/Header';
export default class HomeScreen extends Component {
    render() {
        //console.log("HOME",this.props)
        return (
            // <SafeAreaView style={styles.safeView} >
                <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
                    <Header {...this.props}  />
                    {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false} > */}
                        <Page  />
                        <PushNotificationController />
                        <Test />
                    {/* </ScrollView> */}
                </ScrollView>
            // </SafeAreaView>
        );
    }
}
  
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f3'
        // backgroundColor:'#f9f9f9'
    },
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    }
});

