import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Dimensions,
    WebView
} from 'react-native'

const {width} = Dimensions.get('window')
export default class PopupVideo extends Component {
    render() {
        //console.log("Popup Video",this.props)
        let yourAlert = `document.getElementsByClassName("vp-controls-wrapper")[0].style.display="none"`
        return (
            <View style={styles.container} >
                <WebView 
                    injectedJavaScript={yourAlert}
                    source={{uri: 'https://myagi.github.io/react-native-vimeo/v0.3.0.html?vid=280976161' }} 
                    style={{width:width-10,height:230}} 
                    javaScriptEnabledAndroid={true}
                >
                    
                </WebView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
