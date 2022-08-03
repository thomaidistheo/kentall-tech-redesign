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
import ErrorPage from './ErrorPage';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">

      <Router className="router">
        <div>
          <div className='header'>
            <Preheader />
            <Header />
          </div>

          <div className="app-content">
            <Routes> 
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>

        
        <div className="footer">
          <Footer />
        </div>

      </Router>



    </div>
  );
}

export default App;
