import React from 'react';
import { 
    View, 
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {ReplaceLink} from 'App';
import Content from './Inners/Content';
import {Overlay} from 'App';
//
const HeroSectionBgImage = ((BaseComponent)=>(props)=>{
    return(
        <View style= {styles.container} >
            {
                props.settings.bgimage?
                    <ImageBackground 
                        source={{uri:ReplaceLink(props.settings.bgimage.url)}} 
                        style={styles.heroSection}
                        resizeMode='cover'
                    >
                        <BaseComponent {...props} />
                        <Overlay />
                    </ImageBackground>
                :   null
            }
        </View>
    )
})(Content)
export default HeroSectionBgImage
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    heroSection:{
        flex:1,
        height:300,
        justifyContent:'center',
    },
})
