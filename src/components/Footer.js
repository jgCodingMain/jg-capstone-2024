function Footer() {

    return (

      <footer>
      <div class="footerHolder">
        <div> <img src="assets/restaurant.jpg" alt="Company Logo" className="logo" /></div>
        <div role="navigation" aria-label="Main" class="footerLinkContainer">
          <h4>Site Map</h4>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">reservations</a></li>
            <li><a href="#">order online</a></li>

          </ul>
        </div>
        <div class="footerLinkContainer" role="navigation" aria-label="Contacts">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">address</a></li>
            <li><a href="#">phone number</a></li>
            <li><a href="mailto:reservations@littlelemon.com?subject=Hello 😀">email</a></li>
          </ul>
        </div>
        <div class="footerLinkContainer" role="navigation" aria-label="Socials">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">twitter</a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">tiktok</a></li>
          </ul>

      </div></div>
    </footer>






    );

}

export default Footer;