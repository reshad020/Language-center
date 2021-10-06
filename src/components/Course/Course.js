import React from 'react';
import Rating from 'react-rating';

const Course = (props) => {
    const { language, details, picture, cost, rating, lesson, id } = props.course;
    const { handleEnrol } = props;
    return (
        <div className=" p-4 rounded-lg shadow-md hover:shadow-xl">
            {/* Image section  */}
            <div className="rounded-xl">
                <img className="rounded-xl" src={picture} alt="" />
            </div>
            <div className="mt-4">
                {/* const & name section  */}
                <div className="md:flex my-4 mr-2">
                    <h3 className="text-xl font-semibold text-pink-800">${cost}</h3>
                    <h3 className="text-xl ml-auto font-bold">{language}</h3>
                </div>
                {/* details  */}
                <p className="mb-4"> <span>{details}</span> </p>
                {/* rating section  */}
                <div className="flex">
                    <div>
                        <small className="mr-4">{rating}</small>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="fa fa-star-o fa-2x text-yellow-500 text-sm"
                            fullSymbol="fa fa-star fa-2x text-yellow-500 text-sm"
                        />
                    </div>
                    <p className="ml-auto mr-2"><i className="fas fa-play-circle text-pink-800"></i> {lesson} Classes</p>
                </div>
                {/* button  */}
                <div className="text-center mt-6">
                    <button onClick={() => handleEnrol(id)} className="w-44 h-8 bg-pink-600 text-white rounded-md focus:ring-2 focus:bg-pink-800 hover:bg-pink-70000"> Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;