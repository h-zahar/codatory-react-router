import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedService from '../FeaturedService/FeaturedService';
import './FeaturedServices.css';
import '../../App.css';

const FeaturedServices = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('./data-json/featured.json')
        .then(response => response.json())
        .then(data => setFeatured(data))
    },[]);

    return (
        <div>
            <div className="bg-lighdow">
                <h2 className="text-center mt-5 mb-3 pt-5 pb-4"><Link className="text-title" to="/services">Featured Services</Link></h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        featured.map(info => { return <FeaturedService key={info.id} info={info} />})
                    }
                </div>
                <div className="d-flex justify-content-center mt-5 pt-2 mb-5 pb-5">
                <Link style={{color: 'unset', textDecoration: 'unset'}} to="/services"><Button variant="success" className="shadow-lg mb-4 py-3 px-4 rounded">Explore More</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedServices;