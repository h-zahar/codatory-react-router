import React from 'react';
import TopInstructors from '../TopInstructors/TopInstructors';
import WhoAreWe from '../WhoAreWe/WhoAreWe';
import WhyTheBest from '../WhyTheBest/WhyTheBest';

const About = () => {
    let id = [1, 2, 3];

    return (
        <div>
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner.jpg') no-repeat center bottom fixed`, backgroundSize:'cover', height:"250px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 text-light">
                        <h1>About Us</h1>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-5 d-flex justify-content-center align-items-end">
                <img className="mx-2 my-2" style={{height: '365px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[0]}.jpg`} alt="" />
                <img className="mx-2 my-2" style={{height: '410px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[1]}.jpg`} alt="" />
                <img className="mx-2 my-2" style={{height: '365px', maxWidth: '330px', borderRadius: '15px'}} src={`./images/about/groups/group-${id[2]}.jpg`} alt="" />
            </div>

            <WhoAreWe />
            <WhyTheBest />
            <TopInstructors />

        </div>
    )
}

export default About;