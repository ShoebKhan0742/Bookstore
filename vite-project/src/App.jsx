import React from 'react';
import Home from './Home/Home';
// import Course from './componenets/Course';
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './componenets/Signup';
import Login from './componenets/Login';
import About1 from './About/About1';
import Contacts from './Contact/Contacts';


const app = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/contact" element={<Contacts />} />
          

        </Routes>
      </div>
    </>
  )
}

export default app;
