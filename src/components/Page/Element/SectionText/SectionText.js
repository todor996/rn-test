import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native'
import HTML from 'react-native-render-html'
import { Appcolor, AppFontMedium, AppFontSize, AppIconMedium } from '../../../../styles';
import {TextApp} from '../../..//App';
import Icon from 'react-native-vector-icons/FontAwesome'

const tagsStyles = {
    p:{
        fontSize:AppFontMedium,
        // fontFamily:'Quicksand',
        color:'#878C9F',
        paddingBottom:5
    },
    span:{
        color: Appcolor,
    },
    h3:{
        color: '#334e6f',
        fontSize: AppFontSize,
        fontWeight: '500',
        // fontFamily:'Quicksand',
        marginBottom:5
    }
}
export default class SectionText extends Component {
    static defaultProps = {
        setting:{
            button: "Visit Website",
            content: "<p>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.</p>↵                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>",
            title: "About <span>Alisa Noory</span>",
            link:{
                url: "https://"
            }
        }
    }
    _onPress = ()=>{
        Linking.openURL(this.props.setting.link.url)
    }
    render() {
        //console.log("Section text",this.props)
        let {setting} = this.props
        return (
            <View style={[styles.container,this.props.style]} >
                <HTML html={`<h3>${setting.title}</h3>`} tagsStyles={tagsStyles} />
                <HTML html={setting.content} tagsStyles={tagsStyles} />
                <TouchableOpacity onPress={this._onPress} style={styles.button} >
                    <TextApp style={styles.textButton} >{setting.button}</TextApp>
                    {
                        setting.icon?
                            <Icon name={setting.icon.replace('fa fa-','')} color={'#878C9F'} size={AppIconMedium} />
                        :null
                    }
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        padding:10,
        backgroundColor:'#fff',
        paddingTop:20,
        paddingRight:20
    },
    button:{
        padding:8,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:Appcolor,
        borderRadius:3,
        alignSelf:'flex-start',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:'#878C9F',
        paddingRight:3
    }
})
