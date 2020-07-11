
import React, { Component } from 'react'
import { 
    StyleSheet,
    FlatList
} from 'react-native'
import RenderItem from './RenderItem';

export default class ListPost extends Component {
    _keyExtractor = (item,index)=>index.toString()
    _renderItem = ({item,index})=>{
        return(
            <RenderItem item={item} />
        )
    }
    render() {
        return (
            <FlatList 
                data={this.props.posts}
                renderItem = {this._renderItem}
                keyExtractor={this._keyExtractor}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
