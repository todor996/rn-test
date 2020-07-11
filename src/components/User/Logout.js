
import React, { Component } from 'react'
import {  
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Appcolor, AppIconSize } from 'styles';
import {getUsers} from 'actions/UserActions';
import {connect} from 'react-redux'
import NavigationService from '../../helpers/NavigationService';

const {width,height} = Dimensions.get('window');
const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);
class Logout extends Component{
    constructor(props){
        super(props);
        this.state = {
            position:new Animated.Value(0),
            scale:new Animated.Value(1),
            size:new Animated.Value(0),
            showIcon:true
        }
    }
    _onPress = ()=>{
        this.setState({showIcon:false})
        Animated.sequence([
            Animated.timing(
                this.state.position,
                {
                    toValue:1,
                    duration:400,
                }
            ),
            Animated.timing(
                this.state.scale,
                {
                    toValue:50,
                    duration:400
                }
            )
        ]).start(()=>{
            this.setState({
                position:new Animated.Value(0),
                scale: new Animated.Value(1),
                size:new Animated.Value(0),
                showIcon:true
            })
            this.props.getUsers(null,{
                data:{},
                success:false,
                error:''
            });
            NavigationService.navigate('UserRouter')
        })
    }
    componentDidMount(){
        Animated.spring(
            this.state.size,
            {
                toValue:1
            }
        ).start()
    }
    render(){
        let anim = {
            bottom:this.state.position.interpolate({
                inputRange:[0,1],
                outputRange:[15,height/3]
            }),
            right:this.state.position.interpolate({
                inputRange:[0,1],
                outputRange:[15,width/2]
            }),
            width:this.state.size.interpolate({
                inputRange:[0,1],
                outputRange:[20,40]
            }),
            height:this.state.size.interpolate({
                inputRange:[0,1],
                outputRange:[20,40]
            }),
            transform:([{scale:this.state.scale}])
        }
        return(
            <AnimatedTouch style={[styles.touch,anim]} onPress={this._onPress} >
                {
                    this.state.showIcon===true?
                        <AntDesign name='logout' size={AppIconSize} color='#fff' />
                    :null
                }
            </AnimatedTouch>
        )
    }
}

const styles = StyleSheet.create({
    touch:{
        backgroundColor: Appcolor,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:100
    },
})

function mapDispatchToProps(dispatch){
    return{
        getUsers:(user_info,data)=>dispatch(getUsers(user_info,data))
    }
}
export default connect(null,mapDispatchToProps)(Logout)