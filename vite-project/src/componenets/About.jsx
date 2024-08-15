import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
            <div>
                {/* Header Section */}
                <div className="mt-28 flex items-center justify-center text-pink-600">
                    <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>About Us</h1>
                </div>

                {/* Introduction Section */}
                <div>
                    <p className="flex items-center justify-center mt-7" style={{ fontSize: '20px', color: 'black' }}>
                        Your Gateway to the World of Books
                    </p>
                    <p className="flex items-center justify-center mx-10 mt-4 text-black">
                        Welcome to Book Store, where every book tells a story, and every story finds a reader. Established in 2021, our bookstore was born from a deep passion for literature and a desire to create a haven for book lovers. Whether you’re looking for the latest bestsellers or hidden gems, we’re here to help you discover your next great read.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="flex justify-between">
                    {/* Mission Section */}
                    <div className="flex-1 mx-2 border border-pink-500 mt-10 rounded-xl p-5 bg-pink-300">
                        <p className="mx-5 mt-2 text-pink-600" style={{ fontSize: '20px' }}>Our Mission</p>
                        <p className="mx-5 mt-2 text-black">
                            At Book Store, our mission is to foster a love for reading within our community. We believe that books have the power to transform lives, and we’re committed to providing a space where readers of all ages can explore, learn, and grow.
                        </p>
                    </div>

                    {/* What We Offer Section */}
                    <div className="flex-1 mx-2 border border-pink-500 mt-10 rounded-xl p-5 bg-pink-300">
                        <p className="mx-5 mt-2 text-pink-600" style={{ fontSize: '20px' }}>What We Offer</p>
                        <ul className="mx-5 mt-2 text-black list-disc list-inside">
                            <li>A wide selection of genres: From fiction and non-fiction to children’s books and graphic novels.</li>
                            <li>Rare and Collectible Books: For the avid collector or those looking for something unique.</li>
                            <li>Book Clubs and Events: Join us for author signings, reading groups, and more!</li>
                        </ul>
                    </div>

                    {/* Values Section */}
                    <div className="flex-1 mx-2 border border-pink-500 mt-10 rounded-xl p-5 bg-pink-300">
                        <p className="mx-5 mt-2 text-pink-600" style={{ fontSize: '20px' }}>Our Values</p>
                        <p className="mx-5 mt-2 text-black">
                            We believe in the power of community and strive to make our bookstore a welcoming space for all. Our knowledgeable staff is always ready to offer personalized recommendations and ensure that every customer leaves with a book they love.
                        </p>
                    </div>

                </div>
                <div className='mt-10'>
                    <p className="mx-5 mt-2 text-pink-600" style={{ fontSize: '20px' }}>Contact Information</p>

                    <p className="mx-5 mt-2 text-black">
                        We’d love to see you in person! Visit us at 123 Book Street, Booktown, BK 12345, open 09 am to 09 pm. For inquiries, feel free to email us at [bookstore@example.com] or give us a call at [(123) 456-7890]. You can also follow us on social media to stay updated on our latest arrivals and events.
                    </p>

                </div>
                <div className="flex flex-col items-center mt-10 mb-10">
                    <h2 className="text-2xl font-bold text-pink-600">Follow Us</h2>
                    <div className="flex space-x-6 mt-5">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        {/* Twitter */}
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
