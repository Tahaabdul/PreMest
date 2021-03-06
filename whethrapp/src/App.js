import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Search from './Search';
import WeatherCard from './WeatherCard';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Search />
      <WeatherCard/>
    </>
  );
}

export default App;
