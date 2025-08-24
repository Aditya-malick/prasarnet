import React from 'react'
import './Useredit.css'

const Useredit = () => {
  return (
    <div className='ue'>
        <div className='wuser'>
            <h1 className='ewd'>WELCOME</h1>
        </div>
        <div className='usere'>
            <h1 className='usedit'>USER-PROFILE EDIT</h1>
        </div>
        <div className='hdedi'>
        <div className='menedi'>
            <h1 className='edit'>EDIT YOUR PROFILE </h1>
           
           
            <p className='et'>ENTER YOUR NEW DETAILS HERE</p>
        </div>


        <div className='inedit'>
            <p className='dename'>ENTER YOUR FULL NAME :</p>
            <input type="text" placeholder='NAME' />
            
            <p className='demail'>ENTER YOUR EMAIL :</p>
            <input type="email" placeholder='EMAIL' />
            
            <p className='phdit'>ENTER YOUR PHONE NUMBER :</p>
            <input type="number" placeholder='PHONE NUMBER' />
         
            <p className='pasdit'>ENTER YOUR NEW PASSWORD :</p>
            <input type="password" placeholder='PASSWORD' />
          
            <p className='conpas'>CONFIRM YOUR PASSWORD :</p>
            <input type="password" placeholder='CONFIRM PASSWORD' />
            
           
        </div>
        <br />
         <div className='butdit'>
                <button type="submit">SAVE INFO </button>
            </div>
            </div>
            <div className='bakc'>
                <a className='tapa' href="/profile">BACK TO PROFILE</a>
            </div>
        
    </div>
  )
}

export default Useredit