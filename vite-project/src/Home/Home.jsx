import React from 'react';
import Navbar from "../componenets/Navbar";
import Banner from "../componenets/Banner";
import Footer from '../componenets/Footer';
import Freebook from '../componenets/Freebook';

function Home () {
    return ( 
        <>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
        </>
     );
}

export default Home;