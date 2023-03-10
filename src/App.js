import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Preheader from '../src/components/Header/Preheader';
import Header from '../src/components/Header/Header';
import Homepage from './Pages/Homepage/Homepage'
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import PlatformLinks from './Pages/Platform Links/PlatformLinks';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer'
import CopyrightBar from './components/Footer/CopyrightBar/CopyrightBar';

function App() {

  return (
    <div className="App">

      <Router>
        <div>
          <Preheader />
          <Header />

          <div>
            <Routes> 
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/platform-links" element={<PlatformLinks />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>

        <div>
          <Footer />
          <CopyrightBar />
        </div>

      </Router>



    </div>
  );
}

export default App;
