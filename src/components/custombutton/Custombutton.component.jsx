import React from "react";
import './custombutton.style.css'
const CustomButton = ({children, bg,...otherprops}) =>{
    return(
        <button className="custom-button" style={{background: `${bg}`}} {...otherprops}> {children} </button>
    )
}


export default CustomButton;