import React from 'react';
import "./Arrow.scss"
function Arrow({ direction, onClick }) {
    return (
        <div className={`banner_main-svg-${direction}`} onClick={onClick}>
            {direction === 'next' ? (
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.87524 1.75L1.12524 8.5L7.87524 15.25" stroke="#333333" stroke-opacity="0.2" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ) : (
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.12476 15.25L7.87476 8.5L1.12476 1.75" stroke="#333333" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )}
        </div>
    );
}

export default Arrow;

