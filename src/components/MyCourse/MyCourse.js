import React from 'react';

const MyCourse = (props) => {
    const { language, details, picture, cost, rating, lesson, id } = props.course;

    return (
        <div className="md:flex w-4/5 shadow-lg rounded-xl space-x-6 mx-auto space-y-6">
            {/* picture  */}
            <div className="md:w-96 my-auto mx-4 md:py-4">
                <img className="rounded-lg" src={picture} alt="" />
            </div>
            {/* details  */}
            <div className="space-y-4 my-auto pb-4">
                <h3 className="text-2xl ml-auto font-bold"> <span className="text-gray-600">Course Title:</span> {language}</h3>
                <h3 className="text-2xl ml-auto font-bold"> <span className="text-pink-600"></span> <i class="fas fa-play-circle text-pink-600"></i> {lesson} Classes Left</h3>
                <p>{details}</p>
                <button className="w-44 h-8 bg-pink-600 text-white rounded-md focus:ring-2 focus:bg-pink-600 hover:bg-pink-400">Start Now</button>
            </div>
        </div>
    );
};

export default MyCourse;