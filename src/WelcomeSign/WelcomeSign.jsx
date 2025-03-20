import React, { useContext } from 'react';
import './welcomeSign.scss';
import { AppContext } from '../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function WelcomeSign() {
  const { isMobile } = useContext(AppContext);

  return (
    <div className="d-flex flex-row align-items-center m-2 ">
      {/* <h1 className="my-4 welcome-title">Welcome to weather.io!</h1> */}
      {/* <FontAwesomeIcon icon={faCloudSun} /> */}
      {isMobile ? (
        <h1 className="my-4 welcome-title">Weather.io</h1>
      ) : (
        // <FontAwesomeIcon icon={faCloudSun} />
        // <FontAwesomeIcon icon={faCloudSun} />
        <h1 className="my-4 welcome-title">Welcome to weather.io!</h1>
      )}
    </div>
  );
}

export default WelcomeSign;
