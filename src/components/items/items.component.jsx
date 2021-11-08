import React from "react";

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
        </div>
    )
}
export default DisplayItems;