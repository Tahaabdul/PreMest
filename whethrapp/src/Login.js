import { useState, } from 'react'
import { Form, Row, InputGroup, FormControl, Col, Button } from 'react-bootstrap';

function Login({ setIsLoggedIn, isLoggedIn }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleEmailInput(event) {
        setEmail(event.target.value);
    };
    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }


    function handleLogin(event) {
        event.preventDefault();
        if (email === "taha@gmail.com" && password === "123456") {
            setIsLoggedIn(true);
        }
    }

    return (
        <Form>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={email} type="text" id="inlineFormInputGroupUsername" placeholder="Email" onChange={handleEmailInput} />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={handlePasswordInput} />
                </Col>
                <Button variant="outline-light" onClick={handleLogin}>Login</Button>
            </Row>
        </Form>

    )
}


export default Login;