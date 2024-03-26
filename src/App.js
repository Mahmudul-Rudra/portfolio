import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles/App.scss';
import './styles/Header.scss';
import './styles/mediaQuery.scss';

// Components
import Header from './Components/Header';
import Loader from './Components/Loader';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
