import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { Appcolor, AppIconSize,width } from 'styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class HeaderDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    search = ()=>{
        this.props.navigation.navigate('ListingSearch')
    }
    menu = ()=>{
        this.props.navigation.openDrawer()
    }
    render() {
        let iconMenuColor = this.props.iconMenuColor?this.props.iconMenuColor:Appcolor
        let iconSearchColor = this.props.iconSearchColor?this.props.iconSearchColor:Appcolor
        return (
            <View style={[styles.container,this.props.style]} >
                {/* <TouchableOpacity activeOpacity={1} style={styles.menuButton} onPress={this.menu}>
                    <SimpleLineIcons name='menu' size={AppIconSize} color={iconMenuColor} />
                </TouchableOpacity> */}
                {
                    this.props.children
                }
                {
                    this.props.hiddenSearchIcon
                    ?
                        null
                    :   <TouchableOpacity activeOpacity={1} style={styles.searchButton} onPress={this.search} >
                            <AntDesign name='search1' size={AppIconSize} color={iconSearchColor} />
                        </TouchableOpacity>
                }
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        ...Platform.select({
            ios:{
                height:70
            },
            android:{
                height:35
            }
        }),
        // backgroundColor:'#fff',
        // position: 'absolute',
        zIndex:10,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        width
    },
    searchButton:{
        position:'absolute',
        ...Platform.select(
            {
                ios:{
                    top: 35,
                },
                android:{
                    // top:0
                }
            }
        ),
        right:20,
        ...Platform.select({
            ios:{
                padding:15,
            },
            android:{
                padding:0
            }
        })
        
        // backgroundColor:'red'
    },
    menuButton:{
        position:'absolute',
        ...Platform.select(
            {
                ios:{
                    top: 35,
                },
                android:{
                    // top:0
                }
            }
        ),
        left:20,
        ...Platform.select({
            ios:{
                padding:15,
            },
            android:{
                padding:0
            }
        })
        // backgroundColor:'red'
    },
})
