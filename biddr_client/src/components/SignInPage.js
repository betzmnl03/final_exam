import React from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import {Container,Col,Row} from 'react-bootstrap'

const SignInPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData= new FormData(currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        handleSubmit(formValues);
        history.push('/auctions');

    }
    return(
        <main>
            <Container>
                <Row className="mb-4">
        <Col xs={6} >
        <h1>Sign In</h1>
        <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name="email"placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" name="password"/>
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
export default SignInPage;