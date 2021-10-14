import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Subscribe />
            <FeaturedServices />
        </div>
    )
}

export default Home;