import React from "react";

import './header.style.css'
import { auth } from "../../firebase/firebase.utils"
import { Link, useHistory  } from "react-router-dom";
import NavLogo from '../../images/logo.png'
const Header = () =>{
    const userState = localStorage.getItem('crinol-clothing');
    const history = useHistory()
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
            </div>
        </div>
    )
}


export default Header;