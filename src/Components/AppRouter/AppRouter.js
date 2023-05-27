import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Monuments from '../Monuments/Monuments';
import HomeComponent from '../Home/Home';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/monuments" element={<Monuments />} />
    </Routes>
);

export default AppRouter;