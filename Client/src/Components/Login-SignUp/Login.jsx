import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../Auth/firebase";


function Login() {
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });

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
  return (
    <div className="SignUp-Container">
      <section >
        {/* {authentication.currentUser.email} */}
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
      </section>
      <aside
        style={{ display: "flex", justifyContent: "flex-end", padding: "2%" }}
      >
        <Button onClick={handleLogin}>SignIn</Button>
      </aside>
    </div>
  );
}

export default Login;
