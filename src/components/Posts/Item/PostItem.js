
import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Appcolor } from 'styles';
import Content from './Inner/Content';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let {item} = this.props.navigation.state.params
        return (
            <SafeAreaView style={styles.safeView}>
                <ScrollView style={styles.container}>
                    <Content item={item} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    }
})
