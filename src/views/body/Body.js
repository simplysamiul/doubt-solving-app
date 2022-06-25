import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateOutlet from '../../privateRoute/PrivateOutlet';
import Preloader from '../custome/Preloader';

// Code splitting
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../components/Rregister/Login'));
const Register = React.lazy(() => import('../components/Rregister/Register'));
const RaiseDoubt = React.lazy(() => import('../pages/RaiseDoubt'));
const YourDoubt = React.lazy(() => import('../pages/YourDoubt'));

const Body = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* private route manage */}
                <Route path='/*' element={<PrivateOutlet />}>
                    <Route path="home" element={<Home />} />
                    <Route path="all_doubt" element={<Home />} />
                    <Route path="raise_doubt" element={<RaiseDoubt />} />
                    <Route path="your_doubt" element={<YourDoubt />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Body;