import React from 'react'
import { 
    StyleSheet,
    View,
} from 'react-native';
import OpenModal from './OpenModal';
import ListComment from './ListComment'

class Item extends React.PureComponent {
    render() {
        //console.log("Comment Item",this.props)
        return (
            <View style={[styles.container,this.props.style]} >
                <ListComment comments = {this.props.item.comments} id={this.props.item.id} />
                <OpenModal id = {this.props.item.id} />
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex:1
    },
 })
 export default Item;