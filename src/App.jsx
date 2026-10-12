import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LatestCollection from "./components/LatestCollection";
import BestSeller from "./components/BestSeller";
import OurPolicy from "./components/OurPolicy";
import Footer from "./components/Footer";   
import FeedBack from "./components/FeedBack";

function App(){
    return(
        <BrowserRouter>
        <Navbar/> 
            <Routes>
                <Route path="/"
                    element={<Home/>}>
                </Route>

                <Route path="/ollection"
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
            <FeedBack/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;