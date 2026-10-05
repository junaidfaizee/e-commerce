import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeTemp from "./pages/HomeTemp";
import CollectionTemp from "./pages/CollectionTemp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LatestCollection from "./components/LatestCollection";
import BestSeller from "./components/BestSeller";
import OurPolicy from "./components/OurPolicy";
import Footer from "./components/Footer";   







function App(){
    return(
        <BrowserRouter>
        <Navbar/> 
            <Routes>
                <Route path="/"
                    element={<HomeTemp/>}>
                </Route>

                <Route path="/collection"
                    element={<CollectionTemp/>}>
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