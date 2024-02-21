import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Button/Button";
import ProductCard from "../../../ProductCard/ProductCard";
import './Especially_for_you.scss';
import Arrow from "../../Arrow/Arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchDataOfProducts } from "../../../../store/slices/productsSlice";

function EspeciallyForYou() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.data);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchDataOfProducts("smartphones"));
    }, [dispatch]);

    const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 3 : 2);

    const handleResize = () => {
        setItemsToShow(window.innerWidth >= 768 ? 3: 2);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    const showMoreCards = () => {
        setItemsToShow(prevItems => prevItems + (window.innerWidth >= 768 ? 3 : 2));
    };

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
                        {status === 'loading' && <div>Loading...</div>}
                        {status === 'failed' && <div>Error: {error} </div>}
                        {status === 'succeeded' && data.length > 0 ? (
                            data.slice(0, itemsToShow).map((item, index) => {

                               return <div className= "section-especially-item" key={index}>
                                   {item && (
                                   <ProductCard
                                       id={item.id}
                                       imageURL={item.imageURL}
                                       category={item.category}
                                       title={item.title}
                                       price={item.price}
                                       discountPrice={item.discountPrice}
                                   />
                                       )}
                               </div>
                            })

                        ) : (
                            <div>No data available</div>
                        )}

                        {itemsToShow < data.length && (
                        <Button
                            btnClass="section_especially-products-btn"
                            text={'See more'}
                            onClick={showMoreCards}
                        />
                         )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default EspeciallyForYou;