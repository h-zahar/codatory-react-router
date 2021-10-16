import React, { useEffect, useState } from 'react';
import Address from '../Address/Address';

const LeaveAMessage = () => {
    const [address, setAddress] = useState([]);
    useEffect(() => {
        fetch('./data-json/contact-data.json')
        .then(response => response.json())
        .then(data => setAddress(data))
    }, []);

    return (
        <div>
            <div className="m-3">
                <h1>Leave Us a Message</h1>
                <p style={{maxWidth: '450px', minWidth: '220px'}}>Wanna reach out? So simple! fill out the form and your work is done. We are so responsive just as our site is with latest CSS and Bootstrap:3</p>
                <div>
                    {
                        address.map(iAddress => {
                            return <Address key={iAddress.title} iAddress={iAddress} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LeaveAMessage;