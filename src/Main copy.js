import Hero from "./HomepageComponents/homepage/Hero";
import Specials from "./HomepageComponents/homepage/Specials";
import Reviews from "./HomepageComponents/homepage/Reviews";
import About from "./HomepageComponents/homepage/About";


function Main() {



// Define your reducer function
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Update the state with new available times
        default:
            return state; // Return the current state if no action matches
    }
};

    return (
        <main>
  <Hero />
          <Specials />
           <Reviews />
           <About />

        </main>
    );

}

export default Main;