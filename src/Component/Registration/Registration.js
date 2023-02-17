import React, { useState } from 'react'
import loginim from "./login-im.svg";
import "./Registration.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import axios from "axios"



const Registration =() =>{
    
    const [user,setUser] = useState({
        emailorphone:"",
        password:"",
        cpassword:""
    })

    const handleChange = e =>{
        const {name , value } =e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {emailorphone,password,cpassword} = user
        if(emailorphone && password && cpassword && (password === cpassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res=>{alert(res.data.message)})
        }else{
            alert("invalid")
        }
        
    }
  
    return(
        <>
        <div className="Login-registration-box">
        <div className="Login-Container-first">
            {console.log("User",user)}
            <div className="login-left-right">
                <div className="login-svg-left">
                <form>
                <h2  className="sign-deco">Sign Up</h2>
                    <div className="column-field">
                        <div className="login-field">
                            <TextField id="standard-basic" name="emailorphone" value={user.emailorphone} label="Email or Phone" variant="standard"
                                onChange={handleChange}
                            />
                        </div> 
                        <div className="login-field">
                            <TextField id="standard-basic" name="password" value={user.password} label="Password" variant="standard"
                                onChange={handleChange}
                            />
                        </div> 
                        <div className="login-field">
                            <TextField id="standard-basic" name="cpassword" value={user.cpassword} label="Confirm Password" variant="standard"
                                onChange={handleChange}
                            />
                        </div> 
                        <div className="for-sign">
                        <a href='/' className="login-fo">Already have an account? </a><Link to='/' className="login-sign">Sign In</Link>
                        </div>
                        <div>
                        <button type="submit" className="l-button" onClick={register}>Sign Up</button>
                        </div>
                        
                    </div>   
                </form>
                </div>
                <div className="login-svg-right">
                <img className="loginim" src={loginim} alt="Your SVG" />
                </div>
            </div>
           
        </div>
        </div>
        </>
    )
}
export default Registration;