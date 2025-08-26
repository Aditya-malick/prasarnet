import React from 'react'
import "./Todolist.css"

const Todolist = () => {
  return (
    <div className='t'>
      <div className='to'>
        <h1 className='tod'>
          WELCOME
        </h1>
      </div>
      <div className='my'>
        <h1 className='myto'>
          MY TODO LIST
        </h1>
        <input type="text" placeholder='ADD NEW TASK' />
        <br />
        <button className='butto' type="submit">ADD</button>
        <br />
        <div className='pht'>
        <p className='pto'>
          Learn HTML
        </p>
       
        <p className='pcs'>
          Learn CSS
        </p>
        
        <p className='pja'>
          Learn JAVASCRIPT
        </p>
        </div>
        <br />
          <a className='logto' href="/login">LOGOUT</a>

      </div>
      <div className='mto'>
        <h2 className='toem'>
          MENU SECTION :
        </h2>
        <div className='uher'>
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
        </div>
      </div>
    </div>
  )
}

export default Todolist