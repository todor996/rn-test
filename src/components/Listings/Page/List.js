
import React, { Component } from 'react';
import {  
    FlatList,
    StyleSheet
} from 'react-native';
import Page from './Page'

export default class List extends Page{
    render(){
        return(
            <FlatList 
                data={this.props.page}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                onEndReachedThreshold={0.1}
                onEndReached = {this._onEndReached}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={()=><View style={styles.footer}></View>}
                contentContainerStyle={{margin:5}}
            />
        )
    }
}
const styles = StyleSheet.create({
    footer:{
        height:25
    }
})
