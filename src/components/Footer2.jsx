import React from 'react';
import '../assets/styles/components/Footer2.scss';

const Footer2 = () => (
  
  <div className="footer2">

    <figure className="footer2__logo">
      <a href="#"><img src="../../public/images/logo-blanco.png" alt="Logo de la Empresa" /></a>
    </figure>

    <figure className="footer2__networks">
      <a className="footer2__networks--icon" href="#"><img src="../../public/images/icon-facebook.svg" alt="Logo de Facebook" /></a>
      <a className="footer2__networks--icon"  className="footer2__networks--icon"href="#"><img src="../../public/images/icon-youtube.svg" alt="Logo de youtube" /></a>
      <a className="footer2__networks--icon" href="#"><img src="../../public/images/icon-twitter.svg" alt="Logo de twitter" /></a>
      <a className="footer2__networks--icon" href="#"><img src="../../public/images/icon-pinterest.svg" alt="Logo de pinterest" /></a>
      <a className="footer2__networks--icon" href="#"><img src="../../public/images/icon-instagram.svg" alt="Logo de instagram" /></a>
    </figure>

    <nav className="footer2__menu1">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>

    <nav className="footer2__menu2">
      <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </nav>

    <div className="footer2__input">
      <div className="footer2__inputButton">
        <input id="email" /><br />
        <div className="footer2__button">
          <a className="footer2__button--go" href="#">Go</a> 
        </div>
      </div>
      <span id="emailOK"></span>
    </div>

    <div className="footer2__copyright">Copyright 2020. All Rights Reserved</div>
    
  </div>
);

export default Footer2;