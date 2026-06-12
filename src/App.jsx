import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
// Global Components --------//
import Preheader from '../src/components/Header/Preheader';
import Header from '../src/components/Header/Header';
import CopyrightBar from './components/Footer/CopyrightBar/CopyrightBar';
// --------------------------//

// Pages ------------------- //
import Homepage from './Pages/Homepage/Homepage'
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import PlatformLinks from './Pages/Platform Links/PlatformLinks';
import Guides from './Pages/Guides/Guides';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
// -------------------------- //

// PDPs ------------------- //
import PDPBoat from './Pages/ProductPages/PDPBoat/PDPBoat';
import PDPMoto from './Pages/ProductPages/PDPMoto/PDPMoto';
import PDPCar from './Pages/ProductPages/PDPCar/PDPCar';
// -------------------------- //

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <div>
          <Preheader />
          <Header />
          <div>
            <Routes> 
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/platform-links" element={<PlatformLinks />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/guides/:slug" element={<Guides />} />
              <Route path="/product-boat" element={<PDPBoat />} />
              <Route path="/product-moto" element={<PDPMoto />} />
              <Route path="/product-car" element={<PDPCar />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>

        <div>
          {/* <Footer /> */}
          <CopyrightBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
