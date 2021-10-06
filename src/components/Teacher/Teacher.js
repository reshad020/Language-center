import React from 'react';

const Teacher = (props) => {
    return (
        <div className=" shadow-xl p-8 border">
            <div className="w-full border mx-auto">
                <img className="mx-auto" src={props.img} alt="" />
            </div>
            <div>
                <h3 className="text-gray-600 text-2xl font-semibold text-center mt-8">{props.name}</h3>
            </div>
        </div>
    );
};

export default Teacher;