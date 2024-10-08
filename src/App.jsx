import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '/src/pages/Home/Home';
import Liam from '/src/components/1.liam/Liam';
import Zac from '/src/components/2.zac/Zac';
import Morgan from '/src/components/3.morgan/Morgan';
import Jenna from '/src/components/4.jenna/Jenna';
import Navbar from '/src/components/a.navbar/Navbar';
import ExText from '/src/components/b.exhibition-text/ExhibitionText';
import About from '/src/components/c.about/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liam-mcclure" element={<Liam />} />
        <Route path="/zac-benloulou" element={<Zac />} />
        <Route path="/morgan-hass" element={<Morgan />} />
        <Route path="/jenna-katheryn-heinemann" element={<Jenna />} />
        <Route path="/exhibition-text" element={<ExText />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
