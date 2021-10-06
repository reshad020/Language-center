import React, { useEffect, useState } from 'react';
import useCart from '../../customHooks/useCart';
import useCourses from '../../customHooks/useCourses';
import Course from '../Course/Course';

const Courses = (props) => {
    const { handleEnrol } = props;
    const [courses] = useCourses();

    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-pink-600 font-mono my-8">Our Courses</h1>
            <hr className="w-3/4 mx-auto" />
            <div className="mx-16 my-8 grid sm:grid-cols-1 md:grid-cols-3 gap-16">
                {
                    courses.map(course => <Course handleEnrol={handleEnrol} key={courses.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;