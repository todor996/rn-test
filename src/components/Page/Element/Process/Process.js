import React from 'react';
import { 
    View, 
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appcolor, AppFontSize, AppFontMedium, AppFontXLarge } from '../../../../styles';
import {TextApp} from '../../..//App';

export default class Process extends React.PureComponent {
    render() {
        //console.log("Process",this.props)
        return (
            <View style={styles.container} >
                <View style={styles.number}>
                    <TextApp style={styles.textNumber} >{this.props.setting.step?this.props.setting.step:'01 .'}</TextApp>
                </View>
                <View style={styles.icon}>
                    <Icon name='map-o' size={30} color={Appcolor} style={{zIndex:1}} />
                    <Image source={require('../../../../img/clouds.png')} style={styles.image} />
                </View>
                <TextApp style={[styles.title]}>{this.props.setting.title?this.props.setting.title:'Find Interesting Placek'}</TextApp>
                <TextApp style={[styles.content]}>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</TextApp>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems:'center',
        padding:15,
        borderRadius:2,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginBottom:30
    },
    icon:{
        marginBottom:15,
    },
    title:{
        fontSize:AppFontSize,
        color:'#566985',
        marginBottom:5
    },
    content:{
        textAlign:'center',
        marginBottom:10,
        fontSize:AppFontMedium
    },
    image:{
        width:50,
        height:20,
        position: 'absolute',
        bottom:0
    },
    number:{
        position: 'absolute',
        left:-10,
        top:10,
    },
    textNumber:{
        fontSize:AppFontXLarge,
        fontWeight:'500',
        color:'#eee',
    }
})
