import React from "react";
import CustomButton from "../custombutton/Custombutton.component";

import './items.style.css'
const DisplayItems = ({id, name, imageUrl, price}) =>{
    return(
        <div className='items' key={id}>
                <div className="image"
                    style={{
                    backgroundImage : `url(${imageUrl})`,
                    }}
                />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}$</span>
                </div>
                <CustomButton invert>ADD TO CART</CustomButton>
        </div>
    )
}
export default DisplayItems;