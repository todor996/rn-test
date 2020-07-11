
import React, { Component } from 'react';
import { 
    Animated,
    StyleSheet,
    Easing
} from 'react-native';

export default class AnimImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim : new Animated.Value(0)
        };
    }
    componentDidMount(){
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    this.state.anim,
                    {
                        toValue:1,
                        duration:800
                    }
                ),
                Animated.timing(
                    this.state.anim,
                    {
                        toValue:0,
                        duration:500,
                        easing:Easing.ease,
                    }
                )
            ])
        ).start()
    }
    render() {
        let translateY = this.state.anim.interpolate({
            inputRange:[0,1],
            outputRange:[0,-25]
        })
        return (
            <Animated.Image source={require('../../../img/marker.png')} style={[styles.image,{transform:[{translateY}]}]}  />
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:40,
        height:40,
        resizeMode:'cover'
    }
})