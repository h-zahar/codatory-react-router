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
                <p style={{maxWidth: '450px', minWidth: '220px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis iusto tempore animi repellendus dolores. Voluptatibus ex assumenda voluptas fuga?</p>
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