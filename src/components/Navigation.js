import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
    <header className='ListApp'>
      <span className='ListItemApp'>
        <NavLink className={({ isActive }) => isActive? 'ActiveLink':'Link'} to="/">Home</NavLink>
      </span>
      <span>
        <NavLink className={({ isActive }) => isActive? 'ActiveLink':'Link'} to="/contacts">My contacts</NavLink>
      </span>
    </header>  
    )
}

export default Navigation;
