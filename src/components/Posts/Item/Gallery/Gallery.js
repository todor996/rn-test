
import React, { Component } from 'react'
import Container from '../HocAnimated/Container'
import Item from './Item/Item';

export default class Gallery extends Component {
    render() {
        //console.log("Content Post",this.props)
        let {item} = this.props.navigation.state.params
        return (
            <Container item={item}
                render={()=>{
                    return(
                        <Item item={item} />
                    )
                }}
            />
        )
    }
}