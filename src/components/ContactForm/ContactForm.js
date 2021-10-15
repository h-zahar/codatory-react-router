import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div>
            <div style={{ maxWidth: '400px', minWidth: '300px', backgroundColor: '#fff' }} className="py-4 px-3 shadow border">
                <Form>
                    <FormGroup>
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
                        <Form.Control className="bg-light" as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Enter Message" />
                    </Form.Group>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default ContactForm;