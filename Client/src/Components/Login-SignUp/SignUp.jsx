import React, { useState } from "react";
import { Input, Button,  } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";
import Lottie  from "lottie-react";
import SignupAnimation from "../../assets/Animations/Signup.json";

function SignUp() {
  const [signUpInformation, setSignUpInformation] = useState({
    email: "",
    password: "",
    displayName: "",
  });
 

  function signupValueHandler(e) {
    const { name, value } = e.target;

    setSignUpInformation((object) => ({ ...object, [name]: value }));
  }


  async function signupHandler() {
    try{
        const {displayName,email,password} = signUpInformation;

const signupData = await createUserWithEmailAndPassword(authentication,email,password,displayName)
window.location.assign("/");



    }catch(err){
        console.log(err.message)
        window.alert(err.message)
    }

    
  }

  return (
    <div className="SignUp-Container">
      <div className="animation" >
        <Lottie animationData={SignupAnimation}></Lottie>
      </div>
      <section className="SignUp-Wrapper">

      <h1 className="login-H1">SignUp</h1>
          <Input
            isRequired
            radius="lg"
            type="email"
            name="username"
            label="Username"
            variant="underlined"
            placeholder="Enter Username"
           
     
            value={signUpInformation.username}
            onChange={signupValueHandler}
          />
          <Input
            isRequired
            type="email"
            name="email"
            label="Email"
            variant="underlined"
            placeholder="Enter Your Email"
            value={signUpInformation.email}
            onChange={signupValueHandler}
          />
          <Input
            isRequired
            type="password"
            name="password"
            label="Password"
            variant="underlined"
            placeholder="Enter Your Password"
            value={signUpInformation.password}
            onChange={signupValueHandler}
          />
          <section className="Grid">
              <div style={{fontSize:"1rem",fontWeight:"600"}}>
                  <h1> <Link to = "/Login"> Login Instead?</Link></h1>
              </div>
          </section>
              <button  onClick={signupHandler} className=" login-btn">SignUp</button>
           </section>
     
    </div>
  );
}

export default SignUp;
