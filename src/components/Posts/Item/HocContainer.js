
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import { Appcolor } from 'styles';

const {width} = Dimensions.get('window')
const HocContainer = (FirstComponent,SecondComponent)=>{
    return class HocContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                anim:new Animated.Value(0)
            };
        }
        onScroll = ({nativeEvent})=>{
            //console.log(nativeEvent.contentOffset.y)
            this.state.anim.setValue(nativeEvent.contentOffset.y)
            
        }
        onMomentumScrollEnd = ()=>{
            //console.log("End SCR")
            this.state.anim.setValue(0)
        }
        render() {
            let scale = this.state.anim.interpolate({
                inputRange:[0,200],
                outputRange:[1,0],
                extrapolate:'clamp'
            })
            return (
                <SafeAreaView style={styles.safeView}>
                    <Animated.Image source={{uri:this.props.navigation.state.params.item.page_header_bg}} style={{width,height:250,transform:[{scale}]}} />
                    <ScrollView 
                        style={styles.container} 
                        horizontal={true} 
                        pagingEnabled={true} 
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={this.onMomentumScrollEnd}
                    >
                        <FirstComponent onScroll={this.onScroll} />
                        <SecondComponent onScroll={this.onScroll} />
                    </ScrollView>
                </SafeAreaView>
            );
        }
    }
}
export default HocContainer
const styles = StyleSheet.create({
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    },
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})