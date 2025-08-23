import React from 'react';
import {BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';
import Login from './project/auth/Login';
import Register from './project/auth/Register';
import Dashboard from './project/Dashboard';
import Profile from './project/Profile';
import Todolist from './project/Todolist';
import Todoform from './project/Todoform';


const AppRoutes = () => {
  return (
      <Routes >
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
             <Route path='/register' element={<Register/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/profile' element={<Profile/>}/>
               <Route path='/todolist' element={<Todolist/>}/>
                <Route path='/todoform' element={<Todoform/>}/>
             

            
      </Routes>
  )
}

export default AppRoutes
