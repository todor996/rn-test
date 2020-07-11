
import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    ImageBackground
} from 'react-native'
import {connect} from 'react-redux'
import {getPosts} from 'actions/PostActions'
import ListPost from './Presentation/ListPost';
import RenderSliderLoading from '../ListingsSlider/RenderSliderLoading';
import Carousel from 'react-native-snap-carousel'
import {ReplaceLink} from '../../../App';
import {Overlay} from '../../../App';
import {TextApp} from '../../..//App';
import { H3 } from '../../../../styles';

const {width,height} = Dimensions.get('window')
const slideWidth = width*0.70
const itemHorizontalMargin = width*1.5/100
const itemWidth = slideWidth + itemHorizontalMargin * 2;


let arr = [];
arr.length=3;
class PostsGrid extends Component {
    static defaultProps = {
        setting:{
            order: "DESC",
            order_by: "date",
            posts_per_page: 3
        }
    }
    UNSAFE_componentWillMount(){
        let {setting} = this.props
        let data = {
            order:setting.order?setting.order:'DESC',
            order_by:setting.order_by?setting.order_by:'date',
            posts_per_page:setting.posts_per_page?setting.posts_per_page:3
        }
        //console.log(data)
        this.props.getPosts(data)
    }
    renderItem = ({item,index})=>{
        return(
            <ImageBackground style={styles.postItem} source={{uri:ReplaceLink(item.thumbnail)}} >
                <Overlay />
                <View style={styles.content}>
                    <TextApp style={styles.title}>{item.title}</TextApp>
                </View>
                
            </ImageBackground>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    render() {
        //console.log("Post Grid",this.props)
        return (
            
            <View style={styles.container} >
                {
                    this.props.posts.length!==0
                    ?   <ListPost posts={this.props.posts} />
                    :   <FlatList 
                            data={arr}
                            renderItem={()=>(<RenderSliderLoading  />)}
                            keyExtractor={this.keyExtractor}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                }
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30,
        marginLeft:10
    },
    carousel:{
        marginBottom:50
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    postItem:{
        height:280,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 20,
        width:slideWidth,
        borderRadius: 10,
        overflow: 'hidden',
    },
    title:{
        fontSize:H3,
        color:'#fff',
        fontWeight: 'bold',
    },
    content:{
        marginTop:'80%',
        marginLeft:10
    }
})
function mapStateToProps(state){
    return{
        posts:state.posts.posts
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPosts:(data)=>dispatch(getPosts(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsGrid)


{/* <View style={styles.carousel}>
                <Carousel
                    data={this.props.posts}
                    renderItem={this.renderItem}
                    itemWidth={itemWidth}
                    sliderWidth={width}
                    loop={true}
                    removeClippedSubviews={false}
                />
            </View> */}