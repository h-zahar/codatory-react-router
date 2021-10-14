import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import LeaveAMessage from '../LeaveAMessage/LeaveAMessage';

const Contact = () => {
    return (
        <div>
            <div className="bg-lightdow">
                <Container>
                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                        <LeaveAMessage />
                        <ContactForm />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact;