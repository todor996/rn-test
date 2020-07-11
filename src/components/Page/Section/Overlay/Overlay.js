
import React, { Component } from 'react';
import Classic from './Classic/Classic';
import Gradient from './Gradient/Gradient';

const Overlay = props=>{
    if(props.settings.background_overlay_background==="classic"){
        return (
            <Classic {...props} />
        )
    }else{
        return(
            <Gradient {...props} />
        )
    }
}
export default Overlay