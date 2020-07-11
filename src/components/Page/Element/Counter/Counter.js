
import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { AppFontXLarge } from '../../../../styles';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0
        };
    }
    componentDidMount(){
        //get layout when component did mount
        this.handleLayoutChange();
        // this.animation.play()
    }
    componentDidUpdate(prevProps){
        if(this.props.counter!==prevProps.counter){
            this.counter()
        }
    }
    handleLayoutChange =()=>{
        //get postion of counter element
        this.feedPost.measure( (fx, fy, width, height, px, py) => {
            this.props.getPositionCounter(py);
        })
    }
    counter = ()=>{
        this.setState({number:0},()=>{
            setInterval(()=>{
                if(this.state.number<250){
                    this.setState({number:this.state.number+1})
                }
            },10)
        })
    }
    // _start = ()=>{
    //     this.animation.play()
    // }
    
    render() {
        // //console.log("Counter Element",this.props)
        return (
            <View 
                onLayout={this.handleLayoutChange} 
                ref={view => { this.feedPost = view}} 
                style={styles.counter} 
            >
                <View style={styles.content}>
                    <Text style={styles.number} > {this.state.number} </Text>
                    <View style={styles.line}></View>
                    <Text style={[styles.text]} >
                        {
                            Object.keys(this.props.setting).length!==0?
                                this.props.setting.title?this.props.setting.title:'Happy customers every year'
                            :'Happy customers every year'
                        }
                    </Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    counter:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:10,
        paddingLeft:15,
        paddingRight:15,
        overflow:'hidden'
    },
    number:{
        fontSize:AppFontXLarge,
        fontWeight:'600',
        // fontFamily:'Quicksand',
        color:'#fff',
    },
    image:{
        width:'100%',
        borderRadius:5,
        height:150,
        resizeMode:'cover',
    },
    content:{
        // position:'absolute',
        alignItems:'center'
    },
    line:{
        height:1,
        width:20,
        backgroundColor:'#fff'
    },
    text:{
        color:'#fff',
        fontSize:15,
        // fontFamily:'Quicksand'
    },
    waves:{
        position: 'absolute',
        bottom:0
    }
})