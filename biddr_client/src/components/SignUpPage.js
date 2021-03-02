import React from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import {Container,Col,Row} from 'react-bootstrap'

const SignUpPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData = new FormData(currentTarget);
        const formValues={
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        handleSubmit(formValues)
        history.push('/auctions')
    }
    return(
        <main>
                       <Container>
                <Row className="mb-4">
        <Col xs={6} >
        <h1>Sign Up</h1>
        <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name </Form.Label>
                    <Form.Control type="text" name="first_name"placeholder="John" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control type="text" name="last_name"placeholder="Snow" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name="email"placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" name="password"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password Confirmation </Form.Label>
                    <Form.Control type="password" name="password_confirmation"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

        </Form>
        </Col>
        </Row>
        </Container>
        </main>
    )
}
export default SignUpPage;