import React, { useEffect, useState } from 'react';
import TheBestData from '../TheBestData/TheBestData';
import '../../App.css';

const WhyTheBest = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('./data-json/why-the-best.json')
        .then(response => response.json())
        .then(data => setInfo(data))
    }, []);
    return (
        <div>
            <div className="mx-2 text-center mt-3 py-5 bg-lightdow border-bottom">
                <p className="mt-5 pt-3 text-success text-uppercase">Best Learning Platform</p>
                <h1 className="text-highname">Why We Are The Best</h1>
                <div className="d-flex flex-wrap mt-4 pt-4 justify-content-center">
                    {
                        info.map(data => {
                            return <TheBestData key={data.title} data={data} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyTheBest;