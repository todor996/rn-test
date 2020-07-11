import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
} from 'react-native';
import Elements from './Elements';
import {connect} from 'react-redux';
import {getPageMobileApp} from '../../actions/PageActions';
import Classic from './Section/Classic';
import Gradient from './Section/Gradient';
import Video from './Section/Video';

class Page extends Component {
    _render = ()=>{
        let elements = this.props.pageMobileApp.map((item,index)=>{
            if (item.settings instanceof Array){
                return(
                    <Elements elements={item} key={index} />
                )
            }else{
                if(item.settings.background_background==='classic'){
                   return(
                        <Classic elements={item}  style={styles.section} key={index} />
                    ) 
                }else if(item.settings.background_background==='gradient'){
                    return(
                        <Gradient elements={item} style={styles.section} key={index} />
                    )
                }else{
                    return(
                        <Video elements={item} style={styles.section} key={index}/>
                    )
                }
            }
        })
        return elements
    }
    render() {
        //console.log("PAGE PROPS",this.props)}
        return (
            <View style= {styles.container} >
                {
                    this.props.pageMobileApp.length!==0?
                        this._render()
                    :null
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    section:{
        // marginLeft:10,
        // marginRight:10
    }
})

function mapStateToProps(state){
    return{
        pageMobileApp:state.pageMobileApp
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPageMobileApp:()=>dispatch(getPageMobileApp())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)