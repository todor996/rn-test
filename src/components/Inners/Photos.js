import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {ReplaceLink} from '../App';
import {Overlay} from '../App';
import {TextApp} from '..//App';
import { AppFontSize } from '../../styles';
import ModalGallery from './ModalGallery';

export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false
        };
    }
    closeModal = ()=>{
        this.setState({modalVisible:false})
    }
    chooseImage = ()=>{
        let imgs = this.props.item._cth_gallery_imgs.filter((item,index)=>{
            return index < 3
        })
        return imgs
    }
    openModal = ()=>{
        this.setState({
            modalVisible:true
        })
    }
    renderItem = ({item,index})=>{
        if(index===this.chooseImage().length-1){
            return(
                <TouchableOpacity activeOpacity={1} style={styles.ctnImage} onPress={this.openModal} >
                    <Image source={{uri:ReplaceLink(item)}} style={styles.image} />
                    <View style={styles.overlay}>
                        <TextApp style={styles.textMore} >More</TextApp>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return(
                <React.Fragment >
                    <Image source={{uri:ReplaceLink(item)}} style={styles.image} />
                    <Overlay />
                </React.Fragment>
            )
        }
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        return (
            <View style={styles.container} >
                <FlatList 
                    data={this.chooseImage()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
                <ModalGallery item={this.props.item} modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    image:{
        width:100,
        height:80,
        resizeMode:'cover',
        borderRadius: 5,
        marginRight: 5,
    },
    ctnImage:{
        width:100,
        height:80,
        overflow: 'hidden',
        borderRadius:5
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    textMore:{
        color:'#fff',
        fontSize:AppFontSize
    }
})