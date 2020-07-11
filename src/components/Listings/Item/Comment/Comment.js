
import React from 'react';
import { 
    View,
    StyleSheet,
 } from 'react-native';
import Item from './Item/Item';
import OpenModal from './Item/OpenModal';
import Container from '../HocContainer/Container';
import HocContainer from '../HocContainer/HocContainer';

const Comments = (props)=>{
    let item =props.navigation.state.params;
    let RenderComments = ()=>{
        return(
            item.comments.length!==0 
            ?   <Item item={item}/>
            :   <View style={styles.container}>
                    <OpenModal id = {item.id} />
                </View>
        )
    }
    let Render = HocContainer(RenderComments)
    return(
        <Render item={item} />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default Comments