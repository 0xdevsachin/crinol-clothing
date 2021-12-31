import React from "react";

import './header.style.css'
import { auth } from "../../firebase/firebase.utils"
import { Link, useHistory  } from "react-router-dom";
import NavLogo from '../../images/logo.png'
import CartIcon from "../cart-icon/cart.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useSelector } from "react-redux";
const Header = () =>{
    const userState = localStorage.getItem('crinol-clothing');
    const history = useHistory()
    const CartState = useSelector(state => state.cartReducer)
    return(
        <div className="header">
            <Link to="/"><img className="header-img" src={NavLogo} alt="header-img" /></Link>
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                userState ?
                <div className="option" onClick={() => {
                    auth.signOut()
                    localStorage.removeItem('crinol-clothing')
                    history.push('/')
                }}>Sign Out</div>
                :
                <Link className="option" to="/signin">SignIn</Link>
            }
            <CartIcon />
            </div>
            {
                CartState.hidden ? null : <CartDropdown />
            }
        </div>
    )
}


export default Header;