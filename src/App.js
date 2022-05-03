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

function App() {

  return (
    <div className="App">

      <Router>
        <Preheader />
        <Header />

        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" elemenet={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
