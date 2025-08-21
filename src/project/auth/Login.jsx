import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='l'>
      <h1 className='login'>
        LOGIN PAGE
      </h1>
      <br />
      <p className='details'>
        ENTER YOUR CREDENTIALS TO LOGIN !
      </p>
      <br />
      <div className='users'>
        <p className='us'>ENTER YOUR USERNAME : </p>
        
      <input className='u' type="username" placeholder='USERNAME' />
      </div>
      
      <div className='pas'>
        <p className='pa'>ENTER YOUR PASSWORD : </p>
      <input className='py' type="password" placeholder='PASSWORD' />
      </div>
      <div className='but'>
      <button className='b' type="submit">LOGIN</button>
      </div>
      <br />

      <a className='a' href="/register">SIGN UP ! DONT HAVE ACCOUNT?</a>
      
     
    </div>
  )
}

export default Login
