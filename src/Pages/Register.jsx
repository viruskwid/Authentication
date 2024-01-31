import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const navigate=useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userCredential.user);
      // Update user's display name with the provided username
      await updateProfile(userCredential.user, {
        displayName: registerUsername,
      });
      const newUser = userCredential.user;
      console.log(newUser);
      navigate('/landing')
    } catch (error) {
      toast.error('Invalid User Credentials', {
        duration: 1000, 
        transitionDuration: 300,
        ariaLive: 'assertive',
      });
      console.error("Error during registration:", error);
    }
  };
  return (
    <>
    <div style={{height:'100vh'}} className="w-100 m-0  bg-secondary  d-flex  justify-content-center  align-items-center ">
      <div style={{height:'410px', width:'370px'}} className=" shadow  rounded  ">
         <div className="container-fluid text-center mt-3 ">
           <h3 className="text-light  fw-bold ">Sign-Up</h3>

           <div onSubmit={handleRegistration} className="container-fluid  align-content-center ">
              <div className="d-flex flex-column  text-start mt-3">
              <label className="mt-3 text-light " htmlFor="username">Username:</label>
                <input className="border-light  rounded mt-1  " type="text" id="username" placeholder="Enter Username "  onChange={(e) => setRegisterUsername(e.target.value)}/>
                <label className="mt-3 text-light " htmlFor="email">Email:</label>
                <input className="border-light  rounded mt-1  " type="text" id="email" placeholder="Enter Email " onChange={(e) => setRegisterEmail(e.target.value)}/>
                <label className="mt-3 text-light " htmlFor="password">Password:</label>
                <input className="border-light  rounded mt-1" type="text" id="password" placeholder="Enter password"  onChange={(e) => setRegisterPassword(e.target.value)} />
              </div> 
              <div className=" mt-4 d-flex flex-column mt-2">
                <button type="submit" className="btn btn-light mt-2 ">Sign-up</button>
                <p>Already you have an account?<Link className="btn btn-info mt-2 ms-1 " to={"/"} >Login</Link></p>
              </div>

           </div>
         </div>
      </div>

    </div>
    <Toaster position="top-center" />
    </>
  );
};

export default Register;