import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'



const AuthNav = () => {
    return (
    <header className='ListApp'>
      <span className='ListItemApp'>
        <NavLink className={({ isActive }) => isActive? 'ActiveLink':'Link'} to="/register">Registration</NavLink>
      </span>
      <span className='ItemNav'>
        <NavLink className={({ isActive }) => isActive? 'ActiveLink':'Link'} to="/login">Log In</NavLink>
      </span>
    </header>  
    )
}

export default AuthNav;

