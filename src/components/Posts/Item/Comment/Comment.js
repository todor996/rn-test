
import React, { Component } from 'react'
import { 
    StyleSheet,
} from 'react-native'
import ListPostComment from './Item/ListPostComment';
import Container from '../HocAnimated/Container';

export default class Comment extends Component {
    render() {
        //console.log("Content Post",this.props)
        let {item} = this.props.navigation.state.params
        return (
            <Container 
                item={item} 
                render={()=>{
                    return(
                        <ListPostComment comments={item.comments} />
                    )
                }}
            />
        )
    }
}
const styles = StyleSheet.create({
    container:{
    },
})