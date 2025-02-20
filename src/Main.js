import Hero from "./components/homepage/Hero";
import Specials from "../src/components/homepage/Specials";
import Reviews from "../src/components/homepage/Reviews";
import About from "../src/components/homepage/About";


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