
import React, { Component } from 'react'
import { 
    View,
    Animated,
    ScrollView,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    Dimensions,
    Text,

} from 'react-native'
import {TextApp} from 'App';
import { Appcolor, AppFontSize } from 'styles';
import {Overlay} from 'App';
import {ReplaceLink} from 'App';
import Carousel from 'react-native-snap-carousel'
import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')
const Container = (FirstComponent,SecondComponent,ThirdComponent)=>{
    return class Container extends Component {
        constructor(props){
            super(props)
            this.state = {
                anim:new Animated.Value(0)
            }
        }
        onScroll = ({nativeEvent})=>{
            this.state.anim.setValue(nativeEvent.contentOffset.y)
        }
        renderItem = ({item,index})=>{
            //console.log(item)
            return(
                <ScrollView style={{flex:1,}} onScroll={this.onScroll} >
                    {/* <Image source={{uri:item}} style={{height:150}} /> */}
                    {/* <TextApp style={{position:'absolute',zIndex:10,alignSelf:'center'}} >Content{index}</TextApp> */}
                    <Overlay />
                    {item()}
                </ScrollView>
            )
        }
        render(){
            // //console.log(func)
            //console.log("Container")
            let scale = this.state.anim.interpolate({
                inputRange:[0,200],
                outputRange:[1,0],
                extrapolate:'clamp'
            })
            return(
                <SafeAreaView style={styles.safeView} >
                    <View style={styles.container}>
                        <View style={styles.ctnImg}>
                            <Animated.Image source={{uri:this.props.navigation.state.params.item.page_header_bg}} style={{width,height:250,transform:[{scale}]}} />
                            <View style={{position:'absolute',alignSelf:'center',bottom:0,backgroundColor:'#fff',padding:6,borderRadius:2}}>
                                <TextApp style={{color:Appcolor}} >Content</TextApp>
                            </View>
                        </View>
                        {/* <BaseComponent /> */}
                        {/* <Carousel
                            data={func}
                            renderItem={this.renderItem}
                            itemWidth={width}
                            sliderWidth={width}
                            loop={true}
                        /> */}
                        <Swiper 
                             style={styles.wrapper}
                        >
                            <ScrollView style={styles.slide}>
                                <FirstComponent />
                            </ScrollView>
                        </Swiper>
                    </View>
                </SafeAreaView>
            )
        }
    }
}
export default Container
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    safeView:{
        flex:1,
        backgroundColor:Appcolor
    },
    ctnImg:{
        justifyContent: 'center',
    },
    wrapper: {
    },
    slide: {
      flex: 1,
      backgroundColor: '#9DD6EB',
    },
})
