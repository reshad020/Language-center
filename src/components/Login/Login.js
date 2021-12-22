import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {user,signInGoogle}=useFirebase();
    return (
        <div className='flex justify-center items-center h-96 bg-gray-200 p-5'>
            <button className="w-44 h-8 bg-blue-600 text-white rounded-md focus:ring-2 focus:bg-indigo-700 hover:bg-pink-70000" onClick={signInGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;