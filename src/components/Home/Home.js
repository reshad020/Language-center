import React, { useEffect, useState } from 'react';
import useCourses from '../../customHooks/useCourses';
import Course from '../Course/Course';
import img from '../../images/language2.png'

const Home = (props) => {
    const [courses] = useCourses();
    const { handleEnrol } = props;
    const featuredCourses = courses.filter(course => course.rating >= 4);
    return (
        <div className="my-12">
            <div className="md:flex md:mx-16">
                <article className="my-auto space-y-6">
                    <h4 className="font-mono text-3xl text-center text-gray-600 ">Welcome to <span className="text-pink-600 font-bold">Language Master!</span></h4>
                    <h5 className="text-2xl font-light tracking-widest text-center">Learn Language and Travel The World</h5>
                </article>
                <img className="mx-auto w-2/5" src={img} alt="" />
            </div>
            <h1 className="text-4xl text-center font-bold text-pink-600 font-mono mt-16 mb-8">Featured Courses</h1>
            <hr className="w-3/4 mx-auto" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:mx-52 my-8">
                {
                    featuredCourses.map(course => <Course handleEnrol={handleEnrol} key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Home;