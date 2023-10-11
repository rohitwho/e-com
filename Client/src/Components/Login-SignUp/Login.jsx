import React, { useState } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";
import Lottie  from "lottie-react";
import SignupAnimation from "../../assets/Animations/Signup.json";

function Login() {
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected);

  function loginHandler(e) {
    const { name, value } = e.target;

    setLoginInformation((password) => ({ ...password, [name]: value }));
  }
async function handleLogin() {

try{
    const { email, password } = loginInformation;
    const user = await signInWithEmailAndPassword(authentication,email,password);

    window.location.assign("/");

    
  
}catch(err){
    console.log(err.message);
    window.alert(err.message)
}

    
}
function forgotPassword() {
  console.log("forgotPassword");
  
}

  return (
    <div  className="SignUp-Container">
      <div className="animation">
        <Lottie animationData={SignupAnimation}></Lottie>
      </div>
      <section className="SignUp-Wrapper" >

        <h1 className="login-H1">Login</h1>
        
        <Input
          isRequired
          type="email"
          name="email"
          label="Email"
          variant="underlined"
          placeholder="Enter Your Email"
          value={loginInformation.email}
          onChange={loginHandler}
        />
        <Input
          isRequired
          type="password"
          name="password"
          label="Password"
          variant="underlined"
          placeholder="Enter Your Password"
          value={loginInformation.password}
          onChange={loginHandler}
        />
      <aside>
             <div style={{ display: "flex", padding: "2%" ,color:"white"}}>
          
                 <h1  style={{fontSize:"15px"}}onClick={forgotPassword}>  Forgot Password?</h1>
             
      
               <div  >
                 <Checkbox radius="full" color="primary"  isSelected = {isSelected} onValueChange={setIsSelected}> Remember Me?</Checkbox>
               </div>
             
             </div>
      </aside>
        <button  onClick={handleLogin} className=" login-btn">LogIn</button>
        </section>
    </div>
  );
}

export default Login;
