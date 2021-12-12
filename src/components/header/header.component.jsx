import React from "react";

import './header.style.css'
import { auth } from "../../firebase/firebase.utils"
import { Link  } from "react-router-dom";
import { connect } from "react-redux";
import NavLogo from '../../images/logo.png'
const Header = ({ currentUser }) =>{
    return(
        <div className="header">
            <Link to="/"><img className="header-img" src={NavLogo} alt="header-img" /></Link>
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">SignIn</Link>
            }
            </div>
        </div>
    )
}

const reduxFunction = state => ({
    currentUser : state.user.currentUser
})

export default connect(reduxFunction)(Header);