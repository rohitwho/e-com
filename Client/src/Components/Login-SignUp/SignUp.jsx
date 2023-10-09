import React, { useState } from "react";
import { Input, Button,  } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";

function SignUp() {
  const [signUpInformation, setSignUpInformation] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  console.log(signUpInformation);

  function signupValueHandler(e) {
    const { name, value } = e.target;

    setSignUpInformation((object) => ({ ...object, [name]: value }));
  }


  async function signupHandler() {
    try{
        const {displayName,email,password} = signUpInformation;

const signupData = await createUserWithEmailAndPassword(authentication,email,password,displayName)
window.location.assign("/");
console.log(signupData);


    }catch(err){
        console.log(err.message)
        window.alert(err.message)
    }

    
  }

  return (
    <div className="SignUp-Container">
      <section className="SignUp-Wrapper">
          <Input
            isRequired
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
              <div>
                  <h1>Already Have an Account ? <Link to = "/Login"> LogIn</Link></h1>
              </div>
              <div><Button onClick={signupHandler}>SignUp</Button></div>
          </section>
      </section>
    </div>
  );
}

export default SignUp;
