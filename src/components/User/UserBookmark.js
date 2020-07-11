

import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
// import Item from './Item';
import Loading from '../Loading';
import {TextApp} from 'App';
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';
import RenderBookmark from './RenderBookmark';

const {width,height} = Dimensions.get('window')
class UserBookmark extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
        }
    }
    UNSAFE_componentWillMount(){
        this.setState({loading:true})
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },2000)
    }
    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,index})=>{
        return(
            <RenderBookmark id ={item} />
        )
    }
    render() {
        let {listing_bookmarks} = this.props.user.data;
        return (
            <React.Fragment>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                    <HeaderStack {...this.props} style={styles.header} />
                    {
                        listing_bookmarks.length
                        ?   <FlatList
                                data={listing_bookmarks}
                                keyExtractor = {this.keyExtractor}
                                renderItem = {this.renderItem}
                                showsVerticalScrollIndicator={false}
                            />
                        :   null
                    }
                    {
                    !listing_bookmarks.length
                        ?   <View style={styles.noBookmark}>  
                                <TextApp>{I18n.t('youHaveNoBookmarkYet')}</TextApp>
                            </View>
                        :   null
                    }
                </ScrollView>
                
                {
                    this.state.loading===true
                    ?
                        <View style={styles.loading}>
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
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView:{
        // flex:1,
        // backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    loading:{
        width,
        height,
        justifyContent:'center',
        alignItems:'center'
    },
    noBookmark:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        // backgroundColor:'red',
        ...Platform.select({
            ios:{
                height:height-70
            },
            android:{
                height:height-35
            }
        })
    }
})

function mapStateToProps(state){
    return{
        user:state.users.userData.data,
    }
}
export default connect(mapStateToProps,null)(UserBookmark);