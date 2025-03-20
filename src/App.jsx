import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// components
import SearchBar from './SearchBar/SearchBar';
import CityCard from './CityCard/CityCard';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <SearchBar />
      <CityCard />
    </div>
  );
}

export default App;
