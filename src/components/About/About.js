import React from 'react';

const About = () => {
    let id = [1, 2, 3];

    return (
        <div>
            <h2 className="text-center mt-5 mb-4 pt-3 pb-5">About Us</h2>
            <div className="d-flex justify-content-center align-items-end">
                <img className="mx-2 my-2" style={{height: '365px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[0]}.jpg`} alt="" />
                <img className="mx-2 my-2" style={{height: '410px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[1]}.jpg`} alt="" />
                <img className="mx-2 my-2" style={{height: '365px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[2]}.jpg`} alt="" />
            </div>
        </div>
    )
}

export default About;