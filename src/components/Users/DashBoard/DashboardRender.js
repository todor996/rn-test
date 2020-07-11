import React, { Component } from 'react';
import { 
    StyleSheet,
    View
} from 'react-native';
import {Appcolor, AppFontMedium} from '../../../styles';
import HTML from 'react-native-render-html';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import Logout from '../User/Logout';
import {TextApp} from 'App';
import I18n from 'language/I18n'

const tagsStyles = {
    a:{textDecorationLine:'none',
    // fontFamily:'Quicksand'
},
    p:{fontSize:AppFontMedium,
        // fontFamily: 'Quicksand',
    }
}
export default class DashboardRender extends Component {
    alert = () =>{
        let alerts = this.props.users.data.notifications[0];
        let result = [];
        for(key in alerts){
        result.push(
                <CardItem key={key+alerts[key]} bordered >
                    <Body >
                        <HTML html={`<p>${alerts[key]}</p>`} tagsStyles={tagsStyles}  />
                    </Body> 
                </CardItem>
            )
        }
        return result;
    }
    _logout = (callback) =>{
        callback();
    }
    render() {
        return (
            <Container style={styles.container} >
                <Content showsVerticalScrollIndicator={false}>
                    <Card >
                    <CardItem header bordered >
                        <TextApp style={styles.alert} >{I18n.t('recentActivities')}</TextApp>
                    </CardItem>
                    {
                        this.props.users.data.notifications.length!==0?Object.keys(this.props.users.data.notifications[0]).length!==0?
                        this.alert()
                        :
                        <CardItem  bordered >
                            <Body >
                                <TextApp >{I18n.t('youHaveNoActivity')}</TextApp>
                            </Body> 
                        </CardItem>
                        :
                        <CardItem  bordered >
                            <Body >
                                <TextApp >{I18n.t('youHaveNoActivity')}</TextApp>
                            </Body> 
                        </CardItem>
                    }
                    </Card>
                </Content>
                <Logout onPress={this._logout} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
      },
    alert:{
        color:Appcolor,
        fontSize:AppFontMedium,
        fontWeight:'500'
    },
    logOut:{
        position:'absolute',
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Appcolor,
        zIndex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:AppFontMedium
    }
})