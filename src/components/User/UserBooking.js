import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {getLbooking} from 'actions/UserActions';
import Loading from '../Loading';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';
import RenderBooking from './RenderBooking';

class UserBooking extends Component {
    componentDidMount(){
        this.props.getLbooking(this.props.user.ID);
    }
    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,index})=>{
        return(
            <RenderBooking item = {item}  />
        )
    }
    renderListEmpty = () =>{
        //render when data empty
        return(
            <View style={styles.noBooking}>
                <TextApp>{I18n.t('youHaveNoBookingYet')}</TextApp>
            </View>
        )
    }
    render() {
        //console.log('DASHBOARD BOOKING',this.props)
        //console.log('DASHBOARD BOOKING STATE',this.state)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <HeaderStack {...this.props} style={styles.header} />
                <View style={styles.container} >
                    {
                        this.props.loading
                        ?   <View style={styles.loading}>
                                <Loading />
                            </View>
                        :   <FlatList
                                data={this.props.booking}
                                renderItem = {this.renderItem}
                                keyExtractor = {this.keyExtractor}
                                showsVerticalScrollIndicator={false}
                                ListEmptyComponent = {this.renderListEmpty}
                            />
                    }
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: '#f0f0f3',
        
    },
    scrollView:{
        flex:1,
        backgroundColor:'#eee'
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        // backgroundColor:'#fff',
        backgroundColor:'#eee'
    }
})

function mapStateToProps(state){
    return{
        booking:state.users.lBooking,
        user:state.users.userData.data,
        loading:state.users.loading
    }
}
function mapDispatchToProps(dispatch){
    return{
        getLbooking:(id)=>dispatch(getLbooking(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserBooking)
