

import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import {Appcolor, AppFontMedium, AppIconMedium} from 'styles';
import Icon from 'react-native-vector-icons/Feather'
import {TextApp} from 'App';
import NavigationService from 'helpers/NavigationService';
import I18n from 'language/I18n'

export default class Search extends React.PureComponent {
    _onPress = ()=>{
        NavigationService.navigate('Search')
    }
    render() {
        //console.log("Search",this.props)
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.touch} onPress={this._onPress} activeOpacity={1} >
                    <Icon name='search' size={AppIconMedium} color='#fff' />
                    <TextApp style={styles.text} >{I18n.t('search')}</TextApp>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Appcolor,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        // paddingHorizontal: 10,
        width:'80%'
    },
    touch:{
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        fontSize:AppFontMedium,
        color:'#fff',
        paddingLeft:5
    }
})

