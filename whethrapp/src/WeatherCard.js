import React, { useState, useEffect } from 'react';
import { Card, } from 'react-bootstrap'
import axios from 'axios';

function WeatherCard() {
    const [location, setLocation] = useState("0,0");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latlon = `${position.coords.latitude},${position.coords.longitude}`;
                setLocation(latlon);

            }, error => {
                console.error(`${error}Need access to get location.`);
            });
        }
    }


    const [weather, setWeather] = useState(null);
    const [isPageLoading, setLoading] = useState(true);

    useEffect(() => {
        getLocation();
        const params = {
            access_key: 'a127ab62fa1a6d77a38a6eb2052bd02b',
            query: location
        };
        axios.get('http://api.weatherstack.com/current', { params })
            .then(data => {
                console.log(data);
                setWeather(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {
                isPageLoading === true
                    ?
                    <p>getting location and weather data</p>
                    :
                    <>
                        <Card style={{ width: '18rem', position: 'fixed', top: "50%", left: "40%", }}>
                            <Card.Img src={weather.current.weather_icons[0]} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Country: {weather.location.country}</Card.Title>
                                <Card.Subtitle>Location: {weather.location.name}</Card.Subtitle>
                                <Card.Subtitle>Last updated{weather.current.observation_time}</Card.Subtitle>
                                <Card.Text>
                                    {weather.current.temperature}&deg;C
                                </Card.Text>
                                <Card.Text>{weather.current.weather_descriptions[0]}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </>
            }

        </>
    )

}

export default WeatherCard;






