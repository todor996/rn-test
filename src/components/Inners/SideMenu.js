
import React, { Component } from 'react';
import { 
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import { Appcolor, AppIconSize } from 'styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    renderItem = ()=>{
        let buttons = this.props.items.map((item,index)=>{
            let icon = item.key==='Home'?'home':item.key==='Post'?'pushpino':item.key==='Map'?'map':item.key==='ListingPage'?'enviromento':'user';
            let buttonStyle = [
                styles.button,
                item.key==='Home' ? styles.homeButton : {},
                this.props.activeItemKey === item.key ? styles.active : {}
            ]
            return(
                <TouchableOpacity key={index} activeOpacity={1} onPress = {this.navigateToScreen(item.key)} style={buttonStyle} >
                    {
                        item.key==='Map'
                        ?   <SimpleLineIcons name={icon} size={AppIconSize} color='#fff' style={styles.icon} />
                        :   <AntDesign name={icon} size={AppIconSize} color='#fff' style={styles.icon} />
                    }
                    
                </TouchableOpacity>
            )
        })
        return buttons
    }
    render() {
        //console.log("Side Menu ",this.props)
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                {this.renderItem()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Appcolor,
        // backgroundColor:'transparent'
    },
    button:{
        marginTop: 50,
        // alignSelf: 'center',
    },
    homeButton:{
        marginTop:60
    },
    active:{
        backgroundColor:'#089afc',
        width:'100%',
        padding: 10,
    },
    after:{
        position: 'absolute',
        right:-30,
        zIndex:100,
        width:'100%',
        height:'100%',
        backgroundColor:'red'
    },
    icon:{
        alignSelf:'center'
    }
})