

import React from 'react'
import { 
    View,
    StyleSheet,
 } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Appcolor, AppIconMedium } from '../../../../../styles';
import {TextApp} from 'App';
import {ReplaceLink} from 'App';
import I18n from 'language/I18n'


const ItemVideo = props =>{
    return(
        <View style={styles.container} >
            <View style={styles.videoHeader}>
                <Icon name='video' size={AppIconMedium} color={Appcolor} />
                <TextApp style={styles.textTitle}>{I18n.t('video')}</TextApp>
            </View>
            <Video source={ {uri: ReplaceLink( props.url)} }  
                controls={true}
                paused={false} 
                resizeMode={'cover'}
                style={styles.video}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexWrap:'wrap',
        marginBottom:10,
        marginHorizontal:10
    },
    video:{
        width:'100%',
        height:300
    },
    videoHeader:{
        height:50,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#e7e7ed',
        paddingLeft:10
    },
    textTitle:{
        fontWeight:'500',
        color:'#334e6f',
        paddingLeft:5
    }
})
export default ItemVideo;