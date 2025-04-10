import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import "./pageCss/signin.css"


const Signin = () =>{
    const [user , setUser] =useState(null)
    const [email , setEmail] =useState("")
    const [pass , setPassword] =useState("")



    const navigate = useNavigate();

    const handleGoogleLogin = () =>{
        const response =window.open("https://meetup-backend-8rsw.onrender.com/users/google" , "_self")
        navigate("/")
        console.log(response)
    }


    useEffect(()=>{
        axios.get("https://meetup-backend-8rsw.onrender.com/users/google" ,{withCredentials:true})
        .then((res)=>{
            setUser(res.data)
            console.log(res.data)
            localStorage.setItem("user" ,JSON.stringify(res.data));
            navigate("/")
        })
    })


    const handleSignIn =async (e) =>{
        e.preventDefault();
        try {
            const response  = await axios.post("https://meetup-backend-8rsw.onrender.com/users/signin" ,{
                email,
                pass
            })
            
    
            if (response.status === 200) { 
                setEmail("")
                setPassword("")
                console.log("Login successful:", response.data);
                navigate('/');  
            } else {
                console.log("Unexpected response:", response);
            }
        } catch (error) {
            console.log("Sign-in error:", error);
        }
    }



    
    return(
        <div id="login">
    
            <div className="login-container">
                    
                    <h2>Sign In</h2>
                    
                    <form onSubmit={handleSignIn}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Sign In</button>
                    </form>
                <button onClick={handleGoogleLogin} >Sign in with Google</button>
                <a href="/signup">If you are new ,Please Sign up</a>
            </div>
        
        </div>

        
    )
}

export default Signin ;