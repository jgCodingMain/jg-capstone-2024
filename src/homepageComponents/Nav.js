import {Routes,Route, Link} from 'react-router-dom';


import BookingPage from '../../BookingPage';



function Nav() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking Page</Link>
        </li>

      </ul>
      <Routes>
        <Route path="/"  />
        <Route path="/booking" element={<BookingPage />} />

      </Routes>
    </nav>



  );
};

export default Nav;