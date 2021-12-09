import React from "react";
import './custombutton.style.css'
const CustomButton = ({children, google,...otherprops}) =>{
    return(
        <button className={ `${google ? "google" : ""} custom-button`} {...otherprops}> {children} </button>
    )
}


export default CustomButton;