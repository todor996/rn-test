import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Appcolor, AppIconSize } from '../../styles';

const {width} = Dimensions.get('window')
export default class HeaderStack extends Component {
    onPress = ()=>{
        this.props.navigation.goBack()
    }
    render() {
        // //console.log("HEADER STACK",width)
        let iconBackColor=this.props.iconBackColor?this.props.iconBackColor:Appcolor
        return (
            <View style={[styles.container,this.props.style]} activeOpacity={1}  >
                <SimpleLineIcons name={'arrow-left'} size={AppIconSize} color={iconBackColor} onPress={this.onPress} style={styles.backButton} />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        ...Platform.select({
            ios:{
                height:70
            },
            android:{
                height:35
            },
            
        }),
        zIndex:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        // marginBottom: 5,
    },
    backButton:{
        position: 'absolute',
        left:20,
        ...Platform.select({
            ios:{
                top: 40,
            },
            android:{
                top:10
            }
        }),
        ...Platform.select({
            ios:{
                paddingHorizontal: 15,
            },
            android:{
                padding:0
            }
        })
    }
})
