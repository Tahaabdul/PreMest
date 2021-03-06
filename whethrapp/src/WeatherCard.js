import React, { useState, useEffect } from 'react';
import { Card,Form, FormControl, Button } from 'react-bootstrap'
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

function WeatherCard() {
    const [location, setLocation] = useState("0,0");


    let [weather, setWeather] = useState({});
    const [isPageLoading, setLoading] = useState(true);
    const [locationReady, setLocationReady] =useState(false)


    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latlon = `${position.coords.latitude},${position.coords.longitude}`;
                setLocation(latlon);
                console.log(latlon);
                setLocationReady(true);
                if (locationReady === true){
                    
                const params = {
                    access_key: 'a6db9a21e5857c63e2bc88cdd1129342',
                    query: `${location}`,
                };
                axios.get('http://api.weatherstack.com/current', { params })
                    .then(res => {
                        console.log(res.data);
                        setWeather(res.data);
                        setLoading(false);
                    })
                    .catch(err => console.error(err));
                }


            }, error => {
                console.error(`${error}Need access to get location.`);
            });
        }


    }, [locationReady,location])

    return (
        <>
          <>
            <Form inline >
                <FormControl type="text" placeholder="Search" style={{ width: "50%", position: 'fixed', top: "30%", left: "25%" }} />
                <Button variant="dark" style={{ position: 'fixed', top: "30%", left: "75%" }}>Search</Button>
            </Form>
        </>
            {
                isPageLoading
                    ?
                    <>
                    <FontAwesomeIcon icon={faSpinner} spin size="10x" color="white"/>
                    <p >getting location and weather data</p>
                    </>
                    :
                    <>
                        <Card style={{ width: '20rem', position: 'fixed', top: "50%", left: "40%", }}>
                            <Card.Img src={weather.current.weather_icons[0]} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Country: {weather.location.country}</Card.Title>
                                <Card.Subtitle>Location: {weather.location.region}</Card.Subtitle>
                                <br />
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






