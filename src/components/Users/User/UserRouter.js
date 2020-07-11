import React, { Component } from 'react';
import { 
    StyleSheet 
} from 'react-native';
import {connect} from 'react-redux';
import {getUsers} from '../../../actions/UserActions';
import Dashboard from '../../User/Dashboard';
import Login from '../../User/Login';
import R from 'ramda'

class UserRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },2000)
        // !R.isEmpty(this.props.users)?this.props.navigation.navigate('DashboardScreen'):this.props.navigation.navigate('Login')
    }
    render() {
        // console.log("Router Props",this.props)
        return (
            !this.props.userData || R.isEmpty(this.props.userData)?
                <Login  {...this.props} />
            :   <Dashboard {...this.props} />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
function mapStateToProps(state){
    return{
        userData:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUsers:(user_info,data)=>dispatch(getUsers(user_info,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserRouter);
