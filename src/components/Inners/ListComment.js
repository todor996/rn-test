
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import {TextApp} from '..//App';
import { AppFontSize } from '../../styles';
import {ReplaceLink} from '../App';

export default class ListComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderItem = ({item,index})=>{
        return(
            <View style={styles.container}>
                <View style={styles.authorAvata}>
                    <Image source={{uri:ReplaceLink(item.comment_author_avata)}} style={styles.authorImage} />
                </View>
                <View style={styles.content}>
                    <TextApp style={styles.textCommentAuthor} >{item.comment_author}</TextApp>
                    <TextApp style={styles.textCommentContent} >{item.comment_content.slice(0,50)+'...'}</TextApp>
                </View>
            </View>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        return (
            <FlatList 
                data={this.props.item.comments}
                renderItem = {this.renderItem}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom: 10,
    },
    authorAvata:{
        flex:0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        flex:0.8,
        flexWrap: 'wrap',
    },
    textCommentContent:{
        fontSize:AppFontSize,
        color:'#8f95a5'
    },
    textCommentAuthor:{
        fontSize:AppFontSize,
        color:'#8f95a5'
    },
    authorImage:{
        width:40,
        height:40,
        borderRadius: 20,
        resizeMode:'cover'
    }
})
