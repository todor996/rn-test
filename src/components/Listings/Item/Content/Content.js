

import React, { Component } from 'react';
import { 
    StyleSheet,
 } from 'react-native';
import {connect} from 'react-redux';
import Tags from './Item/Tags';
import ItemImage from './Item/Image';
import ItemCarousel from './Item/Carousel';
import ItemVideo from './Item/Video';
import Description from './Item/Description';
import Features from './Item/Features';
import Photos from './Item/Photos';
import Container from '../HocContainer/Container';
import R from 'ramda'
import HocContainer from '../HocContainer/HocContainer';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderModalVisible:false,
            index:0
        };
    }
    RenderContent = ()=>{
        let item =this.props.navigation.state.params;
        return(
            <React.Fragment>
                <Description item={item} />
                {
                    item.headertype[0]=="bgimage" ?
                        <ItemImage url={item.headerimgs[0]} /> :
                    item.headertype[0]=="bgvideo" ?<ItemVideo url={item.headerbg_mp4[0]} />:
                        <ItemCarousel headerimgs={item.headerimgs} />
                }
                {
                    !R.isEmpty(item.icon)
                    ?<Features item={item } />
                    :null
                }
                <Tags item={item} />
                {
                    item._cth_slider_imgs.length!==0?
                        <Photos imgs={item.headerimgs} style={styles.photos} />
                    :null
                }
            </React.Fragment>
        )
        
    }
    render() {
        //console.log("CONTENT",this.props)
        let item =this.props.navigation.state.params;
        const Content = HocContainer(this.RenderContent)
        return (
            <Content item={item} />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    photos:{
        marginTop:0
    }
})

function mapStateToProps(state){
    return{
        user:state.users
    }
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);


{/* <Container 
                item={item}
                render = {()=>{
                    return(
                        <React.Fragment>
                            <Description item={item} />
                            {
                                item.headertype[0]=="bgimage" ?
                                    <ItemImage url={item.headerimgs[0]} /> :
                                item.headertype[0]=="bgvideo" ?<ItemVideo url={item.headerbg_mp4[0]} />:
                                    <ItemCarousel headerimgs={item.headerimgs} />
                            }
                            {
                                !R.isEmpty(item.icon)
                                ?<Features item={item } />
                                :null
                            }
                            <Tags item={item} />
                            {
                                item._cth_slider_imgs.length!==0?
                                    <Photos imgs={item.headerimgs} style={styles.photos} />
                                :null
                            }
                        </React.Fragment>
                    )
                }}
            />  */}
