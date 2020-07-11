
import React, { Component } from 'react'
import { 
    View,
    FlatList,
    StyleSheet,
} from 'react-native'
import RenderContact from './RenderContact';
import {TextApp} from 'App';
import I18n from 'language/I18n'

export default class List extends Component {

    renderItem = ({item,index})=>{
        return(
            <RenderContact item={item}/>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    renderEmpty = ()=>(
        <View style={styles.empty}>
            <TextApp>{I18n.t('youHaveNoContact')}</TextApp>
        </View>
    )

    render() {
        return (
            <FlatList 
                data={this.props.contacts}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={this.renderEmpty}
                style={styles.container}
            />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        // backgroundColor:'#fff'
    },
    empty:{
        flex:1,
        padding:10
    }
})