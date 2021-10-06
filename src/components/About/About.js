import React from 'react';
import Ceo from '../Ceo/Ceo';
import Teacher from '../Teacher/Teacher';
import Teachers from '../Teachers/Teachers';


const About = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-purple-600 font-mono my-8">About Us</h1>
            <hr className="w-2/3 mx-auto my-12" />
            <section>
                <h3 className="text-3xl font-bold text-center text-gray-600">Our CEO</h3>
                <Ceo></Ceo>
            </section>
            <section className="my-8 ">
                <h3 className="text-3xl font-bold text-center text-gray-600">Our Teachers</h3>
                <hr className="w-2/3 mx-auto my-12" />
                <Teachers></Teachers>
            </section>
        </div>
    );
};

export default About;