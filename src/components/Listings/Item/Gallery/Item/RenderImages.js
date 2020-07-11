
import React from 'react';
import {  
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import {Overlay} from '../../../../App';
import {ReplaceLink} from '../../../../App';

const RenderImages = (props) => {
    // //console.log("Render Image Props",props)
    return(
        <FlatList
            data={props.imgs}
            keyExtractor={(item,index)=>index.toString()}
            renderItem = {({item,index})=>{
                function onPress(index){
                    props.showModal(index)
                }
                return(
                    <TouchableOpacity onPress={()=>onPress(index)} style={styles.container} >
                        <Image source={{uri:ReplaceLink(item)}} style={[styles.image]} />
                        <Overlay />
                    </TouchableOpacity>
                )
            }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            cont
        />
    )
}
export default RenderImages
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        flex:1, 
        height:120,
        resizeMode:'cover',
    }
})