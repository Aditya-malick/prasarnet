import React, { useEffect } from 'react'
import './Profile.css'

const Profile = (setHeaderName) => {

  useEffect(() => {
   console.log(">>>>>>>>>setHeaderName",setHeaderName)
  }, []);


  return (
    <div className='p'>
     
      <div className='lopo'>
        <h3 className='ln'>Name : Rohan Mishra</h3>
        
       
        <p className='le'>Email : rohanmishra2003@gmail.com</p>
        
        <p className='lp'>Phone : +91 9831204851</p>
        <br />
       <div className='bkl'>
        <button className='blk' type="submit"><a className='editbu' href="/Useredit">EDIT PROFILE</a></button>
        </div>
      </div>
      
     
       <br />
          <a className='log' href="/login">LOGOUT</a>
          <br />

    </div>
  )
}

export default Profile