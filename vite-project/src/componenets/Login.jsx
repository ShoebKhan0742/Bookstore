import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Added the onSubmit function to handle form submission
    const onSubmit = data => {
        console.log(data); // Handle the form data
    };

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* Modified form action to use onSubmit handler */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-lg">LogIn</h3>

                        {/* email */}
                        <div className='mt-3 space-y-2'>
                            <span>Email</span>
                            <br />
                            {/* Updated the register key from "exampleRequired" to "email" */}
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                className='w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("email", { required: true })}
                            />
                            {/* Added error handling for email */}
                            {errors.email && <span className='text-red-500'>Required</span>}
                        </div>

                        {/* password */}
                        <div className='mt-3 space-y-2'>
                            <span>Password</span>
                            <br />
                            {/* Updated the register key from "exampleRequired" to "password" */}
                            <input 
                                type="password" 
                                placeholder='Enter your password' 
                                className='w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("password", { required: true })}
                            />
                            {/* Added error handling for password */}
                            {errors.password && <span className='text-red-500 font-sm'>Required</span>}
                        </div>

                        <div className='flex justify-around mt-5'>
                            <button className='bg-pink-400 text-white rounded-md px-3 py-2 duration-200 hover:bg-pink-600'>
                                LogIn
                            </button>
                            <p>Not Registered? 
                                <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Signup</Link>
                            </p>
                        </div>

                        <div className="modal-action">
                            {/* Modified the Close button to close the modal using JavaScript */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
