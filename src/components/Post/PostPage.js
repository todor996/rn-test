
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    ScrollView,
    Dimensions,
    FlatList,
    Image
} from 'react-native';
import HeaderDrawer from '../Inners/HeaderDrawer';
import {connect} from 'react-redux'
import {getPostPage} from 'actions/PostActions'
import Loading from '../Loading';
import { TextApp, Overlay, ReplaceLink } from '../App';
import { H3 } from '../../styles';

const {width,height} = Dimensions.get('window')
class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPost:10
        };
    }
    componentDidMount(){
        this.props.getPostPage(this.state.numberPost)
    }
    renderItem = ({item,index})=>{
        return(
            <View style={styles.item}>
                <View style={styles.ctnImg}>
                    {
                        item.thumbnail
                        ?   <Image style={[styles.thumbnail]} source={{uri: ReplaceLink(item.thumbnail)}} />
                        :   <Image style={styles.thumbnail} source={require('../../img/noimage.png')} />    
                    }
                    <Overlay />
                </View>
                <View style={styles.content}>
                    <TextApp style={styles.textTitle} >{item.title}</TextApp>
                </View>
                
            </View>
        )
    }
    keyExtractor=(item,index)=>index.toString()
    render() {
        console.log("Post Page",this.props)
        return (
            <React.Fragment>
                {
                    this.props.posts
                    ?   <FlatList
                            data={this.props.posts}
                            renderItem = {this.renderItem}
                            keyExtractor = {this.keyExtractor}
                            onEndReachedThreshold={0.1}
                            // onEndReached = {
                            //     this.state.filtered?null
                            //     :this.onEndReached
                            // }
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent = { <HeaderDrawer {...this.props} style={styles.header} hiddenSearchIcon={true} />}
                            // ListFooterComponent={this.ListFooterComponent()}
                            style={styles.container}
                        />
                    :null
                }
                {
                    this.props.loading&&this.state.numberPost===10
                    ?   <View style={styles.loading}>
                            <Loading />
                        </View>
                    :null
                }
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    loading:{
        height,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    item:{
        flexDirection:'row',
        marginBottom: 5,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height:140,
        alignItems: 'center',
    },
    textTitle:{
        fontSize:H3,
        color:'#000'
    },
    ctnImg:{
        width:100,
        height:100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    thumbnail:{
        width:null,
        height:null,
        resizeMode:'cover',
        flex:1
    },
    content:{
        marginLeft:10,
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
})
function mapStateToProps(state){
    return{
        posts: state.posts.page,
        loading:state.loading
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPostPage:(number)=>dispatch(getPostPage(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostPage)