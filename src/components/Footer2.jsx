import React from 'react';
import '../assets/styles/components/Footer2.scss';
// eslint-disable-next-line import/extensions


class Footer2 extends React.Component {

  render() {

    return (

      <div className='footer2'>

        <figure className='footer2__logo'>
          <a href='/'><img src='../../public/images/logo-blanco.png' alt='Logo de la Empresa' /></a>
        </figure>

        <figure className='footer2__networks'>
          <a className='footer2__networks--icon' href='/'><img src='../../public/images/icon-facebook.svg' alt='Logo de Facebook' /></a>
          <a className='footer2__networks--icon footer2__networks--icon' href='/'><img src='../../public/images/icon-youtube.svg' alt='Logo de youtube' /></a>
          <a className='footer2__networks--icon' href='/'><img src='../../public/images/icon-twitter.svg' alt='Logo de twitter' /></a>
          <a className='footer2__networks--icon' href='/'><img src='../../public/images/icon-pinterest.svg' alt='Logo de pinterest' /></a>
          <a className='footer2__networks--icon' href='/'><img src='../../public/images/icon-instagram.svg' alt='Logo de instagram' /></a>
        </figure>

        <nav className='footer2__menu1'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Pricing</a></li>
            <li><a href='/'>Products</a></li>
            <li><a href='/'>About Us</a></li>
          </ul>
        </nav>

        <nav className='footer2__menu2'>
          <ul>
            <li><a href='/'>Careers</a></li>
            <li><a href='/'>Community</a></li>
            <li><a href='/'>Privacy Policy</a></li>
          </ul>
        </nav>

        <div className='footer2__input'>
          <div className='footer2__inputButton'>
            <form name='ejemplo1' className='form'>
              <input type='email' name='email' pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}' />
              <input className='footer2__button' type='submit' value='Go' />
            </form>
            <br />
          </div>
          <span id='emailOK' />
        </div>

        <div className='footer2__copyright'>Copyright 2020. All Rights Reserved</div>

      </div>
    // eslint-disable-next-line semi
    )
  }
}

export default Footer2;
