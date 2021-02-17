import React from 'react';
import { Card, Button, Form, FormControl, } from 'react-bootstrap'
import sunny from './images/animated/day.svg';

function WeatherCard() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log('Latitude: ', lat);
            console.log('Longitude: ', long);
        }, error => {
            console.log('Need access to get location.');
        });
    }
    return (
        <>
            <Form inline >
                <FormControl type="text" placeholder="Search" style={{ width: "50%", position: 'fixed', top: "30%", left: "25%" }} />
                <Button variant="dark" style={{ position: 'fixed', top: "30%", left: "75%" }}>Search</Button>
            </Form>

            <Card style={{ width: '18rem', position: 'fixed', top: "50%", left: "40%", }}>
                <Card.Img src={sunny} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Location: </Card.Title>
                    <Card.Text>
                        <h1>28&deg;</h1>
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>

    );
}



export default WeatherCard;