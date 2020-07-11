import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Image,
    StyleSheet
} from 'react-native';
import Description from './Description';
import Tags from './Tags'
import {Overlay} from 'App';

export default class Content extends Component {
    render() {
        let {item} = this.props
        return (
            <React.Fragment>
                <React.Fragment>
                    <Image source={{uri:item.page_header_bg}} style={styles.image} />
                    <Overlay />
                </React.Fragment>
                
                <Description content={item.content} />
                {
                    item.tags?
                        <Tags item={item} />
                    :null
                }
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create({
    image:{
        height:250,
        resizeMode:'cover'
    }
})
