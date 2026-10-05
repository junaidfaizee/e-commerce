import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/about";
import Contact from "./pages/contact";
import LatestCollection from "./components/LatestCollection";
import OurPolicy from "./components/OurPolicy"; 
import BestSeller from "./components/BestSeller";


function App(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/"
                    element={<Home/>}>
                </Route>

                <Route path="/collection"
                    element={<Collection/>}>
                </Route>

                <Route path="/about"
                    element={<About/>}>
                </Route>

                <Route path="/contact"
                    element={<Contact/>}>
                </Route>
            </Routes>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;