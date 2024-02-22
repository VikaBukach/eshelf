import React from 'react';
import "./Arrow.scss" ;

function Arrow({ direction, onClick }) {
    return (
        <div className={`arrow-svg-container-${direction}`} onClick={onClick}>
            {direction === 'next' ? (
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.87524 1.75L1.12524 8.5L7.87524 15.25" stroke="#333333" strokeOpacity="0.2" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) : (
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.12476 15.25L7.87476 8.5L1.12476 1.75" stroke="#333333" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
        </div>
    );
}

export default Arrow;



