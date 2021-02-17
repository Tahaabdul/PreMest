import React from 'react';
import logo from './images/logo.png';

import { Navbar, FormControl, Nav, InputGroup, Button, Row, Col, Form} from 'react-bootstrap';

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
      <Form>
  <Row>
    <Col>
    <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Email" />
      </InputGroup>
    </Col>
    <Col>
    <Form.Control type="password" placeholder="Password" />
    </Col>
    <Button variant="outline-light">Login</Button>
  </Row>
</Form>
</Navbar>
        </>
    )
}


export default Navigation;