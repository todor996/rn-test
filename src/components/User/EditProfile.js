import React, { Component } from 'react'
import { 
  View, 
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import inputs from './Inputs'
import {connect} from 'react-redux'
import {updateUser} from 'actions/UserActions'
import {TextApp} from 'App'
import I18n from 'language/I18n'
import HeaderStack from '../Inners/HeaderStack';
import { H2, AppFontSize, AppFontFamily, Appcolor } from '../../styles';
import { ReplaceLink } from '../App';

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    placeholder=(item)=>{
        // //console.log(item)
        
        // //console.log(meta.first_name[0])
        if(item.placeholder){
            let placeH = item.placeholder;
            let meta = this.props.user.data.meta;
            let placeholder =  meta[placeH]!==undefined ? meta[placeH][0]?meta[placeH][0] :item.defaultH:item.defaultH;
            return placeholder;
        }
        else{
            let placeH = item.placeH!==undefined ?item.placeH:undefined;
            let {data} = this.props.user;
            let placeholder = data[placeH]!==''?data[placeH]:item.defaultH;
            return placeholder
        }
    }
    onChangeText = (name)=>(text)=>{
        this.setState({
            [name]:text
        })
    }
    renderInput = ()=>{
        //Render input 
        let result = inputs.map((input,i)=>{
        let border = input.editable?{}:{borderBottomColor:'#f471d6'}
        return(
                <React.Fragment key = {i} >
                    <TextApp style={styles.text} >{I18n.t(input.title)}</TextApp>
                    <TextInput 
                        editable={input.editable} 
                        placeholder={this.placeholder(input)}
                        style={[styles.input,border]}
                        onChangeText={this.onChangeText(input.name)}
                    />
                </React.Fragment>
            )
        })
        return result;
    }
    onPress = ()=>{
        //update user meta
        // this.setState({showOverlay:true})
        //console.log(this.data)
        this.props.updateUser(this.state,this.props.user.ID);
    }
    componentDidUpdate(prevProps){
        if(this.props.user!==prevProps.user){
            
        }
    }
    render() {
        //console.log("EDIT PROPS",this.props)
        //console.log("EDIT STATE",this.state)
        return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <HeaderStack {...this.props} style={styles.header} />
                <View style={styles.container}>
                    <View style={styles.ctnImg}>
                        <Image source={{uri:ReplaceLink(this.props.user.data.avata)}} style={styles.image} />
                    </View>
                    <TextApp style={styles.textTitle}>{I18n.t('editProfile')}</TextApp>
                    {this.renderInput()}
                    <TouchableOpacity style={styles.button} activeOpacity={1} onPress={this.onPress} >
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Appcolor, '#f471d6']} style={styles.linearGradient}>
                            <TextApp style={styles.textSave} >{I18n.t('saveProfile')}</TextApp>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10,
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fff'
    },
    textSave:{
        color:'#fff',
        position:'absolute',
        right:10,
    },
    textTitle:{
        marginTop:10,
        marginBottom: 20,
        fontSize:H2,
        color:'#000',
        fontWeight: 'bold',
    },
    header:{
        backgroundColor:'#fff'
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor: '#eee',
        marginBottom: 10,
        fontSize:AppFontSize,
        // fontFamily: AppFontFamily,
        padding: 0,
        margin: 0,
        paddingBottom: 5,
    },
    text:{
        marginBottom:20
    },
    button:{
        marginHorizontal:10,
        shadowColor: Appcolor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 2,
        marginVertical: 40,
    },
    linearGradient:{
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSave:{
        color:'#fff',
        fontWeight:'bold'
    },
    ctnImg:{
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        shadowColor:'#eee',
        shadowOpacity:0.5,
        shadowOffset:{
            width:0,
            height:5
        }
    }
})
function mapStateToProps(state){
    return{
        user:state.users.userData.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        updateUser:(data,id)=>dispatch(updateUser(data,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);