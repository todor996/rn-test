import React from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions
} from 'react-native';
import Video from 'react-native-video';
import Content from './Inners/Content';

const {width} = Dimensions.get('window');

const HeroSectionVideo = ((BaseComponent)=>(props)=>{
    return(
        <View style= {styles.container} >
            {
                props.settings.video_url
                ?   <Video source={ {uri: props.settings.video_url} } style={styles.video} repeat={true} resizeMode={'cover'} muted={true} />
                :   null
            }
            <View style={styles.content}>
                <BaseComponent {...props} />
            </View>
        </View>
    )
})(Content)
export default HeroSectionVideo
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    video:{
        width,
        height:195,
        padding: 0,
        margin: 0,
    },
    content:{
        position: 'absolute',
        alignSelf: 'center',
    }
})
