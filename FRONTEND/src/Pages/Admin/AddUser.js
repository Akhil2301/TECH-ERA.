import React from 'react'
import Signup from '../../Components/Signup/Signup'
import Adminhome from './AdminHome'
function AddUser() {
  return (
    <>

   <div className='flex'>
      <Adminhome/>
      <Signup addUser={true} />
      </div>
 
     
    </>
   
  )
}

export default AddUser