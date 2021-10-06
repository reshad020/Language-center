import React from 'react';
import img from '../../images/reshad.jpeg'

const Ceo = () => {
    return (
        <div>
            <section className="md:flex  space-x-4 mx-8 md:mx-28 py-8">
                <div className="md:w-1/2 my-auto space-y-4">

                    <h4 className="text-2xl font-semibold">Aehtesham Reshad</h4>
                    <p>
                        Aehtesham Reshad is a Language professional who grew up in Bangladesh and currently studying in Ruet. Through his life he has travelled many countries and mastered many different language.
                    </p>
                    <button className="border-2 p-4 rounded-md font-light text-pink-700 hover:shadow-md"> <a href="https://www.linkedin.com/" target="_blank">Explore More About Reshad  &gt;&gt;</a> </button>
                </div>
                <div className=" md:w-1/2 mt-6 md: mt-0">
                    <img className="w-3/4 mx-auto rounded-full" src={img} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Ceo;