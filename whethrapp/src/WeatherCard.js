import React, { useState, useEffect } from 'react';
import { Card, } from 'react-bootstrap'
import axios from 'axios';

function WeatherCard() {
    const [location, setLocation] = useState("0,0");
    const [locationReady, setLocationReady] = useState(false);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latlon = `${position.coords.latitude},${position.coords.longitude}`;
                setLocation(latlon);
                console.log(latlon);

            }, error => {
                console.error(`${error}Need access to get location.`);
            });
        }
    }


    let [weather, setWeather] = useState({});
    const [isPageLoading, setLoading] = useState(true);

   
    getLocation();

    useEffect(() => {
        
        const params = {
            access_key: 'a6db9a21e5857c63e2bc88cdd1129342',
            query: 'location',
        };
        console.log(params.query)
        // 
        axios.get('http://api.weatherstack.com/current', {params})
            .then(res => {
                console.log(res.data);
                setWeather(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [location]);

    return (
        <>
            {
                isPageLoading 
                    ?
                    <p>getting location and weather data</p>
                    :
                    <>
                        <Card style={{ width: '20rem', position: 'fixed', top: "50%", left: "40%", }}>
                            <Card.Img src={weather.current.weather_icons[0]} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Country: {weather.location.country}</Card.Title>
                                <Card.Subtitle>Location: {weather.location.region}</Card.Subtitle>
                                <br/>
                                <Card.Subtitle>Local time: {weather.location.localtime}</Card.Subtitle>
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






