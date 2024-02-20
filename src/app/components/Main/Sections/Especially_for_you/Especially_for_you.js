import React, {useState} from 'react';
import Button from "../../Button/Button";
import './Especially_for_you.scss';
import Arrow from "../../Arrow/Arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EspeciallyForYou(props) {
    const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 3 : 2);
    const totalItems = 10;


    const showCards = () => {
        const additionalItems = window.innerWidth >= 768 ? 3 : 2;
        if (itemsToShow + additionalItems <= totalItems) {
            setItemsToShow(itemsToShow + additionalItems);
        }
    }

    return (
        <>
            <div className="section_especially">
                <div className="section_especially-wrap">
                    <h6 className="section_especially-title">
                        Especially for you
                    </h6>
                </div>
                <div className="section_especially-products-mobile">

                    <div className="section_especially-products">

                        {[...Array(itemsToShow)].map((_, index) => (
                            <div key={index} className="section-especially-item"></div>
                        ))}
                    </div>
                    {itemsToShow < totalItems && (
                        <Button
                            btnClass="section_especially-products-btn"
                            text={'See more'}
                            onClick={showCards}
                        />
                    )}
                </div>
                {/*<div className="section_especially-products-desctop">*/}
                {/*    <Arrow direction="next"/>*/}
                {/*    <Arrow direction="prev"/>*/}
                {/*        <Slider {...settings} ref={sliderRef}>*/}

                {/*    <div className="section_especially-products-desctop slider-container">*/}

                {/*        {[...Array(itemsToShow)].map((_, index) => (*/}
                {/*            <div key={index} className="section-especially-item"></div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*        </Slider>*/}

                {/*    </div>*/}
                </div>
            </>
    );
}

export default EspeciallyForYou;