import { useState, } from 'react'
import { Form, Row, InputGroup, FormControl, Col, Button } from 'react-bootstrap';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isloggedIn, setIsLoggedIn] = useState(false);
    
    function handleEmailInput (event) {
        setEmail(event.target.value);
    };
    function handlePasswordInput(event){
    setPassword(event.target.value);
    }
    

    function handleLogin (event) {
        event.preventDefault();
        if(email=== "taha@email.com" && password==="taha1234"){
            setIsLoggedIn(true);
            console.log(isloggedIn)
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
                        <FormControl  value={email} type="text" id="inlineFormInputGroupUsername" placeholder="Email" onChange={handleEmailInput} />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Control  value={password} type="password" placeholder="Password" onChange={handlePasswordInput}/>
                </Col>
                <Button variant="outline-light" onClick={handleLogin}>Login</Button>
            </Row>
        </Form>

    )
}


export default Login;