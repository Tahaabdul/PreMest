import React from 'react';
import {Button, } from 'react-bootstrap';



function SignOut({setIsLoggedIn}) {
    function handleLogOut() {
        setIsLoggedIn(false);
    }
    
    return (
        <>
        <Button variant= "secondary" onClick={handleLogOut}>Log Out</Button>
        </>
    )
}



export default SignOut;