import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {getListingWithCat} from 'actions/ListingActions';
import RenderItem from '../Page/RenderItem';
import Loading from '../../Loading';
import HeaderStack from '../../Inners/HeaderStack';

const {width,height} = Dimensions.get('window')
class ListingsOfCat extends Component {
    componentDidMount(){
        //Get listing with category id 
        this.props.getListingWithCat(this.props.navigation.state.params)
    }
    _keyExtractor = (item,index)=>index.toString()
    _renderItem=({item,index})=>{
        return(
            <RenderItem item={item} index={index}/>
        )
    }
    render() {
        //console.log("Listing With Cat",this.props)
        return (
            <ScrollView style= {styles.scrollView} >
                <HeaderStack {...this.props} style={styles.header} />
                {
                        this.props.listingWithCat.length!==0?
                            <View style={styles.container}>
                                <FlatList
                                    data={this.props.listingWithCat}
                                    keyExtractor={this._keyExtractor}
                                    renderItem = {this._renderItem}
                                    showsVerticalScrollIndicator={false}
                                    // numColumns={2}
                                />
                            </View>
                        :
                        <View style={styles.loading}>
                            <Loading />
                        </View>
                    }
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
    },
    header:{
        backgroundColor:'#fff'
    },
    scrollView:{
        flex:1,
    },
    loading:{
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height
    }
})
function mapStateToProps(state){
    return{
        listingWithCat:state.listings.listing_of_cat
    }
}
function mapDispatchToProps(dispatch){
    return{
        getListingWithCat:(id)=>dispatch(getListingWithCat(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListingsOfCat)
