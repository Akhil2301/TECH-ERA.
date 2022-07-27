import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'
import Head from '../Common/Heading/Head'
import axios from 'axios'
import {Erromessage} from "../ErrorMessge/Erromessage";
function Signin(props) {
  const[email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)
  const navigate=useNavigate();

 
  // const [loading,setLoading]=useState(false)
  
  const userInfo=localStorage.getItem('userInfo',JSON.stringify)
  const userData=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
    
    
    if(userInfo && !userData.isAdmin && !props.admin){
      navigate('/');
    }
    if(userInfo && userData.isAdmin &&props.admin){
        
      navigate('/dashboard');
    }
  },[])
  
  const submitHandler=async(e)=>{
    e.preventDefault()
    try{
       const config={
        'Content-type':'application/json'
       }
      //  setLoading(true)
       const {data}=await axios.post('/login',
       {
        email,
        password,
       },
       config
       );
       
       localStorage.setItem('userInfo',JSON.stringify(data))
       const users=JSON.parse(localStorage.getItem('userInfo'))
       if(users && !users.isAdmin && !props.admin){
        navigate('/');
      }
      if(users && users.isAdmin &&  props.admin){
        
        navigate('/dashboard');
      }
      //  setLoading(false)
    }catch(error){
      setError(error.response.data.message)
    }

  }
  return (
    <>
    {props.admin ? <Head/> :null}
      <div className="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8  sm:px-2 py-4 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1eb2a6] text-bold">
              {props.admin ? "Admin Sign in" : "SIGN IN"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> */}
            </p>
          </div>
          {error && <Erromessage>{error}</Erromessage>}
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="pb-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onChange={(e)=>setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div className="pb-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div className="text-sm">
                {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a> */}
              </div>
            </div>

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
                Sign In
              </button>
              {!props.admin ? (
                <div className="py-2">
                  <Link to="/Signup">
                    <p className="text-center text-[#1eb2a6] font-bold">
                      New User?{" "}
                      <span className="text-black font-bold">Sign up </span>
                    </p>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
