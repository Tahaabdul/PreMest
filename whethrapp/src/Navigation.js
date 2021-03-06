import React from 'react';
// import logo from './images/logo.png';
import { Navbar, } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';
import SignOut from './SignOut';
import {faCloudSunRain} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation({ setIsLoggedIn, isLoggedIn }) {

  return (
    <>
      <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
        <Navbar.Brand href="#home">
          {<FontAwesomeIcon icon={faCloudSunRain}  size="lg"/>}
      Whether(?)App</Navbar.Brand>
       {!isLoggedIn  &&<SignUp />}
       {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
       {isLoggedIn && <SignOut/>}

      </Navbar>
    </>
  )
}


export default Navigation;