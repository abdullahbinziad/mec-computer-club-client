import React from 'react';
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/SignUp';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Blogs from '../pages/blogs/Blogs';
import Resources from '../pages/resources/Resources';
 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>,
            },
            {
                path:'/about',
                element: <About></About>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>,
            },
            {
                path:'/resources',
                element: <Resources></Resources>,
            },
        ]
    }
])