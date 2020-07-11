

import React, { Component } from 'react'
import { 
    FlatList,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {getMembers} from '../../../../actions/MemberActions';
import RenderItem from './RenderItem';

class MembersGrid extends Component {
    static defaultProps = {
        setting:{
            posts_per_page: 3,
            order_by:'Date',
            order:'Descending'
        }
    }
    UNSAFE_componentWillMount(){
        //console.log("Members Grid",this.props);
        let {setting} = this.props
        let query = {
            posts_per_page:setting.posts_per_page?setting.posts_per_page:3 ,
            order_by:setting.order_by?setting.order_by: 'Date',
            order: setting.order?setting.order: 'Descending',
        }
        setting.ids?query['ids'] = setting.ids:null;
        setting.ids_not?query['ids_not'] = setting.ids_not:null;
        this.props.getMembers(query)
    }
    _renderItem = ({item,index})=>{
        return(
            <RenderItem member={item} />
        )
    }
    _key = (item,index)=>index.toString()
    render() {
        //console.log("Members Grid",this.props)
        return (
            this.props.members.length!==0?
                <FlatList
                    data={this.props.members}
                    renderItem={this._renderItem}
                    keyExtractor={this._key}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.container}
                />
            :null
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        marginBottom:30
    }
})

function mapStateToProps(state){
    return{
        members:state.members
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMembers:(data)=>dispatch(getMembers(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MembersGrid)