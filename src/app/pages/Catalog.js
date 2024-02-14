import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("http://localhost:5000/smartphones");
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, []);

    let productItems = [];

    products.forEach((product) => {
        product.colors.forEach((color) => {
            const productItem = {};
            productItem.fullName = product.brand + " " + product.model + " " + color.color;
            productItem.index = product._id + color.color;

            productItems.push(productItem);
        })
        
    })

    return (
        <div>
            <h1>Catalog Page</h1>
            <ul>
                {productItems.map((productItem, index) => (
                    
                    <li key={productItem.index}>{productItem.fullName}</li>
                ))}
            </ul>
        </div>
    );
}

export {Catalog};