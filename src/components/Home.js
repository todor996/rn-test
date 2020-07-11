import React, { Component} from 'react';
import { 
    StyleSheet,
    ScrollView,
} from 'react-native';
import Page from './Page/Page';
import PushNotificationController from 'helpers/PushNotificationController';
import HeaderDrawer from './Inners/HeaderDrawer';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // console.log("Home",this.props)
        return (
            <ScrollView style={styles.container} 
                showsVerticalScrollIndicator={false}
            >
                <HeaderDrawer {...this.props} style={styles.header} />
                <Page  />
                <PushNotificationController />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#f0f0f3'
        backgroundColor:'#f9f9f9'
    },
    header:{
        position: 'absolute',
    }
});