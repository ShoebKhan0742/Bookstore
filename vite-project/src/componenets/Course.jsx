import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';  // Correctly import Link

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl bg-white text-black container mx-auto md:px-20 px-4'>
                <div className='items-center justify-center text-center'>
                    <h1 className='text-1xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
                    <p className='mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati voluptatibus ullam mollitia aperiam reiciendis rem officiis expedita asperiores iure, adipisci ducimus ipsa beatae amet ex voluptate doloribus dolor ea. Placeat, consequatur repellat at quae pariatur dolore magni alias reiciendis veritatis et. Placeat eveniet dolor esse suscipit consectetur fuga, nam cumque sed, porro, ducimus eius!</p>
                    <Link to={"/"}>  {/* Correctly use Link with a capital 'L' */}
                        <button className='bg-pink-500 hover:bg-pink-600 text-black px-4 py-2 rounded-md mt-7 duration-300'>
                            Back
                        </button>
                    </Link>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    );
}

export default Course;
