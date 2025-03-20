import React, { useEffect, useState } from 'react';

// components
import Loader from '../Loader/Loader';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // get cities from meteo API
  const getCities = async () => {
    try {
      const response = await fetch('/v1/places');

      if (!response.ok) {
        throw new Error(`Can't fetch city list`);
      }

      const cities = await response.json();

      let citiesNames = [];

      for (let city of cities) {
        citiesNames.push({ name: city.name, cityCode: city.code });
      }
      // set city names
      setCities(citiesNames);
    } catch (error) {
      console.log(error.message);
    }
  };

  // get city info using city code
  const getCityInfo = async (code) => {
    try {
      const response = await fetch(`/v1/places/${code}/forecasts/long-term`);

      if (!response.ok) {
        throw new Error(`Couldn't get city info`);
      }

      const cityInfo = await response.json();

      // set city names
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="dropdown searchBar customBorder p-2">
      <button
        className="btn btn-secondary dropdown-toggle"
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
                <button className="dropdown-item" type="button">
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
