


import Hero from './Hero';
import Nav from '../../Nav';








function Header() {

    return (

      <header>
      <div class="grid">
        <div class="logo">
          <img src="assets/Logo.svg" alt="Company Logo" />
        </div>
        <div class="navHolder">


<Nav />





        </div>
      </div>
     <Hero />
    </header>

    );

}

export default Header;