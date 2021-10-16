import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const WhoAreWe = () => {
    const [count, setCount] = useState(0);
    const [enrolles, setEnrolles] = useState([]);
    useEffect(() => {
        fetch('./data-json/services.json')
        .then(response => response.json())
        .then(data => setEnrolles(
            data.map(
                perCount => {
                    return perCount.enrolled;
                }
            )
        ));
    }, []);

    useEffect(() => {
        let c = 0;
        enrolles.forEach(element => {
            c += element;
        });
        setCount(c);
    }, [enrolles]);

    return (
        <div>
            <Container>
                <div className="m-5 p-5 text-center">
                    <p className="text-success text-uppercase">Who Are We</p>
                    <h1 className="text-highname">We Are Providing The Best Quality Online Courses. Our All Instructors Are High Expert</h1>
                    <p className="mt-4 mb-5 pt-2 pb-5 text-paragraph">We are Codatory. You can say, 'Code Factory' or 'Code Laboratory' or how about 'Code Territoty'? All of them are correct. We are the awesome platform to produce awesome coders. Our top notch instructors are so experience to teach you efficiently. You need to learn sharp and tight? Here we are for you.</p>

                    <div className="d-flex flex-wrap justify-content-around">
                        <div>
                            <p className="text-success fs-2"><strong>{count}+</strong></p>
                            <p className="text-highname fs-5"><strong>Students Enrolled</strong></p>
                        </div>
                        <div>
                            <p className="text-success fs-2"><strong>200+</strong></p>
                            <p className="text-highname fs-5"><strong>Registered Instructors</strong></p>
                        </div>
                        <div>
                            <p className="text-success fs-2"><strong>100%</strong></p>
                            <p className="text-highname fs-5"><strong>Success Rate</strong></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhoAreWe;