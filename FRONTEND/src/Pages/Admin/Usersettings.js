import React, { Fragment } from 'react'
import Adminhome from './AdminHome'
import Settings from '../../Components/Admin/UserSettings/user'

function Usersettings() {
  
  return (
    <>
      <div className='flex bg-gray-900'>
      <Adminhome/>
      <Settings />
      </div>
        
        
       
        
    </>
    
  )
}

export default Usersettings