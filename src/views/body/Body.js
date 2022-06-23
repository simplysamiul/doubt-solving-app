import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from '../custome/Preloader';

// Code splitting
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../components/Rregister/Login'));
const Register = React.lazy(() => import('../components/Rregister/Register'));

const Body = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Suspense>
    );
};

export default Body;