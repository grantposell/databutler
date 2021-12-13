import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Pricing from './pricing';




const Main = () => (
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/pricing" element={<Pricing/>} />
        </Routes>
)

export default Main;