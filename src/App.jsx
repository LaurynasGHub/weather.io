import React from 'react';
import './app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// components
import SearchBar from './SearchBar/SearchBar';
import CityCard from './CityCard/CityCard';
import WelcomeSign from './WelcomeSign/WelcomeSign';

function App() {
  return (
    <div className="d-flex flex-column align-items-center App">
      <WelcomeSign />
      <SearchBar />
      <CityCard />
    </div>
  );
}

export default App;
