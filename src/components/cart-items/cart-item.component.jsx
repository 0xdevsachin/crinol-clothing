import React from "react";

import './cart-item.style.css'
const CartItem = ({item}) =>{
    const { imageUrl, price, quantity } = item
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="CartImage" />
            <span className="price">
                {quantity} X ${price}
            </span>
        </div>
    )
}

export default CartItem