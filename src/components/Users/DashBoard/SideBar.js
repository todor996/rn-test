import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome5'
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
  } from "native-base";
import { Appcolor, AppFontMedium, AppFontSize } from '../../../styles';
import NavigationService from 'helpers/NavigationService';
import LinearGradient  from 'react-native-linear-gradient';
import {TextApp} from 'App';
import UserAvatar from './UserAvatar';
// import ListItem from './ListItem'

export default class SideBar extends Component {
    render() {
        //console.log("Side Bar",this.props)
        return (
            <Container>
                <Content>
                <Image
                    source={{
                    uri:
                        "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
                    }}
                    style={{
                    height: 120,
                    width: "100%",
                    alignSelf: "stretch",
                    position: "absolute"
                    }}
                />
                <Image
                    square
                    style={{
                    height: 80,
                    width: 70,
                    position: "absolute",
                    alignSelf: "center",
                    top: 20
                    }}
                    source={{
                    uri:
                        "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
                    }}
                />
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        flexWrap: 'wrap',
        width:'100%'
    },
    header:{
        height:150,
        backgroundColor: Appcolor,
        width:'100%'
    },
    content:{
        marginTop: 10,
    },
    userName:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight: '500',
    },
    text:{
        fontSize:AppFontMedium
    },
    avata:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        height:200,
        backgroundColor:Appcolor
    },
    button:{
        padding: 8,
        borderRadius:3,
        justifyContent: 'center',
        alignItems:'center'
    },
    backgroundImg:{
        height:200,
        width:'100%'
    }
})
