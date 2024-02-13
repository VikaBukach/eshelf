// import React, { useState, useEffect } from "react";
// import axios from "axios";

const Catalog = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get("/api/products");
//                 setProducts(response.data);
//                 console.log(response.data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         }
//         fetchProducts();
//     }, []);

    return (
        <div>
            {/* <h1>Catalog Page</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul> */}
        </div>
    );
}

export {Catalog};