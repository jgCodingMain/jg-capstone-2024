
import './App.css';



import React from 'react';
import Homepage from './Homepage';
import BookingPage from './bookingComponents/BookingPage';
import ConfirmedBooking from './bookingComponents/ConfirmedBooking';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";




function App() {
  return (
<>
<BrowserRouter>
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


<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
