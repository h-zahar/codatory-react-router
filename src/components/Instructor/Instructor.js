import React from 'react';
import { Card } from 'react-bootstrap';
import '../../App.css';

const Instructor = (props) => {
    const {img_i, name, designation} = props.instructor;
    let url = `./images/about/top-instructors/instructor-${img_i}.jpg`;

    return (
        <div>
            <div>
                <Card className="mt-2 mx-2" style={{ width: '16rem' }}>
                    <Card.Img style={{borderRadius: '12px'}} className="px-2 pt-2" variant="top" src={url} />
                    <Card.Body className="text-center my-3">
                        <Card.Title className="text-highname">{name}</Card.Title>
                        <Card.Text className="text-paragraph">
                            {designation}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Instructor;