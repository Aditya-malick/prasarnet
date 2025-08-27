import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'


const Sidebar = ({setHeaderName}) => {
    const location=useLocation();
    const isactiveRoute=(path)=>{
        const returnValue=location.pathname.startsWith(path)?true : false;
        return returnValue 
    }

  return (

    <div>
         <div className='dash'>
            <h4 className='nav'>MENU SECTION :
            </h4>
             </div>
            <div className='ll'>
            <ul>
                <li onClick={()=> setHeaderName("USER PROFILE")}><a href="/profile">USER PROFILE</a></li>
                <br />
                <li onClick={()=> setHeaderName("DASHBOARD")}><a href="/dashboard">DASHBOARD</a>
                   
                </li>
                <br />
                <li onClick={()=> setHeaderName("TODO LIST")}><a href="/Todolist">TODO LIST</a>
                    
                </li>
                <br />
                <li onClick={()=> setHeaderName("TODO FORM")}><a href="/Todoform">TODO LIST FORM</a>
                  
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Sidebar