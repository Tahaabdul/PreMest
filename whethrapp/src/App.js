import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import WeatherCard from './WeatherCard'
import Search from './Search'


function App() {
  return (
    <>
    <Navigation/>
    <Search/>
    <WeatherCard/>
    </>
  );
}

export default App;
