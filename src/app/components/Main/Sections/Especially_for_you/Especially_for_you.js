import React from 'react';
import Button from "../../Button/Button";

function EspeciallyForYou( btnClass, onClick, text ) {
    return (
        <div className="section_especially">
            <h6 className="ssection_especially-title">
                Especially for you
            </h6>
            <div className="section_especially-products">
                <div></div>
                <div></div>
            </div>
           <Button
               btnClass="section_especially-products-btn"
               text={'See more'}
               // onClick={}
           />
        </div>
    );
}

export default EspeciallyForYou;