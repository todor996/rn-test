
import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import {FormContext} from '../Booking'
import InputApp from '../../../../App/InputApp';
import {TextApp} from '../../../..//App';


export default class CustomUSerInput extends Component {
    render() {
        return (
            <FormContext.Consumer>
                {(context) => (
                    <View style={styles.container} >
                        <InputApp name='name' onChangeText={context.onChangeText} style={styles.input} placeholder='Your Name *' />
                        <InputApp name='email' onChangeText={context.onChangeText} style={styles.input} placeholder='Email Address *'/>
                        <InputApp name='phone' onChangeText={context.onChangeText} style={styles.input} placeholder='Phone *'/>
                    </View>
                )}
            </FormContext.Consumer>
        )
    }
}
const styles = StyleSheet.create({
    container:{
    },
    input:{
        height:40,
        // borderWidth:1,
        // borderColor:'#eee',
        backgroundColor:'#f0f0f3',
        marginBottom:10,
        paddingLeft:10,
        color:'#666',
        borderRadius:3
    }
})
