import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'


function SignUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [agreedTOC, setAgreedTOC] = useState(false);


    function handleEmailInput(event) {
        setEmail(event.target.value);
    };

    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }

    function handleAgreedTOC(event) {
        setAgreedTOC(event.target.value);
    }




    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Create Account
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up To Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} placeholder="Enter email" onChange={handleEmailInput} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required value={password} onChange={handlePasswordInput} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" value={agreedTOC} onChange={handleAgreedTOC} />
                            <Form.Text className="text-muted">
                                Checking the box means you've agreed to our Terms and Conditions.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}




export default SignUp;