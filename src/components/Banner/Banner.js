import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner.jpg') no-repeat center center fixed`, backgroundSize:'cover', height:"520px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 text-light">
                        <p className="text-success text-uppercase">Optimize Your Learning Process</p>
                        <h1 className="mb-4">Connect With Our Expert And Start Learning Today</h1>
                        <p className="pt-3">We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                        <Link style={{color: 'unset', textDecoration: 'unset'}} to="/services"><Button variant="success" className="shadow-lg mt-3 mb-4 rounded">Explore</Button></Link>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Banner;