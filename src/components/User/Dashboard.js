import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions
} from 'react-native';
import {connect } from 'react-redux';
import { Appcolor , H3 } from 'styles';
import ListItem from './ListItem';
import UserAvata from './UserAvata';
import {TextApp} from 'App';
import Logout from './Logout';
import HeaderDrawer from '../Inners/HeaderDrawer';

const {height} = Dimensions.get('window')
class Dashboard extends Component {
    render() {
        //console.log("Dashboard",this.props)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}  >
                <HeaderDrawer {...this.props} style={styles.header} iconMenuColor='#fff' iconSearchColor='#fff' />
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/dashboardbg.png')} style={styles.backgroundImg} resizeMode='cover' >
                        {
                            this.props.user && Object.keys(this.props.user).length!==0
                            ?   <View style={styles.avata}>
                                    <UserAvata url={this.props.user.data.avata} />
                                    <TextApp style={styles.userName} >{this.props.user.data.display_name}</TextApp>
                                </View>
                            :   null
                        }
                    </ImageBackground>
                    <ListItem />
                    <Logout />
                </View>
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        // backgroundColor:Appcolor
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        height  
    },
    backgroundImg:{
        width:'100%',
        backgroundColor:Appcolor,
        height:height/3,
        marginBottom: 10,

    },
    avata:{
        position:'absolute',
        left:20,
        bottom:30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName:{
        fontSize:H3,
        color:'#fff',
        fontWeight: 'bold',
    },
    header:{
        position: 'absolute',
    }
})
function mapStateToProps(state){
    return {
        user:state.users.userData.data
    }
}
export default connect(
    mapStateToProps,
    null
)(Dashboard)