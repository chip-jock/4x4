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
    <div className="w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liammcclure" element={<Liam />} />
          <Route path="/zacbenloulou" element={<Zac />} />
          <Route path="/morganhass" element={<Morgan />} />
          <Route path="/jennakatherynheinemann" element={<Jenna />} />
          <Route path="/exhibitiontext" element={<ExText />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
