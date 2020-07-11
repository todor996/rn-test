import React, { Component,useState,useEffect } from 'react';
import {  
    View,
    Text,
    FlatList
} from 'react-native';
import axios from 'axios'

export default function TestHook(props){
    const [listings,setListings] = useState(null)
    useEffect(()=>{
        if(!listings.length){
            axios.get('').then(({data})=>{
                setListings(data)
            }).catch(err=>console.log(err))
        }
    })
    renderItem = ({item,index})=>{
        return(
            <Text>{item}</Text>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    return(
        <FlatList 
            data={listings}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
        />
    )
}