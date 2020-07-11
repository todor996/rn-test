
import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import ShowDate from './ShowDate';
import Views from './Views';
import Tags from './Tags';

const PostOpt = (props)=>{
    let {item} = props
    return(
        <React.Fragment>
            <View style={styles.date}>
                <ShowDate time={item.time} />
            </View>
            {/* <View style={styles.views}>
                <Views views={item.view} />
            </View> */}
            <Tags tags={item.tags} />
        </React.Fragment>
        
    )
}
export default PostOpt
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingBottom:5
    },
    date:{
        flexDirection:'row',
        marginBottom: 5,
    },
    views:{
        flexDirection:'row',
    },
})