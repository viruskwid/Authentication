import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase-config";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const loggedInUser = userCredential.user;
      console.log(loggedInUser);
      navigate("/landing");
    } catch (error) {
      toast.error("Invalid User Credentials", {
        duration: 1000,
        transitionDuration: 300,
        ariaLive: "assertive",
      });
      console.error("Error during login:", error);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/landing");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <>
    <div style={{height:'100vh'}} className="w-100 m-0  bg-secondary  d-flex  justify-content-center  align-items-center ">
      <div style={{height:'400px', width:'370px'}} className=" shadow  rounded  ">
         <div className="container-fluid text-center mt-3 ">
           <h3 className="text-light  fw-bold ">Log in</h3>

           <div className="container-fluid  align-content-center ">
              <div className="d-flex flex-column  text-start mt-3">
                <label className="mt-3 text-light " htmlFor="email">Email:</label>
                <input className="border-light  rounded mt-1  " type="text" id="email" placeholder="Enter Email "  onChange={(e) => setLoginEmail(e.target.value)}/>
                <label className="mt-3 text-light " htmlFor="password">Password:</label>
                <input className="border-light  rounded mt-1" type="text" id="password" placeholder="Enter password" onChange={(e) => setLoginPassword(e.target.value)} />
              </div>
              <div className=" mt-4 d-flex flex-column ">
                <button onClick={signInGoogle} className="btn btn-light mt-2 "><i class="fa-brands fa-google me-2"></i>Sign in with google</button>
                <button onClick={handleLogin} type="submit" style={{backgroundColor:'#5390F4'}} className="btn mt-3">Log in</button>
             <div className="d-flex  align-items-center  justify-content-center "> <div style={{width:'80px' , height:'1px' , backgroundColor:'white'}} className="mt-3"></div> <Link to={"/register"} className="text-decoration-none text-light mt-3 ms-1 me-1"><span> Or sign up </span></Link><div  style={{width:'80px' , height:'1px' , backgroundColor:'white'}} className="mt-3"></div></div>
              </div>

           </div>
         </div>
      </div>

    </div>
    <Toaster position="top-center" />
    </>
  );
};

export default Login;