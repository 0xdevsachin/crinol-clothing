import React from "react";

import CustomButton from '../custombutton/Custombutton.component'

import './cart.style.css'

function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
