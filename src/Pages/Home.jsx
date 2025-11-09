import React from 'react';
import HeroSection from '../Shared Component/HomeSection/HeroSection';
import StatisticsSection from '../Shared Component/HomeSection/StatisticsSection';
import TopRatedMovies from '../Shared Component/HomeSection/TopRatedMovies';
import GenreSection from '../Shared Component/HomeSection/GenreSection';
import AboutPlatform from '../Shared Component/HomeSection/AboutPlatform';

const Home = () => {
    return (
        <>
            <HeroSection/>   
            <StatisticsSection/>
            <TopRatedMovies/>
            <GenreSection/>
            <AboutPlatform/>
        </>
    );
};

export default Home;