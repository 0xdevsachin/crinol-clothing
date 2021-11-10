import React from "react";
import './custombutton.style.css'
const CustomButton = ({type, name, bg}) =>{
    return(
        <button className="custom-button" style={{background: `${bg}`}} type={type}> {name} </button>
    )
}


export default CustomButton;