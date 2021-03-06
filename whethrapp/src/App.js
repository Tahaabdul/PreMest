import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Search from './Search';
import WeatherCard from './WeatherCard';
import {faHistory} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {/* <Search /> */}
      <WeatherCard/>
      <br/>
      <FontAwesomeIcon icon={faHistory}  color="white" size="3x"/>
    </>
  );
}

export default App;
