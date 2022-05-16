import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import RoadMap from "../pages/RoadMap";
import FeedbackDetail from "../pages/FeedbackDetail";
import FeedbackForm from "../pages/FeedbackForm";

const Navigations = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/roadmap' element={<RoadMap />} />
                <Route path='/feedback/:id' element={<FeedbackDetail />} />
                <Route path='/feedback/form' element={<FeedbackForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigations;