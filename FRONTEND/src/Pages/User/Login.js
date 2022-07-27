import React from "react";
import Signin from "../../Components/SignIn/Signin";
import UseHead from "../../Pages/User/UseHead";
function Login() {
  //const userInfo=localStorage.getItem('userInfo',JSON.stringify)
 
  return (
    
        <>
    
          <UseHead />
          <Signin />
        </>
  );
}

export default Login;
