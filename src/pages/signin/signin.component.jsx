import React from "react";
import './signin.style.css'
import CustomButton from "../../components/custombutton/Custombutton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const signin = () =>{
    return(
        <div className="sign-in">
            <div className="formbox">
                <form className="form" autoComplete="off">
                    <label className="title">Sign In</label>
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="Email" />
                    <label>Password</label>
                    <input name="password" autoComplete="off" type="password" required placeholder="Password" />
                    <div className="btns">
                    <CustomButton type="submit" >Sign In </CustomButton> <CustomButton onClick={signInWithGoogle} type="button" google >Sign In with Google</CustomButton>
                    </div>    
                </form>
            </div>
            <div className="formbox">
                <form className="form" autoComplete="off">
                    <label className="title">I don't have an Acount </label>
                    <label>Sign up with Email and Password </label>
                    <label>Display Name</label>
                    <input name="name" type="text" required placeholder="Name" />
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="Email" />
                    <label>Password</label>
                    <input name="password" autoComplete="off" type="password" required placeholder="Password" />
                    <label>Confirm Password</label>
                    <input name="password" autoComplete="off" type="password" required placeholder="Confirm Password" />
                    <div className="btns">
                    <CustomButton type="submit" >Sign Up </CustomButton> <CustomButton onClick={signInWithGoogle} type="button" google>Sign Up with Google</CustomButton>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default signin;