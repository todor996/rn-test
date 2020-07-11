import React from 'react';
import {  
    ImageBackground,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import {SafeAreaView,DrawerItems } from 'react-navigation'
import { Appcolor, AppFontSize } from '../../../styles';
import {connect} from 'react-redux'
import {TextApp} from 'App'
import UserAvatar from './UserAvatar'
import I18n from 'language/I18n'
import ListItem from './ListItem';

const ContentComponent = (props) => {
    // //console.log("Content Component",props)
    return(
        <ScrollView>
            <SafeAreaView style={styles.safeView}  forceInset={{ top: 'always', horizontal: 'never' }} >
                <View style={styles.container}>
                    <ImageBackground source={require('../../../img/citybook.png')} style={styles.header} >
                        <View style={styles.avata} >
                            {
                                props.user.data.avata
                                ?   <UserAvatar url={props.user.data.avata} />
                                :   null
                            }
                            <TextApp style={[styles.userName]}>{`${I18n.t('greeting')}, ${props.user.data.display_name}`}</TextApp>
                        </View>
                    </ImageBackground>
                    {/* <ListItem {...props} /> */}
                    <DrawerItems {...props} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
function mapStateToProps(state){
    return {
        user:state.users.userData.data
    }
}
export default connect(mapStateToProps,null)(ContentComponent)
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    },
    header:{
        backgroundColor:Appcolor,
        height:200,
        marginBottom: 10,
    },
    avata:{
        position:'absolute',
        bottom:25,
        left:10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName:{
        fontSize:AppFontSize,
        color:'#fff',
        fontWeight: '500',
        marginLeft: 5,
    },
    button:{
        padding: 8,
        borderRadius:3,
        justifyContent: 'center',
        alignItems:'center'
    }
})