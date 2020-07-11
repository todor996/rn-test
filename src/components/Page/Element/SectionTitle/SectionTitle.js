import React from 'react';
import { 
    View, 
    StyleSheet
} from 'react-native';
import HTML from 'react-native-render-html'
import {TextApp} from 'App';
import { AppFontFamily,H2,AppFontSize } from 'styles';

const tagsStyles={
    p:{
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
        alignContent: 'center',
    }
}
export default class SectionTitle extends React.PureComponent {
    render() {
        //console.log("Section title",this.props)
        //console.log("Section title",this.state)
        return (
            <View style={styles.content}>
                <TextApp style={styles.title} >{this.props.setting.title}</TextApp>
                <HTML html = {this.props.setting.sub_title} tagsStyles={tagsStyles} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingLeft:10,
        paddingRight:10
    },
    title:{
        color:'#252c41',
        // fontSize:18,
        fontWeight:'500',
        fontSize:H2
    },
})
