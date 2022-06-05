import { useState, useEffect } from "react";
import "../frontend/student-portal/css/login.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

function EmailLog() {
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
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>



    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    
    <div className="title">
      <h1 >
        Welcome
      </h1>
    </div>
      
    <div className="right">
      
        <h3>New Student</h3>

        <label for="username">Email</label>
        <input onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} type="password" placeholder="Password" id="password" />

        <button onClick={register} >Register</button>
         </div >

        <div className="left">
        <h3>Student Login</h3>
         <label for="username">Email</label>
        <input  onChange={(event) => {
            setLoginEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input onChange={(event) => {
            setLoginPassword(event.target.value);
          }}  type="password" placeholder="Password" id="password" />

        <button onClick={login}>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
        
   </div> 
  
   </div>


    </>
  )
}

export default EmailLog;