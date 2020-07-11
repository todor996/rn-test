import React from 'react'
import { 
    View,
    StyleSheet,
 } from 'react-native';
import RenderImages from './RenderImages';
import SliderModal from './SliderModal';
import Header from './Header';

export const transformedGallery = (BaseComponent) =>(RenderComponent)=>props=>{
    return(
        <BaseComponent  {...props} renderComponent={RenderComponent} />
    )
}
const RenderComponent = (props)=>{
    return(
        <React.Fragment>
            <Header />
            <RenderImages imgs={props.imgs} showModal={props.showModal} />
            <SliderModal imgs={props.imgs} closeModal={props.closeModal} index={props.index} visible={props.modalshow}/>
        </React.Fragment>
    )
}
export class GalleryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalshow:false,
            index:0
        };
    }
    showModal = (index)=>{
        this.setState({index})
        this.setState({modalshow:true})
    }
    closeModal = () =>{
        this.setState({modalshow:false})
    }
    render() {
        let BaseComponent=this.props.renderComponent
        return (
            <View style={[styles.container,this.props.style]}>
                <BaseComponent {...this.state} {...this.props} showModal={this.showModal} closeModal={this.closeModal} />
            </View>
        );
    }
}
const Item = transformedGallery(GalleryModal)(RenderComponent)

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#eee',
        marginBottom:0
    },
})

export default Item;