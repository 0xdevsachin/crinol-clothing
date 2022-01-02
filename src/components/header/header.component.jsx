import React from "react";

import './header.style.css'
import { auth } from "../../firebase/firebase.utils"
import { Link, useHistory  } from "react-router-dom";
import NavLogo from '../../images/logo.png'
import CartIcon from "../cart-icon/cart.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/action/actions";
const Header = () =>{
    const userState = useSelector(state => state.authReducer);
    const history = useHistory()
    const CartState = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    return(
        <div className="header">
            <Link to="/"><img className="header-img" src={NavLogo} alt="header-img" /></Link>
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                userState.user ?
                <div className="option" onClick={() => {
                    auth.signOut()
                    dispatch(removeUser(null))
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