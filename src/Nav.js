
import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import BookingPage from "./BookingPage";
import Homepage from "./Homepage";













function Nav() {

    return (


      <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/booking">Booking Page</Link>
        </li>
      </ul>
    </nav>

    );

}

export default Nav;