
import React, { Component } from 'react'
import { 
    StyleSheet,
    FlatList,
} from 'react-native'
import RenderItem from './RenderItem';

export default class Item extends Component {
    _renderItem = ({item,index})=>{
        return(
            <RenderItem item={item} />
        )
    }
    _keyExtractor = (item,index)=>index.toString()
    _onEndReached = ()=>{
        this.props.onEndReached()
    }
    render() {
        return (
            <FlatList 
                data={this.props.postPage}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                showsVerticalScrollIndicator={false}
                onEndReached = {this._onEndReached}
                onEndReachedThreshold = {0.1}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})