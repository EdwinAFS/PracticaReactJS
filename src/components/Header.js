import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='header-content'>
        <div className='container-logo'>
            <img className='header-logo' src={logo} alt='01'/>
            <span className='header-title-text'> Los Simpson </span>
        </div>
        
        <nav>
            <ul className='nav-link'>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
            </ul>
        </nav>

        
    </header>
); 

export default Header;