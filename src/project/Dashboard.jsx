import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='d'>
        
            <div className='totalp'>
                <h3 className='tota'>TOTAL PROJECT
                     <br />
                   <b >7</b>
                </h3>
               
                </div>
               
            
           <div className='come'>
                <h3 className='e'>COMPLETED TASK
                    <br />
                    <b>7</b>
                </h3>
                
               
            </div>
           <div className='dpen'>
                <h3 className='pend'>PENDING TASK
                    <br />
                    <b>0</b>
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
               <p>
                . TODO LIST
               </p>
               <p>
                . TODO FORM
               </p>
                </ul>
                </div>
            </div>
          <br />
          <a className='log' href="/login">LOGOUT</a>
          

        </div>
   
  )
}

export default Dashboard