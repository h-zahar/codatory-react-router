import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './FeaturedService.css';

const FeaturedService = (props) => {
    const {img, title, stars, reviews, enrolled, duration, cost} = props.info;
    
    return (
        <div>
            <div className="mx-3 mt-3 shadow rounded">
                <Card className="border-0" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img} style={{ height: '10rem', borderBottom: '1px solid #93969e' }} />
                    <Card.Body>
                        <Card.Title className="text-hover mt-3 mb-4">{title}</Card.Title>
                            <Card.Text>
                            <Rating
                            emptySymbol="fa-regular fa-star"
                            fullSymbol="fa-solid fa-star"
                            initialRating={stars} 
                            readonly 
                            /><span className="ms-2 text-details">{stars} ({reviews})</span>
                            <p className="mt-3"><span className="text-details"><i className="me-1 fa-regular fa-user"></i>{enrolled}</span><span className="ms-4 text-details"><i className="me-1 fa-regular fa-clock"></i>{duration}</span></p>
                            </Card.Text>
                            <div className="mt-3 mb-2 pt-4 border-top d-flex justify-content-around">
                            <p className="my-auto text-details"><strong>${cost}</strong></p>
                            <Button variant="outline-success">Get Enrolled</Button>
                            </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default FeaturedService;