import React from 'react'
import "./Todolist.css"

const Todolist = () => {
  return (
    <div className='t'>
     
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
     
    </div>
  )
}

export default Todolist