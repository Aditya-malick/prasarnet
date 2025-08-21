import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='r'>
       <h1 className='REGISTER'>REGISTER PAGE</h1>
       <br />
       <p className='para'>
        ENTER YOUR DETAILS HERE TO SIGNUP !
       </p>
       <br />
       <div className='userr'>
        <p className='n'>ENTER YOUR USERNAME OR NAME :</p>
        <input className='userss' type="username" placeholder='USERNAME' />
       </div>
       
       <div className='phone'>
        <p className='phn'>ENTER YOUR PHONE NUMBER :</p>
        <input className='ph' type="number" placeholder='PHONE NUMBER' />
       </div>
       <br />
       <div className='email'>
        <p className='e'>ENTER YOUR EMAIL HERE :</p>
        <input className='em' type="email" placeholder='EMAIL'/>
        
       </div>
       <br />
       <div className='pw'>
        <p className='rp'>SET YOUR PASSWORD :</p>
        <input className='pr' type="password" placeholder='PASSWORD' />
       </div>
       <br />
       <div className='buut'>
        <button className='bu' type="submit">REGISTER</button>

       </div>
       <br />
       <a className='an' href="/login">ALREADY HAVE ACCOUNT? LOGIN NOW</a>


    </div>
  )
}

export default Register
