import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { ImBook } from 'react-icons/im';
import '../index.css';



const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
    <header className='ListApp'>
        <span>
                <ImBook style={{ marginRight: 8, marginLeft: 10, display: 'inline-block', padding: 20  }} />
        </span>
      
      {isLoggedIn && <span>
        <NavLink className={({ isActive }) => isActive? 'ActiveLink':'Link'} to="/contacts">My contacts</NavLink>
      </span>}
    </header>  
    )
}

export default Navigation;
