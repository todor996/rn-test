import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Content,Accordion } from 'native-base';
import { AppFontSize } from '../../../../styles';

export default class AccordionTab extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    _getDataArray = ()=>{
        // //console.log(this.props.setting)
        let dataArray =  Array();
        this.props.setting.tabs.forEach((tab,index)=>{
            let t = {};
            t.title = tab.tab_title;
            let content = tab.tab_content;
            t.content = content.replace('</p>','').replace('<p>','');
            dataArray.push(t);
        })
        // //console.log(dataArray)
        return dataArray
    }
    render() {
        //console.log("Accordion",this.props)
        //console.log("Accordion",this._getDataArray())
        return (
            <View style={styles.container}  >
                <Content>
                    <Accordion 
                        dataArray={this._getDataArray()}
                        headerStyle={styles.accHeader}
                        expanded={0}
                        icon="add" expandedIcon="remove"
                        contentStyle={styles.accContent}
                    />
                </Content>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:10,
        marginRight: 10,
        overflow: 'hidden',
    },
    accHeader:{
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        borderRadius:3,
    },
    accContent:{
        backgroundColor: '#fff',
        fontSize:AppFontSize,
        // fontFamily:'Quicksand',
        color:'grey'
    }
})
