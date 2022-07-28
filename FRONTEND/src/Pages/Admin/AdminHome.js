import React,{useEffect} from "react";
import Header from "../../Components/Admin/Header/Header";
import {useNavigate} from 'react-router'
// import Head from "../../Components/Admin/Header/Head";
function AdminHome() {
  const userInfo=localStorage.getItem('userInfo',JSON.stringify)
  const userData=JSON.parse(localStorage.getItem('userInfo'));
  
  const navigate=useNavigate()
  useEffect(()=>{
    
    if(!userInfo&&userData){
      navigate('/admin')
      
    }
    if(userData.isAdmin===false){
      
      navigate('/admin')
    }

  },[])


  return (
    <>
      <Header/>
      {/* <Head/> */}
    </>
  );
}

export default AdminHome;
