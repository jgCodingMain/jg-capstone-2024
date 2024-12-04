import Nav from './Nav';



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
      <div class="headerCopyHolder">
        <div class="gridParentContainer">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a
            modern twist.</p><button><a href="/booking">Reserve a Table</a></button>
        </div>
        <div class="gridParentContainer"><img src="assets/restauranfood.jpg" alt="Little Lemon appetizer" />
        </div>
      </div>
    </header>

    );

}

export default Header;