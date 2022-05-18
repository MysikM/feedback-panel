import React from 'react';
import './input-group-item.scss';

const InputGroupItem = ({label, description, children}) => {
    return (
        <div className='input-group'>
            <label className='input-group--title' htmlFor="">{label}</label>
            <p className="input-group--description">{description}</p>
            {children}
        </div>
    );
};

export default InputGroupItem;