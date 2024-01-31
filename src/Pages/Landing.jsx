import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import welcome from '../assets/WELCOME.webp'
const Landing = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser.displayName);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Implement the logic to sign the user out
    signOut(auth);
    navigate("/");
  };
  
  console.log(user);

  return (
     <div style={{height:'100vh'}} className="w-100 container-fluid  bg-info ">
      <div className="d-grid  col-2 container w-100">
        <div className="grid place-items-center w-100">
          <div className="w-100 d-flex  justify-content-between mt-4 ">
            <h1 className="text-5xl max-sm:text-3xl">
              Welcome {"  "}
              
            </h1>
            <button className="btn btn-danger shadow " onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
        <div style={{marginTop:'100px' , marginLeft:'200px'}} className="d-flex  justify-content-center  align-items-center w-50 h-50">
          <img className="img-fluid " src={welcome} alt="no image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;