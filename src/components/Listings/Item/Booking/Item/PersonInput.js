
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {FormContext} from '../Booking'
import { Appcolor, AppIconLarge } from 'styles';
import {TextApp} from 'App';
import I18n from 'language/I18n'

export default class PersonInput extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.titleContainer} >
                    <Icon name='user-plus' size={AppIconLarge} color={Appcolor}/>
                    <TextApp style={[styles.text]} >{I18n.t("persons")}</TextApp>
                </View>
                <FormContext.Consumer >
                    {
                        (context)=>{
                            return(
                                <View style={styles.flex05}>
                                    <TouchableOpacity style={styles.viewAdd} onPress={context.removePerson}>
                                        <TextApp>-</TextApp>
                                    </TouchableOpacity>
                                    <View style={styles.viewPerson}>
                                        <TextApp style={styles.textPerson} >{context.person}</TextApp>
                                    </View>
                                    <TouchableOpacity style={styles.viewRemove} onPress={context.addPerson}>
                                        <TextApp>+</TextApp>
                                    </TouchableOpacity>                                    
                                </View>
                            )
                        }
                    }
                </FormContext.Consumer>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: 10,
    },
    flex05:{
        flex:0.5,
        flexDirection:'row',
        alignItems: 'center',
    },
    titleContainer:{
        flex:0.5,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:20
    },
    viewAdd:{
        width:40,
        height:40,
        backgroundColor:'#f0f0f3',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    viewRemove:{
        width:40,
        height:40,
        backgroundColor:'#f0f0f3',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:5,
        borderBottomRightRadius:5
    },
    viewPerson:{
        width:60,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Appcolor
    },
    textPerson:{
        color:'#fff'
    }
})
