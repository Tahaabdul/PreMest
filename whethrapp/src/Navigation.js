import React from 'react';
import logo from './images/logo.png';
import { Navbar, FormControl, Nav, InputGroup, Button, Row, Col, Form} from 'react-bootstrap';
import Login from './Login';

function Navigation() {
    return (
        <>
<Navbar bg="dark"  variant="dark"  className="bg-light justify-content-between">
  <Navbar.Brand href="#home"> <img
        alt=""
        src={logo}
        width="50"
        height="25"
        className="d-inline-block align-top"
      />{' '}
      Whether(?)App</Navbar.Brand>
      <Button variant="dark">SignUp</Button>

      <Login/>
</Navbar>
        </>
    )
}


export default Navigation;