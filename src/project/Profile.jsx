import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='p'>
      <div className='hd'>
        <h1 className='pwel'>WELCOME</h1>
        <br />
        <br />

    
      </div>
      <div className='lopo'>
        <h3 className='ln'>Name : Rohan Mishra</h3>
        
       
        <p className='le'>Email : rohanmishra2003@gmail.com</p>
        
        <p className='lp'>Phone : +91 9831204851</p>
        <br />
       <div className='bkl'>
        <button className='blk' type="submit"><a className='editbu' href="/Useredit">EDIT PROFILE</a></button>
        </div>
      </div>
      <div className='upro'>
        <h1 className='dpro'>PROFILE</h1>
      </div>
      <div className='men'>
        <h2 className='menu'>MENU SECTION :</h2>
        <div className='ms'>
        <ul >
          <li><a href="/dashboard">.DASHBOARD</a></li>
          <br />
          <li><a href="/profile">.USER PROFILE</a></li>
          <br />
          <li><a href="/Todolist">.TODO LIST</a></li>
          <br />
          <li><a href="/Todoform">.TODO LIST FORM</a>
          </li>
        </ul>
        </div>
      </div>
       <br />
          <a className='log' href="/login">LOGOUT</a>
    </div>
  )
}

export default Profile