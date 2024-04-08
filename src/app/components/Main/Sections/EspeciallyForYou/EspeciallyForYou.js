import React, { useState, useEffect } from "react";
import {loadOnePageOfProducts, selectProducts} from "../../../../store/slices/productsSlice";
import ProductListHomePage from "../../ProductListHomePage/ProductListHomePage";
import {useDispatch, useSelector} from "react-redux";


function EspeciallyForYou() {
    const  dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [especiallyForYouData, setEspeciallyForYouData] = useState([]);

    useEffect(() => {
        dispatch(loadOnePageOfProducts({ collection: "laptops", limit: 15, page: 1 }));
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            setEspeciallyForYouData(products);
        }
    }, [products]);

    return (
        <ProductListHomePage
            title="Especially for you"
            category="laptops"
            initialItemsToShow={5}
            data={especiallyForYouData}
        />
    );
}

export default EspeciallyForYou;

