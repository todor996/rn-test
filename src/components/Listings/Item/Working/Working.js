import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import { Appcolor, AppFontMedium, AppIconSize, AppIconLarge } from 'styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TextApp} from 'App';
import Container from '../HocContainer/Container';
import R from 'ramda'
import I18n from 'language/I18n'
import HocContainer from '../HocContainer/HocContainer';

export default class Working extends Component {
    _renderWorking = ()=>{
        let result = [];
        let item = this.props.navigation.state.params;
        let working = {};
        for(let key in item._cth_working_hours){
            if(key!=='timezone') working[key] = {};
            if(item._cth_working_hours[key]['static']==='enterHours'){
                for(let hour in item._cth_working_hours[key].hours[0]){
                    working[key][hour] = item._cth_working_hours[key].hours[0][hour]
                }
            }
        }
        //console.log(working)
        Object.keys(working).sort();
        for(let key in working){
            if(!R.isEmpty(working[key])){
                result.push(
                    <View style={styles.item} key={key}>
                        <TextApp style={styles.day} >{key}</TextApp>
                        <View style={styles.hour}>
                            <TextApp style={styles.openClose} >{`${working[key].open} - `}</TextApp>
                            <TextApp style={styles.openClose} >{`${working[key].close}`}</TextApp>
                        </View>
                    </View>
                )
            }else{
                result.push(
                    <View style={styles.item} key={key}>
                        <TextApp style={styles.day}>{key}</TextApp>
                        <View style={styles.hour}>
                            <TextApp style={[styles.dayOff]}>{I18n.t('dayOff')}</TextApp>
                        </View>
                    </View>
                )
            }
        }
        return result
    }
    RenderWorking = ()=>{
        let item = this.props.navigation.state.params;
        return(
            Object.keys(item._cth_working_hours).length!==0?
                <View style={styles.workingHour} >
                    <View style={styles.firstItem} >
                        <Icon name='calendar-multiple-check' size={AppIconLarge} color={Appcolor} style={styles.icon} />
                        <TextApp style={[styles.text]} >{item.statusText}</TextApp>
                    </View>
                    {this._renderWorking()}
                </View>
            :null
        )
    }
    render() {
        let item = this.props.navigation.state.params;
        //console.log("Working",item)
        let Render = HocContainer(this.RenderWorking)
        return (
            <Render item={item} />
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    workingHour:{
        margin:10,
        backgroundColor:'#fff',
        marginBottom:0,
        borderWidth:1,
        borderColor:'#eee',
        borderBottomWidth:0,
        zIndex:10
    },
    day:{
        color:'#878C9F',
        fontSize:AppFontMedium,
    },
    openClose:{
        color:'#878C9F',
        fontSize:AppFontMedium,
    },
    hour:{
        flexDirection:'row',
        position:'absolute',
        right:15,
    },
    item:{
        padding:10,
        borderBottomWidth:1,
        borderColor:'#eee',
        justifyContent:'center',
    },
    firstItem:{
        height:50,
        borderBottomWidth:1,
        borderColor:'#eee',
        paddingLeft:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        overflow:'hidden',
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:AppFontMedium,
        color:'#334e6f',
        paddingLeft:5,
        fontWeight:'500'
    },
    dayOff:{
        color:'red'
    }
})