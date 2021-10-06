import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import About from './components/About/About';
import MyCourses from './components/MyCourses/MyCourses';
import NotFound from './components/NotFount/NotFound';
import React from 'react';
import useCart from './customHooks/useCart';
import useCourses from './customHooks/useCourses';

export const CartContext = React.createContext([]);


function App() {
  const [cart, setCart] = useCart();
  const [courses] = useCourses();

  // handle ernrol now
  const handleEnrol = (id) => {
    const addedCourse = courses.find(course => course.id === id);
    if (addedCourse) {
      setCart([...cart, addedCourse]);
    }
  }
  return (
    <div>
      <CartContext.Provider value={cart}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home handleEnrol={handleEnrol} ></Home>
            </Route>
            <Route path="/courses">
              <Courses handleEnrol={handleEnrol}></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/mycourses">
              <MyCourses></MyCourses>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </CartContext.Provider>
    </div>
  );
}

export default App;
