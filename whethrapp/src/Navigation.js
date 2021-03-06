import React from 'react';
import logo from './images/logo.png';
import { Navbar, } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';
import SignOut from './SignOut';

function Navigation({ setIsLoggedIn, isLoggedIn }) {

  return (
    <>
      <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
        <Navbar.Brand href="#home"> <img
          alt=""
          src={logo}
          width="50"
          height="25"
          className="d-inline-block align-top"
        />{' '}
      Whether(?)App</Navbar.Brand>
       {!isLoggedIn  &&<SignUp />}
       {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
       {isLoggedIn && <SignOut/>}

      </Navbar>
    </>
  )
}


export default Navigation;