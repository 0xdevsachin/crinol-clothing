import React from "react";

import { toogleCart } from "../../redux/action/cart";
import { useDispatch } from "react-redux";
import {ReactComponent as ShopingIcon} from "../../images/shopping-bag.svg"
import './cart.style.css'

const CartIcon = () =>{
    const dispatch = useDispatch();
    return(
        <div className="cart-icon" onClick={() => {
            dispatch(toogleCart())
        }  }>
            <ShopingIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

export default CartIcon