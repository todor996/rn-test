
import React, { Component } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Animated,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Appcolor } from 'styles';
import NavigationService from 'helpers/NavigationService'
import {TextApp} from 'App';
import {connect} from 'react-redux'
import I18n from 'language/I18n'

const AnimatedTouch =  Animated.createAnimatedComponent(TouchableOpacity);
class AnimationButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            after:new Animated.Value(0),
            anim : new Animated.Value(0)
        }
    }
    onPress = ()=>{
        this.props.onPress(()=>{
            this.setState({loading:true})
            Animated.timing(
                this.state.anim,
                {
                    toValue:1,
                    duration:200
                }
            ).start()
        })
    }
    componentDidUpdate(prevProps){
        //check user login success
        if(this.props.users!==prevProps.users){
            if(Object.keys(this.props.users).length!==0){
                this.setState({anim:new Animated.Value(0),loading:false})
                NavigationService.navigate('UserDashboard')
            }
            if(Object.keys(this.props.users).length===0){
                this.setState({anim:new Animated.Value(0),loading:false})
                Alert.alert('',I18n.t('userNameOrPasswordWrongLoginFail'))
            }

        }
    }
    render() {
        return (
            <AnimatedTouch onPress={this.onPress} style={[styles.touch]} >
                {
                    this.state.loading===false?<TextApp style={styles.text} >{I18n.t('login')}</TextApp>
                    :this.state.loading===true?<ActivityIndicator color='#fff' /> :null
                }
            </AnimatedTouch>
        );
    }
}

const styles = StyleSheet.create({
    touch:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        borderRadius:20,
        backgroundColor: Appcolor ,
        height:35,
        // zIndex:1
    },
    text:{
        color:'#fff'
    }
})
function mapStateToProps(state){
    return{
        loading:state.loading
    }
}
export default connect(mapStateToProps,null)(AnimationButton);