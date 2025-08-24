import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='d'>
         <div className='wel'>
                <h1 className='welcome'>WELCOME</h1>
            </div>
           
            <div className='totalp'>
                <h3 className='tota'>TOTAL PROJECT
                     <br />
                   <b >7</b>
                </h3>
               
                </div>
               
            
           <div className='come'>
                <h3 className='e'>COMPLETED TASK
                    <br />
                    <b>4</b>
                </h3>
                
               
            </div>
           <div className='dpen'>
                <h3 className='pend'>PENDING TASK
                    <br />
                    <b>3</b>
                </h3>
                
            </div>
           <div className='mem'>
                <h3 className='team'>TEAM MEMBER
                    <br />
                    <b>1</b>
                </h3>
                

            </div>
            
            <br />


            <div className='recent'>
                <h3>RECENT PROJECT :</h3>
                <div className='ldr'>
                    <ul>
                <p>
                   . LOGIN PAGE
                </p>
                <p>
                   . REGISTER PAGE
                </p>
                <p>
                   . DASHBOARD
                </p>
                <p>
                    . USER PROFILE
                </p>
               <p>
                . USER PROFILE EDIT
               </p>
                </ul>
                </div>
            </div>
        <div className='h'>
            <h1 className='head'>DASHBOARD</h1>
        </div>
         
        <div className='pro'>
            <h3 className='user_pro'>USER PROFILE : </h3>
            <div className='uuu'>
                <p className='ul'> ROHAN MISHRA</p>
                <br />
               
            </div>
        </div>
       
           <div className='dash'>
            <h4 className='nav'>MENU SECTION :
            </h4>
             </div>
            <div className='ll'>
            <ul>
                <li><a href="/profile">.USER PROFILE</a></li>
                <br />
                <li><a href="/dashboard">.DASHBOARD</a>
                   
                </li>
                <br />
                <li><a href="/Todolist">.TODO LIST</a>
                    
                </li>
                <br />
                <li><a href="/Todoform">.TODO LIST FORM</a>
                  
                </li>
            </ul>
            </div>
          <br />
          <a className='log' href="/login">LOGOUT</a>
          

        </div>
   
  )
}

export default Dashboard