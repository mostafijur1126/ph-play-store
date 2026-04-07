import React from 'react';
import Banner from './banner/Banner';
import Stats from './stats/Stats';
import TrandingApps from './tranding/TrandingApps';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrandingApps></TrandingApps>
        </div>
    );
};

export default HomePage;