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
            console.log('Need access to get location.');
        });
    }

    // const params = {
    //     access_key: 'a127ab62fa1a6d77a38a6eb2052bd02b',
    //     query: location
    // }


    const [weather, setWeather] = useState(null);
    const [isPageLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://api.weatherstack.com/current?access_key=a127ab62fa1a6d77a38a6eb2052bd02b&query=${location}`)
            .then(response => response.json(),setLoading(false))
            .then(data => setWeather(data) ).catch(err => console.error(err));
    }, [])
    console.log(`Current temperature in ${weather.location.name} is ${weather.current.temperature}℃`);
    return (
        <>      
        

        isPageLoading === true
            ?
            <p>getting location and weather data</p>
            :
            <>
                <Form inline >
                    <FormControl type="text" placeholder="Search" style={{ width: "50%", position: 'fixed', top: "30%", left: "25%" }} />
                    <Button variant="dark" style={{ position: 'fixed', top: "30%", left: "75%" }}>Search</Button>
                </Form>

                <Card style={{ width: '18rem', position: 'fixed', top: "50%", left: "40%", }}>
                    <Card.Img src={sunny} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Location: {weather.location.name}</Card.Title>
                        <Card.Text>
                        {weather.current.temperature}&deg;C
                    </Card.Text>
                        <Card.Text >Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </>

        </>
    )

}



export default WeatherCard;