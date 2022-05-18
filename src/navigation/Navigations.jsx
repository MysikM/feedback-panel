import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoadMap from "../pages/RoadMap/RoadMap";
import FeedbackDetail from "../pages/FeedbackDetail/FeedbackDetail";
import FeedbackForm from "../pages/FeedbackForm/FeedbackForm";
import Home from "../pages/Home/Home";

const Navigations = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/roadmap' element={<RoadMap />} />
                <Route path='/feedback/:id' element={<FeedbackDetail />} />
                <Route path='/feedback/form/' element={<FeedbackForm />} />
                <Route path='/feedback/form/:id' element={<FeedbackForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigations;