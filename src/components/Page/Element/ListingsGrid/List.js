
import React from 'react';
import {  
    View,
    FlatList
} from 'react-native';
import Item from './Item';
import ListEmpty from './ListEmpty';

const keyExtractor = (item,index)=>index.toString()

const renderItem = ({item,index})=>{
    return(
        <Item item={item} />
    )
}

const List = (props)=>{
    return(
        <FlatList 
            data={props.listings}
            renderItem = {renderItem}
            keyExtractor = {keyExtractor}
            ListEmptyComponent = {<ListEmpty />}
        />
    )
}
export default List