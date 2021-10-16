import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import LeaveAMessage from '../LeaveAMessage/LeaveAMessage';
import '../../App.css';

const Contact = () => {
    return (
        <div>
            <div className="bg-lightdow">
                <Container>
                    <div className="py-5 d-flex justify-content-center flex-wrap align-items-center">
                        <LeaveAMessage />
                        <ContactForm />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact;