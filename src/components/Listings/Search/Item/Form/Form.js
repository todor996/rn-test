
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import InputApp from 'App/InputApp';
import IconF from 'react-native-vector-icons/Feather'
import {TextApp} from 'App';
import NavigationService from 'helpers/NavigationService';
import I18n from 'language/I18n'
import { AppFontMedium, AppIconSize } from 'styles';
import { AppFontSize } from '../../../../../styles';

export default class Form extends Component {
    _onPress = ()=>{
        NavigationService.navigate('SearchCat')
    }
    _handleClick = ()=>{
        NavigationService.navigate('SearchTag')
    }
    _handleChoosePriceClick = ()=>{
        NavigationService.navigate('SearchPriceRange')
    }
    _handleChooseSortByClick = ()=>{
        NavigationService.navigate('SearchOrderBy')
    }
    render() {
        //console.log("FORM",this.props)
        return (
            <View style={styles.container} >
                <View style={styles.s} >
                    <InputApp placeholder={I18n.t('whereAreYouLookingFor')} name={this.props.name} onChangeText={this.props.onChangeText} style={styles.input} />
                    {/* <IconF name='search' size={AppIconSize} color={'grey'} style={styles.iconSearch} /> */}
                </View>
                <View style={styles.cat}>
                    <TouchableOpacity onPress={this._onPress} style={styles.touch}>
                        <TextApp style={styles.text} >{this.props.cat===''?I18n.t('category'):this.props.cat}</TextApp>
                        <IconF name='chevron-down' size={AppIconSize} color={'grey'} style={styles.iconSearch}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._handleChoosePriceClick} style={styles.touch}>
                        <TextApp style={styles.text} >{this.props.priceRange!==''?this.props.priceRange:I18n.t('priceRange')}</TextApp>
                        <IconF name='chevron-down' size={AppIconSize} color={'grey'} style={styles.iconSearch}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._handleChooseSortByClick} style={styles.touch}>
                        <TextApp style={styles.text} >{this.props.orderBy===''?I18n.t('orderBy'):this.props.orderBy}</TextApp>
                        <IconF name='chevron-down' size={AppIconSize} color={'grey'} style={styles.iconSearch}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._handleClick} style={styles.touch}>
                        <TextApp style={styles.text} >{I18n.t('tags')}</TextApp>
                        <IconF name='chevron-down' size={AppIconSize} color={'grey'} style={styles.iconSearch}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1
    },
    input:{
        fontSize:AppFontSize,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    iconSearch:{
        position:'absolute',
        alignSelf:'flex-end'
    },
    s:{
        justifyContent:'center'
    },
    touch:{
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        justifyContent:'center',
        height:30,
        marginTop: 10,
    },
    text:{
        fontSize:AppFontSize
    }
})