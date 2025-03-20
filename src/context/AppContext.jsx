import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [cityInfo, setCityInfo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 350);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();
    // Remove event listener- prevents memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fetch city list from API
  const getCities = async () => {
    try {
      const response = await fetch('/v1/places');

      if (!response.ok) {
        throw new Error(`Can't fetch city list`);
      }

      const data = await response.json();
      const citiesNames = data.map((city) => ({
        name: city.name,
        cityCode: city.code,
      }));

      setCities(citiesNames);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch city info using city code
  const getCityInfo = async (code) => {
    try {
      const response = await fetch(`/v1/places/${code}/forecasts/long-term`);

      if (!response.ok) {
        throw new Error(`Couldn't get city info`);
      }

      const cityData = await response.json();
      console.log(cityData);
      setCityInfo(cityData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <AppContext.Provider
      value={{ cities, cityInfo, getCityInfo, setCityInfo, isMobile }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
