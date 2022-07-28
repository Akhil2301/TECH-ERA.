import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserAlredyExist} from "../ErrorMessge/Erromessage";
import axios from 'axios'
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error,setError]=useState(false);



  const [errName,setErrName]=useState('')
  const [errEmail,setErrEmail]=useState('')
  const [errMob,setErrMob]=useState('')
 const [errPass,setErrPass]=useState('')
 
 

  const handleName=()=>{
    if(name.trim()===''){
      setErrName('Name cannot be empty')
     return false
    }else{
      setErrName('')
      return true
    }
  }
   const handlePass=()=>{
    if(password.trim()===''){
      setErrPass('Password cannot be empty')
     return false
    }else if(password.length<6){
      setErrPass('Password must be atleast 6 characters')
      return false
    }
    
    else{
      setErrPass('')
      return true
    }
  }
  const handleMobile=()=>{
    if(phone.trim()===''){
      setErrMob('Mobile number cannot be empty')
     return false
    }else if(phone.length <10){
      setErrMob('Invalid mobile number')
      return false;
    }
     
    else{
      setErrMob('')
      return true
    }
  }
  const handleEmail=()=>{
    if(email.trim()===''){
      setErrEmail('Email cannot be empty')
     return false
    }else if( !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setErrEmail('Enter a proper email')
      return false;
    }
    
    else{
      setErrEmail('')
      return true
    }
  }










  const navigate=useNavigate();
  async function registerUser(event) {
    event.preventDefault();
    if( handleEmail()&&handleMobile()&&handleName()&&handlePass() ){
    await axios
      .post("/signup",
      
      {
        name,
        email,
        phone,
        password,
      })
      .then((response) => {
        setUser(response.data);
        navigate('/signin')
      }).catch(err=>{
        setError(err.response.data.message)
      });
    }else if(!handleEmail()&&!handleMobile()&&!handleName()&&!handlePass()){
      
   
   
    }
  }

  return (
    <>
    
      <div className="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-6 border-solid  sm:px-2 py-2 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1eb2a6] text-bold">
              SIGN UP
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            {error && <UserAlredyExist>{error}</UserAlredyExist>}
              {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> */}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="pb-2">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  autoComplete="name"
                  
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  onKeyUp={()=>handleName()}
                />
                 <div><span style={{color:'red'}} >{errName}</span></div>
              </div>

              <div className="pb-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onKeyUp={()=>handleEmail()}
                />
                 <div><span style={{color:'red'}} >{errEmail}</span></div>
              </div>

              <div className="pb-2">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  autoComplete="phone"
                  
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="phone"
                  onKeyUp={()=>handleMobile()}
                />
                <div><span style={{color:'red'}} >{errMob}</span></div>
              </div>

              <div className="pb-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onKeyUp={()=>handlePass()}
                />
                <div><span style={{color:'red'}} >{errPass}</span></div>
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> htmlForgot your password? </a>
        </div>
      </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1eb2a6] hover:bg-[#1eb2d6]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-white-500 group-hover:text-dark-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Signup
              </button>
              <div className="py-2">
                <Link to="/SignIn">
                  <p className="text-center text-[#1eb2a6] font-bold">
                    Existing User?{" "}
                    <span className="text-black font-bold">Sign In </span>
                  </p>
                </Link>
              </div>
              <div className="flex">
                {/* <button className="bg-dark hover:bg-indigo-100 text-gray-800 font-semibold py-2 w-full  border border-gray-400 rounded shadow">
                  <i className="fab fa-google">
                    <span className="text-[#872108]"> - Google Sign up</span>
                  </i>
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
