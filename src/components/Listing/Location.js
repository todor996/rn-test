
import React, { Component } from 'react';
import { 
    View, 
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import { TextApp } from '../App';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppIconSize, Appcolor } from '../../styles';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    setLocation = (location)=>()=>{
        this.props.setLocation(location)
    }
    renderLocation = ()=>{
        let locations = []
        for(let key in this.props.locations){
            locations.push(
                <TouchableOpacity key={key} style={[styles.location]} activeOpacity={1} onPress={this.setLocation(this.props.locations[key])} >
                    <TextApp style={styles.textLocation}>{this.props.locations[key]}</TextApp>
                    {
                        this.props.location===this.props.locations[key]
                        ?   <Ionicons name='ios-radio-button-on' size={AppIconSize} color={Appcolor} style={styles.icon} />
                        :   <Ionicons name='ios-radio-button-off' size={AppIconSize} color={Appcolor} style={styles.icon} />
                    }
                    
                </TouchableOpacity>
            )
        }
        return locations
    }
    render() {
        return (
            this.renderLocation()
        );
    }
}

const styles = StyleSheet.create({
    location:{
        height:50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    icon:{
        position: 'absolute',
        right:10
    }
})
function mapStateToProps(state){
    return{
        locations:state.listings.locations
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Location)