import React from "react";

import './header.style.css'

import { Link } from "react-router-dom";
import NavLogo from '../../images/logo.png'
const Header = () =>{
    return(
        <div className="header">
            <Link to="/"><img className="header-img" src={NavLogo} alt="header-img" /></Link>
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/signin">SignIn</Link>
            <Link className="option" to="/contact">Contact</Link>
            </div>
        </div>
    )
}


export default Header;