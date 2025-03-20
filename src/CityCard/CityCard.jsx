import React, { useContext } from 'react';
import './cityCard.scss';
import { AppContext } from '../context/AppContext';

function CityCard() {
  const { cityInfo, setCityInfo } = useContext(AppContext);

  const removeCity = () => {
    setCityInfo('');
  };
  return (
    <div className="p-2 m-2 border rounded city-card">
      {!cityInfo ? (
        <p className="text-muted">Please select a city to view it's info</p>
      ) : (
        <h6>{cityInfo.place.name}</h6>
      )}
      <button onClick={() => removeCity()}>Clear city</button>
    </div>
  );
}

export default CityCard;
