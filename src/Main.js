
import Specials from "../src/components/homepage/Specials";
import Reviews from "../src/components/homepage/Reviews";
import About from "../src/components/homepage/About";

function Main() {

    return (
        <main>
<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
          <Specials />
           <Reviews />
           <About />



        </main>
    );

}

export default Main;