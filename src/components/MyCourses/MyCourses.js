import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import useCart from '../../customHooks/useCart';
import MyCourse from '../MyCourse/MyCourse';

const MyCourses = () => {
    const cart = useContext(CartContext);
    return (
        <div className="my-16">

            <h1 className="text-5xl text-center font-bold text-pink-800 font-mono my-8">Enrolled Courses</h1>
            <hr className="w-3/4 mx-auto my-16" />
            {
                cart.length === 0 &&
                <div className="space-y-6 text-center">
                    <h4 className="text-center text-2xl">Currently You Haven't Been Enrolled in Any Courses</h4>
                    <h3 className="text-center text-3xl">Enroll in Our Language Courses to Win The World</h3>
                    <button className="w-44 h-8 bg-pink-600 text-white rounded-md focus:ring-2 focus:bg-pink-800 hover:bg-pink-400 shadow-2xl"> <Link to="/courses">See Our Courses</Link></button>
                </div>
            }
            <div className="grid grid-cols-1 gap-10 mb-16">
                {
                    cart.map(course => <MyCourse course={course}></MyCourse>)
                }
            </div>
            <h4 className="font-mono text-3xl text-center">Start Your Class Now and Enjoy Learning New Languages!</h4>
        </div>
    );
};

export default MyCourses;