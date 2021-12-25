import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import MyCourse from '../../MyCourse/MyCourse';
import MyCourses from '../../MyCourses/MyCourses';
import MainBody from '../MainBody/MainBody';

const DashboardHeader = () => {
    const {user,logOut} = useFirebase();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    return (
        <div className="sticky md:w-full top-0">
        <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-800 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <NavLink
                        className="text-xl font-bold leading-relaxed inline-block text-pink-200 mr-4 py-2 whitespace-nowrap uppercase text-white"
                        to="/dashboard"
                    >
                        <span className="">Dashboard</span>
                    </NavLink>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                to={`${url}/review`}
                            >
                                <span className="ml-4">Review</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                to={`${url}/mycourses`}
                            >
                                <span className="ml-4">My Courses</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                to={`${url}/addnewcourse`}
                            >
                                <span className="ml-4">Add a new course</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                to={`${url}/manageorders`}
                            >
                                <span className="ml-4">Manage Orders</span>
                            </NavLink>
                        </li>
                        {
                            user.email?
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-4" onClick={logOut}><img src={user.photoURL} className='mr-4 rounded-full inline' width="34" height="34"></img>Logout</span>
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-pink-200 text-lg uppercase font-bolder leading-snug text-white hover:opacity-75"
                                    to="/login"
                                >
                                    <span className="ml-4">Login</span>
                                </NavLink>
                            </li>


                        }
                        
                    </ul>
                </div>
            </div>
        </nav>

        <Switch>
            <Route exact path={path}>
            <div className='text-center'>
            <h1 className='text-center text-3xl font-bolder'>Hi! <span className='text-pink-600'>{user.displayName}</span>. Welcome To Dashboard</h1>
            <h2 className='text-center my-6 text-lg'>Things you can do using Dashboard.</h2>
            <ul className=' text-sm font-bold my-6'>
                <li className='my-2'>-- Add a review about our courses.</li>
                <li className='my-2'>-- See Your enrolled courses in  My Courses </li>
                <li className='my-2'>-- Admin can manage orders</li>
                <li className='my-2'>-- Admin can Add a new course</li>
            </ul>
            </div>
            </Route>
            <Route path={`${path}/mycourses`}>
            <MyCourses></MyCourses>
            </Route>
       </Switch>
    </div>
    );
};

export default DashboardHeader;