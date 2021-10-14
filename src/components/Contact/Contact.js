import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import Address from '../Address/Address';

const Contact = () => {
    const [address, setAddress] = useState([]);
    useEffect(() => {
        fetch('./data-json/contact-data.json')
        .then(response => response.json())
        .then(data => setAddress(data))
    }, []);

    return (
        <div>
            <div className="bg-lightdow">
                <Container>
                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                        <div className="m-3">
                            <h1>Leave Us a Message</h1>
                            <p style={{maxWidth: '450px', minWidth: '320px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis iusto tempore animi repellendus dolores. Voluptatibus ex assumenda voluptas fuga?</p>
                            <div>
                                {
                                    address.map(iAddress => {
                                        return <Address key={iAddress.title} iAddress={iAddress} />
                                    })
                                }
                            </div>
                        </div>

                        <div style={{maxWidth: '400px', minWidth: '300px', backgroundColor: '#fff'}} className="py-4 px-3 shadow border">
                            <Form>
                                <FormGroup className="mb-3">
                                    <Form.Label></Form.Label>
                                    <Form.Control className="bg-light" type="text" placeholder="Enter Name" />
                                    <Form.Text className="text-muted">
                                        We'll never share your name with anyone else.
                                    </Form.Text>
                                </FormGroup>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control className="bg-light" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                
                                <FormGroup>
                                    <Form.Label></Form.Label>
                                    <Form.Control className="bg-light" type="text" placeholder="Enter Subject" />
                                </FormGroup>

                                <Form.Group className="mb-4" controlId="messageForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control className="bg-light" as="textarea" style={{resize: 'none'}} rows={3} placeholder="Enter Message" />
                                </Form.Group>
                                <Button variant="success" type="submit">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact;