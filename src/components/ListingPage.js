import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import {getPage} from 'actions/ListingActions';
import {TextApp, ReplaceLink} from 'App';
import Loading from './Loading';
import { Overlay } from './App';
import { H3,  Appcolor, AppIconSize, H1 } from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import I18n from 'language/I18n'
import HeaderDrawer from './Inners/HeaderDrawer';

const {width,height} = Dimensions.get('window')
class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPost:10,
            page:[],
            filtered:false
        };
    }
    filterListing = (page,filtered)=>{
        this.setState({page,filtered})
    }
    componentDidMount(){
		//Get listing page 
		this.props.getPage(this.state.numberPost);
    }
    componentDidUpdate(prevProps){
		if(prevProps.page!==this.props.page){
			this.setState({
				page:this.props.page
			})
		}
	}
    ListFooterComponent = ()=>{
        return(
            <View style={styles.footer}>
                {
                    this.state.numberPost!=10&&this.props.loading===true?<Loading />:null
                }
            </View>
        )
    }
    onEndReached = ()=>{
        //console.log("END REACHED")
        this.setState({numberPost:this.state.numberPost+10})
        this.props.getPage(this.state.numberPost)
    }
    navigateToScreen = (screen,params)=>()=>{
        this.props.navigation.navigate(screen,params)
    }
    renderItem = ({item,index})=>{
        return(
            <TouchableOpacity
                onPress={this.navigateToScreen('ListingItem',item)} 
                style={[styles.item]}
                activeOpacity={1}
            >
                <View style={styles.ctnImg}>
                    <Image style={[styles.thumbnail]} source={{uri: ReplaceLink(item.thumbnail)}} />
                    <Overlay />
                </View>
                <View style={styles.content}>
                    <TextApp style={styles.title} >{item.title}</TextApp>
                    <TextApp numberOfLines={2} ellipsizeMode={'tail'} style={styles.textAddress} >{item.address}</TextApp>
                </View>
            </TouchableOpacity>
        )
    }
    keyExtractor = (item,index)=>index.toString()
    resetFilter = ()=>{
        this.setState({page:this.props.page,filtered:false})
    }
    componentWillUnMount(){
        this.setState({filtered:false})
    }
    render() {
        //console.log("Listing Page",this.props)
        //console.log("Listing Page",this.state)
        return (
                <React.Fragment>
                    {
                        this.props.page
                        ?   <FlatList
                                data={this.state.page}
                                renderItem = {this.renderItem}
                                keyExtractor = {this.keyExtractor}
                                onEndReachedThreshold={0.1}
                                onEndReached = {
                                    this.state.filtered?null
                                    :this.onEndReached
                                }
                                showsVerticalScrollIndicator={false}
                                ListHeaderComponent = { <HeaderDrawer {...this.props} style={styles.header} hiddenSearchIcon={true} >
                                    <AntDesign name='filter' size={AppIconSize} color={Appcolor} style={styles.iconFilter} onPress={this.navigateToScreen('FilterListing',this.filterListing)} />
                                </HeaderDrawer> }
                                ListFooterComponent={this.ListFooterComponent()}
                                extraData={this.state.page}
                                style={styles.container}
                            />
                        :null
                    }
                    {
                        this.state.filtered&&!this.state.page.length&&!this.props.loading
                        ?   <View style={[styles.filter]}>
                                <AntDesign name='frowno' size={150} color='#eee' style={styles.iconSad} />
                                <TextApp style={styles.noResult} >{I18n.t('noResultForFilter')}</TextApp>
                                <TextApp onPress={this.resetFilter} >{I18n.t('resetFilter')}</TextApp>
                            </View>
                        :   null
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
        backgroundColor:'#fff'
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
        // backgroundColor:Appcolor
    },
    loading:{
        height,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    thumbnail:{
        width:null,
        height:null,
        resizeMode:'cover',
        flex:1
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
    ctnImg:{
        width:100,
        height:100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    content:{
        marginLeft:10,
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
    bottom:{
        flexDirection:'row',
        alignItems: 'center',
    },
    statusText:{
        position: 'absolute',
        right:0
    },
    title:{
        fontSize:H3,
        marginBottom:5,
        // color:'#566985'
    },
    textAddress:{
        // color:'#efefef'
    },
    footer:{
        height:40,
        justifyContent:'center',
        alignItems: 'center',
    },
    iconFilter:{
        position: 'absolute',
        right:10,
        ...Platform.select({
            ios:{
                top: 45
            },
            android:{
                zIndex:10
            }
        })
    },
    iconOverlay:{
        position:'absolute',
        zIndex:-1

    },
    filter:{
        position: 'absolute',
        alignSelf: 'center',
        top:'40%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    noResult:{
        fontSize:H1,
        fontWeight: 'bold',
    }
})
const mapStateToProps = (state)=>({
	page:state.listings.page,
	loading:state.loading
})
const mapDispatchToProps = (dispatch)=>({
	getPage:(number)=>dispatch(getPage(number))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListingPage)