import React from 'react'
import "./Todolist.css"

const Todolist = () => {
  return (
    <div className='t'>
    
      <div className='my'>
        <h1 className='myto'>
          MY TODO FORM
        </h1>
        <input type="text" placeholder='ADD NEW TASK' />
        <br />
        <button className='butto' type="submit">ADD</button>
        <br />
        <div className='pht'>
        <p className='pto'>
          LEARN HTML +
        </p>
       
        <p className='pcs'>
          LEARN CSS +
        </p>
        
        <p className='pja'>
          LEARN JAVASCRIPT +
        </p>
        <p className='ert'>
          LEARN REACT.JS +
        </p>
        <p className='yui'>
          LEARN NODE.JS +
        </p>
        <p className='opl'>
          LEARN MONGODB +
        </p>
        <p className='api'>
          LEARN API CALL FROM EXPRESS +
        </p>
        </div>
        <br />
          <a className='logto' href="/login">LOGOUT</a>

      </div>
     
    </div>
  )
}

export default Todolist