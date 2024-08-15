import React from 'react';
import Navbar from '../componenets/Navbar';
import Course from '../componenets/Course';
import Footer from '../componenets/Footer';


function Courses() {
    
    return (

        <>
            <Navbar />
            <div className='min-h-screen mt-28'>
            <Course />
            </div>
            <Footer />


        </>
    );
}


export default Courses;
