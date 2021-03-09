import React from 'react';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className='nav-wrapper'>
      <nav className='container'>
        <div className='logo-wrapper'>
          <img src={Logo} alt='' />
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
