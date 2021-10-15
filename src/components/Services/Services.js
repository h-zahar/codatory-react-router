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
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner.jpg') no-repeat center bottom fixed`, backgroundSize:'cover', height:"250px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 text-light">
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
                        
            <div className="mt-5 pt-4 d-flex flex-wrap justify-content-center">
                {
                    services.map(info => { return <Service key={info.id} info={info} />})
                }
            </div>
            <p className="text-center mt-4 mb-5"><strong>Coming Soon More...</strong></p>
        </div>
    )
}

export default Services;