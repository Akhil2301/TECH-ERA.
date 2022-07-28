import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

function EditUser() {
    const location = useLocation();
    const [error,setError]=useState()
    useEffect(async()=>{
        try{
            const {data}=await axios.get('/userById',
            {
             
            },
           
            );
            

         }catch(error){
           setError(error.response.data.message)
         }
     
    },[])


  return (
    <div>Hi itme </div>
  )
}

export default EditUser
