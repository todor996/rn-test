
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Animation from 'lottie-react-native';
import { AppIconSize, AppIconLarge } from '../../../../styles';
class Rating extends React.PureComponent {
    componentDidMount(){
        this.animation.play()
    }
    _renderRating = ()=>{
        let starStyle = {width:20,height:20,transform:([{scale:1.2}])}
        let rating = Array();
        // for(let i=0;i<Number(this.props.rating);i++){
        //     rating.push(
        //         <Animation source={require('../../../../img/star.json')} key={i} style={starStyle} autoPlay={true} ref={(animation)=>this.animation=animation} />
        //     )
        // }
        for(let i=0;i<5-Math.round(this.props.rating);i++){
            rating.push(
                <Icon name='star-outline' size={AppIconLarge} color='#FACC39' key={i+'star'} />
            )
        }
        return rating;
    }
    
    render(){
        return(
            this._renderRating()
        )
    }
}

export default Rating;