import Main from '../../Main';
import About from './About';
import {Routes,Route, Link} from 'react-router-dom';


function Nav() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking-page">Booking Page</Link>
        </li>

      </ul>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking-page" element={<About />} />

      </Routes>
    </nav>



  );
};

export default Nav;