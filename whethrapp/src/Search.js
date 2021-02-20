import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';



function Search() {
    return (
        <>
            <Form inline >
                <FormControl type="text" placeholder="Search" style={{ width: "50%", position: 'fixed', top: "30%", left: "25%" }} />
                <Button variant="dark" style={{ position: 'fixed', top: "30%", left: "75%" }}>Search</Button>
            </Form>
        </>
    )
}

export default Search;
