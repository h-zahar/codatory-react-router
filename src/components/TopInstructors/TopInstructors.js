import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import '../../App.css';

const TopInstructors = () => {
    const [iInfo, setIinfo] = useState([]);
    useEffect(() => {
        fetch('./data-json/top-instructors.json')
        .then(response => response.json())
        .then(data => setIinfo(data))
    }, []);

    return (
        <div>
            <div className="bg-lightdow mb-5 pt-5 pb-5">
                <div className="text-center">
                    <p className="mt-4 mb-2 pt-2 text-success text-uppercase">Instructors</p>
                    <h1 className="text-highname">Our Top Instructors</h1>
                </div>

                <div className="d-flex flex-wrap justify-content-center my-5 pb-4">
                    {
                        iInfo.map(instructor => {
                            return <Instructor key={instructor.id} instructor={instructor} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopInstructors;