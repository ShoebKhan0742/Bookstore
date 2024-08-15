import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
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
        <>
            <div className=''>
                <dialog id="my_modal_5" className="flex h-screen items-center justify-center">
                    <div className="border-[2px] shadow-md p-10 rounded-md">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg">Signup</h3>
                            {/* name */}
                            <div className='mt-3 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your full name' className='w-80 py-1 px-3 border rounded-md outline-none'
                                {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-500'>Required</span>}
                            </div>
                            {/* email */}
                            <div className='mt-3 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email' className='w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("email", { required: true })}/>
                                {errors.email && <span className='text-red-500'>Required</span>}
                            </div>
                            {/* password */}
                            <div className='mt-3 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Enter your password' className='w-80 py-1 px-3 border rounded-md outline-none' 
                                {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-500'>Required</span>}
                            </div>

                            <div className='flex justify-around mt-5'>
                                <button className='bg-pink-400 text-white rounded-md px-3 py-2 duration-200 hover:bg-pink-600'>
                                    Signup
                                </button>
                                <p>Have an account?</p>

                                <Link to="/" className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById("my_modal_5").showModal()}>
                                    Login
                                </Link>
                                {/* <Login /> */}

                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to="/" className="btn">Close</Link>
                                </form>
                            </div>
                        </form>
                    </div>
                </dialog></div>
        </>
    );
}

export default Signup;




