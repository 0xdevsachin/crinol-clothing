import React from "react";
import './signin.style.css'
import CustomButton from "../../components/custombutton/Custombutton.component";
const signin = () =>{
    return(
        <div className="sign-in">
            <div className="formbox">
                <form className="form">
                    <label className="title">Sign In</label>
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="Email" />
                    <label>Password</label>
                    <input name="password" type="password" required placeholder="Password" />
                    <div className="btns">
                    <CustomButton type="submit" name="Sign In" /> <CustomButton type="submit" name="Sign In with Google" bg="blue" />
                    </div>    
                </form>
            </div>
            {/* <div className="formbox">
                <form className="form">
                    <label className="title">I don't have an Acount </label>
                    <label>Sign up with your email and password </label>
                    <label>Display Name</label>
                    <input name="name" type="text" required placeholder="Name" />
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="Email" />
                    <label>Password</label>
                    <input name="password" type="password" required placeholder="Password" />
                    <label>Confirm Password</label>
                    <input name="password" type="password" required placeholder="Confirm Password" />
                    <CustomButton type="submit" name="Sign Up" /> 
                </form>
            </div> */}
        </div>
        
    )
}

export default signin;