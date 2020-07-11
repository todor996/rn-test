
import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    Image
} from 'react-native';
import MainStyles, { Appcolor, AppFontSize } from '../../../../styles';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

const tagsStyles = {
    p:{
        fontSize:AppFontSize,
        // fontFamily:'Quicksand',
        color:'#878C9F',
    }
}
export default class FeatureBox extends Component {
    static defaultProps = {
        setting:{
            title: "24 Hours Support", 
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipisc…lobortis pulvinar. Donec a consectetur nulla.</p>", 
            icon: "fa fa-meetup"
        }
    }
    render() {
        //console.log("Feature Box",this.props)
        let {setting} = this.props;
        return (
            <View style={styles.container} >
                <View style={styles.icon}>
                    <Icon name={setting.icon.replace('fa fa-','')} color={Appcolor} size={40} />
                    <Image source={require('../../../../img/clouds.png')} style={styles.after} />
                </View>
                <View style={styles.content}>
                    <Text style={[MainStyles.text,styles.title]} > {setting.title} </Text>
                    <HTML html={setting.content} tagsStyles={tagsStyles} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        paddingTop:35,
        paddingBottom:35
    },
    title:{
        fontSize:AppFontSize,
        color: Appcolor,
        fontWeight:'500',
        paddingBottom:10
    },
    icon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:0.8
    },
    after:{
        position:'absolute',
        height:70,
        width:70,
        resizeMode:'contain',
        zIndex:-1,
        left:10,
        top:20
    }
})