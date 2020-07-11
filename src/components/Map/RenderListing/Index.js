
import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Animated,
    Dimensions,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import RenderItem from '../../Page/Element/ListingsSlider/RenderSlider';

const {width} = Dimensions.get('window');
class Index extends Component {
    UNSAFE_componentWillMount(){
        this.animation = new Animated.Value(0);
        this.index = 0;
    }
    componentDidMount(){
        this.animation.addListener(({ value }) => {
            // //console.log(value);
            let number = Math.round(value/200);
            this.props.setIndex(number);
        })
    }
    _renderItem = ({item,index})=>{
        return(
            <RenderItem item={item} key={index} index={index} />
        )
    }
    _key = (item,index)=>index.toString()
    render() {
        // //console.log(this.animation)
        // //console.log(width)
        return (
            this.props.page.length!==0?
                <View style={styles.container}>
                    <FlatList
                        data={this.props.page}
                        renderItem={this._renderItem}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        onScroll = {
                            Animated.event(
                                [{nativeEvent: {contentOffset: {x: this.animation}}}],
                            )
                        }
                        keyExtractor={this._key}
                    />
                </View>
            :null
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom:0,
        zIndex: 1,
    }
})
function mapStateToProps(state){
    return{
        page:state.listings.page
    }
}
function mapDispatchToProps(dispatch){
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)
