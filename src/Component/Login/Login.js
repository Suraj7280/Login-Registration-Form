import React,{useState} from 'react'
import loginim from "./login-im.svg";
import "./Login.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import axios from "axios"


export default function Login(){

    const [user,setUser] = useState({
        emailorphone:"",
        password:"",
    })

    const handleChange = e =>{
        const {name , value } =e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login =()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res =>{
            alert(res.data.message)
        })
    }

    return(

        <>
        <div className="Login-registration-box">
        <div className="Login-Container-first">
        {console.log("User",user)}
            <div className="login-left-right">
                <div className="login-svg-left">
                    <form>
                        <h2  className="sign-deco">Sign In</h2>
                        <div className="column-field">
                            <div className="login-field">
                                <TextField id="standard-basic" name="emailorphone" label="Email or Phone" variant="standard"
                                value={user.emailorphone}
                                onChange={handleChange}
                                />
                            </div> 
                            <div className="login-field">
                                <TextField id="standard-basic" name="password" label="Password" variant="standard"
                                value={user.password}
                                onChange={handleChange}
                                />
                            </div> 
                            <div className="for-sign">
                                <a href="/" className="login-forgt">Forgot password?</a>
                                <Link to='/Registration' className="login-sign">Sign Up</Link>
                            </div>
                            <div>
                            <button type="button" className="l-button" onClick={login}>Sign In</button>
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