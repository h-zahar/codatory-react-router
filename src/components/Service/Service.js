import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import '../FeaturedService/FeaturedService.css'

const Service = (props) => {
    const {img, title, stars, reviews, enrolled, duration, cost} = props.info;

    return (
        <div>
            <div className="m-3 shadow rounded">
                <Card className="border-0" style={{ width: '18rem', height: '29rem' }}>
                    <Card.Img variant="top" src={img} style={{ height: '11rem', borderBottom: '1px solid #93969e' }} />
                    <Card.Body>
                        <Card.Title className="text-hover mt-1 mb-4 d-flex justify-content-center h-25"><p className="my-auto text-center">{title}</p></Card.Title>
                            <Card.Text>
                            <Rating
                            emptySymbol="fa-regular fa-star"
                            fullSymbol="fa-solid fa-star"
                            initialRating={stars} 
                            readonly 
                            /><span className="ms-2 text-details">{stars} ({reviews})</span>
                            <p className="mt-3"><span className="text-details"><i className="me-1 fa-regular fa-user"></i>{enrolled}</span><span className="m-3 text-details"><i className="me-1 fa-regular fa-clock"></i>{duration}</span></p>
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

export default Service;