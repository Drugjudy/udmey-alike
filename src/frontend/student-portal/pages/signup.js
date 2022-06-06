import EmailLog from "../../../backend/login-email";



function Signup() {
    return(
         <>



    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
        
    </div>
    
    <div className="title">
      <h1 >
        Welcome Curious Learners
      </h1>
    </div>
      
    <div className="right">
      
        <h3>New Learners</h3>

        <label for="username">Email</label>
        <input onChange={(event) => {
           EmailLog.setRegisterEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input onChange={(event) => {
             EmailLog.setRegisterPassword(event.target.value);
          }} type="password" placeholder="Password" id="password" />

        <button onClick={ EmailLog.register} >Register</button>
         </div >

        <div className="left">
        <h3>Learners login</h3>
         <label for="username">Email</label>
        <input  onChange={(event) => {
             EmailLog.setLoginEmail(event.target.value);
          }} type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input onChange={(event) => {
            EmailLog. setLoginPassword(event.target.value);
          }}  type="password" placeholder="Password" id="password" />

        <button onClick={ EmailLog.login}>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google" ></i>  Google</div>
        
   </div> 
  
   </div>


    </>
    )
}

export default Signup;