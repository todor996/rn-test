import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Appcolor, AppIconSize} from '../../../../styles'
import {TextApp} from '../../..//App';
import { regexHtml } from '../../../../constants/regex';
import RenderStar from './Inners/RenderStar';
import AuthorInfo from './Inners/AuthorInfo';


export default class SlideItem extends Component {
    static propTypes = {
        item:PropTypes.object
    }
    render() {
        // //console.log("Slide Item",this.props);
        let {item} = this.props
        return (
            <View style={styles.container} >
                <View style={styles.content}>
                    <Icon name='quote-right' style={styles.iconBefore} color='#fff' size={AppIconSize} />
                    <View style={styles.rating}>
                        <RenderStar rating={item.rating} />
                    </View>
                    <TextApp style={styles.textContent}>
                        {
                            regexHtml(this.props.item.comment)
                        }
                    </TextApp>
                    <Icon name='quote-left' style={styles.iconAfter} color='#fff' size={AppIconSize} />
                </View>
                <AuthorInfo item={item} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        overflow:'hidden'
    },
    content:{
        backgroundColor:Appcolor,
        borderRadius:5,
        overflow:'hidden',
        padding:15,
        borderWidth:1,
        borderColor:Appcolor,
        flex:1
    },
    iconBefore:{
        position:'absolute',
        top:10,
        left:10,
        opacity: 0.6
    },
    iconAfter:{
        position:'absolute',
        bottom:10,
        right:10,
        opacity: 0.6
    },
    textContent:{
        textAlign:'center',
        color:'#fff',
        paddingTop:10,
        paddingBottom:30
    },
    rating:{
        flexDirection:'row',
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10
    },
    iconRating:{
        marginRight:3
    },
    textContent:{
        textAlign:'center',
        color:'#fff',
        paddingBottom:30,
    }
})