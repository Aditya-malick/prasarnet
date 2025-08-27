import React from 'react'

const Header = ({headerName}) => {
  return (
     <div className='wel'>
                <h1 className='welcome'>WELCOME</h1>
                 <div className='h'>
            <h1 className='head'>{headerName}</h1>
        </div>
          <h3 className='user_pro'>USER PROFILE : <br />ROHAN MISHRA </h3>
            </div>
            
  )
}

export default Header