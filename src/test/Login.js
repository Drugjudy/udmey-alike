import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../frontend/student-portal/css/login.css"
import "../frontend/student-portal/css/login.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Idk } from "../firebase";



function Login  ({ setIsAuth })  {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])



  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((result) => {
        localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/createpost");
      })
    } catch (error) {
      const test = () => (error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ).then((result) => {
        localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/createpost");
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <>
 <div className="bgbody">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        
    </div>
    
    <div className="title">
      <h1 >
        Welcome Curious Learners
      </h1>
    </div>
      
    <div className="right">
      
        <h3>New Learners</h3>

        <label htmlFor="username">Email</label>
        <input onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} type="password" placeholder="Password" id="password" />

        <button onClick={register} >Register</button>
        <div className="social">
         <a onClick={signInWithGoogle}>
           <div>
             google
           </div>
         </a>
      
   </div> 
         </div >
         

        <div className="left">
        <h3>Learners login</h3>
         <label htmlFor="username">Email</label>
        <input  onChange={(event) => {
            setLoginEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="usernamelog" />

        <label htmlFor="password">Password</label>
        <input onChange={(event) => {
            setLoginPassword(event.target.value);
          }}  type="password" placeholder="Password" id="passwordlog" />

        <button onClick={login}>Log In</button>
        
  
   </div>
</div>
    
  
    </>
  );
}

export default Login;