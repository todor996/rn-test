
import React from 'react';
import {  
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {TextApp} from 'App';
import NavigationService from 'helpers/NavigationService'
import { AppFontSize, AppIconLarge, AppIconMedium } from 'styles';

const colors = [
    // {
    //     color:['#4c669f', '#3b5998', '#192f6a'],
    //     icon:'palette',
    //     screen:'Notice'
    // },
    {
        color:['#4c669f', '#3b5998', '#192f6a'],
        icon:'user',
        screen:'EditProfile',
        title:'Edit Profile'
    },
    {
        color:['#e66363','#e03e3e','#c71c1c'],
        icon:'unlock',
        screen:'ChangePassword',
        title:'Change Password'
    },
    {
        color:['#57b5f3','#4DB7FE','#289eec'],
        icon:'calendar',
        screen:'Booking',
        title:'Booking'
    },
    {
        color:['#6fdebf','#5ECFB1','#32caa0'],
        icon:'heart',
        screen:'Bookmark',
        title:'Bookmark'
    },
    {
        color:['#6ebaec','#41a9ec','#1c9bec'],
        icon:'message1',
        screen:'Contacts',
        title:'Contacts'
    }
]

const ListItem = ({items,navigation}) => {
    //console.log("List Item",navigation)
    navigateToScreen = (route) =>()=> {
        NavigationService.navigate(route)
    }
    renderItem = ({item,index}) => {
        return(
            <TouchableOpacity style={styles.item} onPress={(navigateToScreen(item.screen))} activeOpacity={1} >
                <LinearGradient colors={item.color} style={styles.gradient}>
                    <AntDesign  name={item.icon} color='#fff' size={AppIconLarge} />
                </LinearGradient>
                <TextApp style={styles.name}  >{item.title}</TextApp>
                <SimpleLineIcons name='arrow-right' size={AppIconMedium} style={styles.after} color='#50596e' />
            </TouchableOpacity>
        )
    }
    keyExtractor = (item,index) => index.toString()
    return(
        <FlatList 
            data={colors}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
        />
    )
}
export default ListItem
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        alignItems: 'center',
        // marginBottom: 10,
        height:50,
        alignItems:'center'
    },
    gradient:{
        padding: 8,
        borderRadius:4,
        justifyContent: 'center',
        alignItems:'center'
    },
    name:{
        fontSize:AppFontSize,
        // fontWeight: 'bold',
        marginLeft:10,
        color:'#50596e'
    },
    after:{
        position: 'absolute',
        right:15
    }
})