import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from '/src/pages/Home/Home';
import Liam from '/src/components/ArtistInfo/Liam';
import Zac from '/src/components/ArtistInfo/Zac';
import Morgan from '/src/components/ArtistInfo/Morgan';
import Jenna from '/src/components/ArtistInfo/Jenna';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/at11-lc04-liam-mcclure"
            element={<Liam />}
          />
          <Route
            exact
            path="/wall-unit-zach-benloulou"
            element={<Zac />}
          />
          <Route
            exact
            path="/untitled-morgan-hass"
            element={<Morgan />}
          />
          <Route
            exact
            path="/silk-flesh-jenna-katheryn-heinemann"
            element={<Jenna />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
