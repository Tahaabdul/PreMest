import React, { useState, useEffect } from 'react';
import { Card, Button, Form, FormControl, } from 'react-bootstrap'
import sunny from './images/animated/day.svg';

function WeatherCard() {
    const [location, setLocation] = useState("0,0");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latlon = `${position.coords.latitude},${position.coords.longitude}`;
            setLocation(latlon);
        }, error => {
            console.error(`${error}Need access to get location.`);
        });
    }



    const [weather, setWeather] = useState(null);
    const [isPageLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        fetch(`http://api.weatherstack.com/current?access_key=a127ab62fa1a6d77a38a6eb2052bd02b&query=${location}`)
            .then(response => {
                response.json();
            })
            .then(data => {
                console.log(data)
                setWeather(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
            <div>
            {
                isPageLoading === true
                    ?
                    <p>getting location and weather data</p>
                    :
                    <div>
                        <Form inline >
                            <FormControl type="text" placeholder="Search" style={{ width: "50%", position: 'fixed', top: "30%", left: "25%" }} />
                            <Button variant="dark" style={{ position: 'fixed', top: "30%", left: "75%" }}>Search</Button>
                        </Form>
                        <Card style={{ width: '18rem', position: 'fixed', top: "50%", left: "40%", }}>
                            <Card.Img src={weather.current.weather_icons[0]} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Location: {weather.location.name}</Card.Title>
                                <Card.Subtitle>Last updated{weather.current.observation_time}</Card.Subtitle>
                                <Card.Text>
                                    {weather.current.temperature}&deg;C
                            </Card.Text>
                                <Card.Text>{weather.current.weather_descriptions[0]}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>                               
            }
            </div>
    )

}



export default WeatherCard;