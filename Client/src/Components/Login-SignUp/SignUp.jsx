import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";
import Lottie  from "lottie-react";
import SignupAnimation from "../../assets/Animations/Signup.json";

function SignUp() {
  const [signUpInformation, setSignUpInformation] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const [isVisible, setIsVisible] =useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
  const provider = new GoogleAuthProvider()
  async function googleSignIn() {
     const signIn = await signInWithPopup(authentication,provider)
     const user = signIn.user
    
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
            color="primary"
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
            color="primary"
            placeholder="Enter Your Email"
            value={signUpInformation.email}
            onChange={signupValueHandler}
          />
          <Input
            isRequired
            type={isVisible ? "text" : "password"}
            name="password"
            label="Password"
            variant="underlined"
            color="primary"
            placeholder="Enter Your Password"
            value={signUpInformation.password}
            onChange={signupValueHandler}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>&#9787;</button>
                }
            
          />
          <section className="Form-Action">
 

       <p>Already Have an Account? </p>  
  
     <Link to = "/Login"> Login </Link>

      
          </section>
     <button onClick={googleSignIn}>Google?</button>
              <button  onClick={signupHandler} className=" login-btn">SignUp</button>
           </section>
     
    </div>
  );
}

export default SignUp;
