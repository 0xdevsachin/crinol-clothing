import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-items/cart-item.component";

import CustomButton from '../custombutton/Custombutton.component'

import './cart.style.css'

function CartDropdown() {
    const data = useSelector(state => state.cartReducer.cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {data.map(items =>{
                    return <CartItem key={items.id} item={items} />
                })}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
