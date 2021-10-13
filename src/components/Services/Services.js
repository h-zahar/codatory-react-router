import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import '../FeaturedServices/FeaturedServices.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data-json/services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div >
            <h2 className="text-center mt-5 mb-1 pt-3 pb-3">Services</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    services.map(info => { return <Service key={info.id} info={info} />})
                }
            </div>
            <p className="text-center mt-4"><strong>Coming Soon More...</strong></p>
        </div>
    )
}

export default Services;