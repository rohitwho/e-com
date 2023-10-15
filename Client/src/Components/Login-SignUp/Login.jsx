import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "../../../Auth/firebase";
import Lottie from "lottie-react";
import SignupAnimation from "../../assets/Animations/Signup.json";

function Login() {
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isSelected, setIsSelected] = useState("");
  const [isVisible, setIsVisible] =useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  function loginHandler(e) {
    const { name, value } = e.target;

    setLoginInformation((password) => ({ ...password, [name]: value }));
  }
  async function handleLogin() {
    try {
      if (loginInformation) {
        const { email, password } = loginInformation;
        const user = await signInWithEmailAndPassword(
          authentication,
          email,
          password
        );

        window.location.assign("/");
      }
    } catch (err) {
      console.log(err.message);
      showModal(err.message);
    }
  }
  function showModal(message) {
    onOpen();
    setIsSelected(message);
  }
  async function forgotPassword() {
    try {
      const { email } = loginInformation;
      if (email === "") {
        showModal("Please Enter Email in order to reset Password");
        return;
      } else {
        const forgotPassword = await sendPasswordResetEmail(
          authentication,
          email
        ).then(() => {
          showModal("A Reset Link has been Sent To the entered Email");
        });
      }
    } catch (err) {
      showModal(err.message);
      console.log(err);
    }
  }

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Shop All
              </ModalHeader>
              <ModalBody>
                <p>{isSelected}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="SignUp-Container">
        <div className="animation">
          <Lottie animationData={SignupAnimation}></Lottie>
        </div>
        <section className="SignUp-Wrapper">
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
            color="primary"
          />
          <Input
            isRequired
            type={isVisible ? "text" : "password"}
            name="password"
            label="Password"
            variant="underlined"
            placeholder="Enter Your Password"
            color="primary"
            value={loginInformation.password}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>&#9787;</button>
                }
            onChange={loginHandler}
          />
          <aside className="Form-Action">
            <button type="button" onClick={forgotPassword}> Forgot Password?</button>
          </aside>
          <button onClick={handleLogin} className=" login-btn">
            LogIn
          </button>
        </section>
      </div>
    </>
  );
}

export default Login;
