


import {  Link } from "react-router-dom";














export default function Header () {

    return (


      <header>
      <div className="grid">
        <div className="logo">
          <img src="assets/Logo.svg" alt="Company Logo" />
        </div>
        <div className="navHolder">

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


        </div>
      </div>

    </header>

    );

}

