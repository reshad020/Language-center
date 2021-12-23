import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase'
import useCourses from '../../customHooks/useCourses';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Checkout = (props) => {
    const {id} = useParams();
    const {user} = useFirebase();
    const [enrolledCourse, setEnrolledCourse] = useState({});
    const { register, handleSubmit,watch,setValue, reset, formState: { errors } } = useForm();
    

    useEffect(() => {
        fetch(`https://ancient-cliffs-97923.herokuapp.com/courses/${id}`)
            .then(res => res.json())
            .then(data =>{
                setEnrolledCourse(data);
                console.log(enrolledCourse)}
            ) 
    }, []);
    
    setValue('email',user.email)
    setValue('name',user.displayName)
    setValue('language',enrolledCourse.language)
    setValue('price',enrolledCourse.cost)

    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log(data);

        axios.post('http://localhost:5000/orders',data)
        .then(res =>{
            alert("added successfully");
            reset();
     })
    }

    
    
    return (
        
        <div className='flex justify-center items-center'>
            <div className='md:flex gap-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className="font-bold text-indigo-800" >Email Address</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2 '  placeholder='Email' {...register("email")}/>
                    <h2 className="font-bold text-indigo-800" >Your Name</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2'  placeholder='Name' {...register("name")}/>
                </div>
                <div>
                    <h2 className="font-bold text-indigo-800" >Mobile No.</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2' {...register("contact")}  placeholder='ContactNo'/>
                    <h2 className="font-bold text-indigo-800" >Course Name</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2'  placeholder='Course Name' {...register("language")}/>
                </div>
                <div>
                    <h2 className="font-bold text-indigo-800" >Price</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2' placeholder='Course Price' {...register("price")}/>
                     <h2 className="font-bold text-indigo-800" >Bkash No.</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2' {...register("bkashNo")} placeholder='Bkash no.'/>
                </div>
                <div>
                    <h2 className="font-bold text-indigo-800" >Enter verification code</h2> 
                    <input className='rounded-2xl w-96 p-3 mt-5 ml-5 mb-3 border-solid border-2' placeholder='Bkash Verification number' {...register("bkashPin")}/>
                   
                </div>
                <div className='flex justify-center items-center w-96'>
                    <input  className='px-12 py-3 my-4 bg-indigo-500 text-gray-100' value="Submit" type="submit"/>
                </div>
                
            </form>
            <div>
                <img src={enrolledCourse.picture} alt="" width="350" height="290" />
            </div>
            </div>
        </div>
        
    );
    
};

export default Checkout;