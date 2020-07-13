import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header>
    <figure>
      <a href='/'><img src='../../public/images/logo.svg' alt='logo' /></a>
    </figure>
    <input type='checkbox' id='btn-menu' />
    <label for='btn-menu'><img src='../../public/images/icon-hamburger.svg' alt="menu" /></label>
    <nav className='menu'>
      <ul>
        <li><a href='/'>Pricing</a></li>
        <li><a href='/'>Product</a></li>
        <li><a href='/'>About Us</a></li>
        <li><a href='/'>Careers</a></li>
        <li><a href='/'>Community</a></li>
      </ul>
    </nav>
    <a className='button' href='/'>Get Started</a>
  </header>
);

export default Header;