import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../App.css';
const Subscribe = () => {
    return (
        <div>
            <div className="bg-lightdow px-5 pb-5 border-bottom text-center">
                <div className="bg-light shadow mb-4 pt-1 pb-3 rounded-pill">
                    <h2 className="text-highname mt-5 pt-4 mb-4">Subscribe to our Newsletter</h2>
                    <Form className="d-flex justify-content-center mb-5">
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label></Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;