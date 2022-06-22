import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from '../custome/Preloader';

// Code splitting
const Home = React.lazy(() => import('../pages/Home'));

const Body = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Suspense>
    );
};

export default Body;