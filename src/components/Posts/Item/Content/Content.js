
import React, { Component } from 'react'
import { 
    View,
} from 'react-native'
import Description from './Item/Description';
import PostTags from './Item/PostTags';
import Container from '../HocAnimated/Container';

export default class Content extends Component {
    render() {
        //console.log("Content Post",this.props)
        let {item} = this.props.navigation.state.params
        return (
            <Container item={item} 
                render={()=>{
                    return(
                        <View>
                            <Description content={item.content} />
                            {
                                item.tags?
                                    <PostTags item={item} />
                                :null
                            }
                        </View>
                        
                    )
                }}
            />
        )
    }
}