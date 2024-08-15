import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form";

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data); // Handle the form data
    };

    return (
        <div className="container mx-auto p-10">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-pink-600">Contact Us</h1>
                <p className="mt-3 text-lg text-gray-700">We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.</p>
            </div>

            {/* Contact Form */}
            <div className="mt-10 flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-500'>Required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-500'>Required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            {...register("subject", { required: true })}
                        />
                        {errors.subject && <span className='text-red-500'>Required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                            {...register("message", { required: true })}
                        ></textarea>
                        {errors.message && <span className='text-red-500'>Required</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Store Information */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-pink-600">Our Store</h2>
                <p className="mt-2 text-gray-700">123 Book Street, Booktown, BK 12345</p>
                <p className="mt-2 text-gray-700">Phone: (123) 456-7890</p>
                <p className="mt-2 text-gray-700">Email: contact@bookstore.com</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 flex justify-center space-x-6">
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default Contact;

