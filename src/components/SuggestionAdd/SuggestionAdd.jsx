import React from 'react';
import './suggestion-add.scss';
import {Link} from "react-router-dom";

const SuggestionAdd = () => {
    return (
         <Link to='/feedback/form' className='suggestion--add-btn' >
             + Add Feedback
         </Link>
    );
};

export default SuggestionAdd;