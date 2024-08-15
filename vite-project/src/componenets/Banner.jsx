import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
                <div className="w-full md:w-1/2 order-2 md:order-1 md:mt-16">
                    <div className='space-y-12 mt-16'>
                        <h1 className='text-4xl mt-10'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p>Step into a realm where words weave magic and stories beckon. Explore our curated collection of literary gems, where every book is a doorway to new adventures. Discover your next unforgettable read at Bookstore.</p>
                        <label className="input bg-white border-black input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <Link to="/signup" className="btn btn-secondary mt-6">Register</Link>
                </div>
                <div className="w-full md:w-1/2 order-1 -mt-5 dark">
                    <img className='-mt-16 w-85 h-85' src="https://img.freepik.com/free-photo/book-white-background_9975-6517.jpg?t=st=1723459126~exp=1723462726~hmac=3d5f79eb66667fc2d065080085e2c26888e6a52adaf46c0aedbb3939d8212a06&w=740" alt="banner" />
                </div>
            </div>
        </>

    );
}

export default Banner;
