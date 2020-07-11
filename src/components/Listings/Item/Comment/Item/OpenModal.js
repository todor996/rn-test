
import React, { Component } from 'react';
import { 
    View,
    Modal,
    StyleSheet
} from 'react-native';
import {Appcolor} from 'styles';
import SendComment from './SendComment';
import ButtonApp from 'App/ButtonApp';
import I18n from 'language/I18n'

export default class OpenModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false
        }
    }
    _hiddenModal = ()=>{
        //hiden modal
        this.setState({modalVisible:false})
    }
    _handlePress = ()=>{
        this.setState({modalVisible:true})
    }
    render() {
        return (
            <View style={styles.container} >
                <ButtonApp title={I18n.t('addNewComment')} style={styles.button} onPress={this._handlePress} />
                <Modal visible={this.state.modalVisible} onRequestClose={()=>{}} animationType = {"fade"} transparent = {true} >
                    <SendComment ID= {this.props.id} hidden={this._hiddenModal} />
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        backgroundColor:'#fff',
    },
    button:{
        backgroundColor:Appcolor,
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})