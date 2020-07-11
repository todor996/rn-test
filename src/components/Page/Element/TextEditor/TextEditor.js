
import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import HTML from 'react-native-render-html';

const tagsStyles = {
    h3:{
        fontSize:15,
        fontWeight:'500',
        color:'#fff',
        // fontFamily:'Quicksand',
        paddingBottom:10
    },
    p:{
        fontSize:10,
        // fontFamily:'Quicksand',
        color:'#fff',
        paddingBottom:10
    },
    a:{
        fontSize:10,
        textDecorationLine:'none',
        color:'#fff',
        // fontFamily:'Quicksand'
    }
}
class TextEditor extends Component {
    render() {
        //console.log("Text Editor",this.props)
        return (
            <View style={styles.container} >
                <HTML html={this.props.setting.editor} tagsStyles={tagsStyles} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        padding:10,
        borderRadius:5,
    }
})
export default TextEditor;