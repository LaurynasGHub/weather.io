import React, { useContext, useState } from 'react';
import './searchBar.scss';
// components
import Loader from '../Loader/Loader';
import { AppContext } from '../context/AppContext';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const { cities, getCityInfo } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="searchBar customBorder p-2">
      <button
        className="btn btn-secondary dropdown-toggle dropdown-btn"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Please select a city
      </button>
      <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenu2">
        <li>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </li>
        {cities.length > 0 ? (
          cities
            .filter((city) => city.name.toLowerCase().includes(searchTerm))
            .slice(0, 10)
            .map((city, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => getCityInfo(city.cityCode)}
                >
                  {city.name}
                </button>
              </li>
            ))
        ) : (
          <Loader />
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
