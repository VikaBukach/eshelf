import React from 'react';
import './Button.scss';

function Button({ btnClass, onClick, text }) {
    return (
        <button
            className={btnClass}
            onClick={onClick}
        >
            <div className="btn-text">
                {text}
                <svg className="btn-svg" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 10.2914L12 17.0414L18.75 10.2914" stroke="#8119B1" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </button>
    )
}


export default Button;