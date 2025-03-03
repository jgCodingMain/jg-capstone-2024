import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




function Footer() {

    return (

      <footer>
      <div class="footerHolder">
        <div> <img src="assets/restaurant.jpg" alt="Company Logo" className="logo" /></div>
        <div role="navigation" aria-label="Main" class="footerLinkContainer">
          <h4>Site Map</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li> <Link to="/booking">Reservations</Link></li>
            <li><a href="#">Order online</a></li>

          </ul>
        </div>
        <div class="footerLinkContainer" role="navigation" aria-label="Contacts">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="mailto:reservations@littlelemon.com?subject=Hello 😀">email</a></li>
          </ul>
        </div>
        <div class="footerLinkContainer" role="navigation" aria-label="Socials">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">twitter</a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">tiktok</a></li>
          </ul>

      </div></div>
    </footer>






    );

}

export default Footer;