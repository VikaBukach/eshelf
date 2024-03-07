// import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Button from "../../Button/Button";
// import ProductCard from "../../../ProductCard/ProductCard";
// // import Especially_for_you from "../Especially_for_you/Especially_for_you.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { fetchDataOfProducts } from "../../../../store/slices/productsSlice";
// import Slider from "react-slick";
// import Arrow from "../../Arrow/Arrow";
//
// function TopProduct(props) {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.products.data);
//   const status = useSelector((state) => state.products.status);
//   const error = useSelector((state) => state.products.error);
//
//
//   useEffect(() => {
//     dispatch(fetchDataOfProducts("monitors"));
//   }, [dispatch]);
//
//   const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 5 : 2);
//
//   const handleResize = () => {
//     setItemsToShow(window.innerWidth >= 768 ? 3 : 2);
//   };
//
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//
//   const showMoreCards = () => {
//     setItemsToShow((prevItems) => prevItems + (window.innerWidth >= 768 ? 3 : 2));
//   };
//
//   const sliderRef = useRef(null);
//
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//   };
//
//   return (
//       <>
//         <div className="section_especially">
//           <div className="section_especially-wrap">
//             <h6 className="section_especially-title">Especially for you</h6>
//           </div>
//           <div className="section_especially-products-mobile">
//             <div className="section_especially-products">
//               {status === "loading" && <div>Loading...</div>}
//               {status === "failed" && <div>Error: {error} </div>}
//               {status === "succeeded" && data.length > 0 ? (
//                   data.slice(0, itemsToShow).map((item, index) => {
//                     return (
//                         <div className="section-especially-item" key={index}>
//                           {item && (
//                               <ProductCard
//                                   id={item._id}
//                                   imageURL={item.colors[0].images[0]}
//                                   category={"monitors"}
//                                   title={item.brand + " " + item.model + " " + item.colors[0].products[0].capacity}
//                                   price={item.colors[0].products[0].price}
//                                   discountPrice={item.discountPrice}
//                               />
//                           )}
//                         </div>
//                     );
//                   })
//               ) : (
//                   <div>No data available</div>
//               )}
//
//               {itemsToShow < data.length && (
//                   <Button btnClass="section_especially-products-btn" text={"See more"} onClick={showMoreCards} />
//               )}
//             </div>
//           </div>
//
//           <div className="section_especially-products-desktop">
//             <div className="section_especially-products-desktop-arrows">
//               <div className="especially_arrow-svg-container-next">
//                 <Arrow direction="next" onClick={() => sliderRef.current.slickNext()} />
//               </div>
//               <div className="especially_arrow-svg-container-prev">
//                 <Arrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
//               </div>
//             </div>
//             <div className="section_especially-products-desktop-container slider-container">
//               <Slider {...settings} ref={sliderRef}>
//                 {status === "loading" && <div>Loading...</div>}
//                 {status === "failed" && <div>Error: {error} </div>}
//                 {status === "succeeded" && data.length > 0 ? (
//                     data.slice(0, itemsToShow).map((item, index) => {
//                       console.log('--------------', data)
//                       return (
//                           <div className="section-especially-item-desktop " key={index}>
//                             {item && (
//                                 <ProductCard
//                                     id={item._id}
//                                     imageURL={item.colors[0].images[0]}
//                                     category={"monitors"}
//                                     title={item.brand + " " + item.model + " " + item.colors[0].products[0].capacity + " " + item.colors[0].color + " " + item.colors[0].products[0].article}
//                                     price={item.colors[0].products[0].price}
//                                     discountPrice={item.colors[0].products[0]["discount_price"]}
//                                 />
//                             )}
//                           </div>
//                       );
//                     })
//                 ) : (
//                     <div>No data available</div>
//                 )}
//               </Slider>
//             </div>
//
//           </div>
//         </div>
//       </>
//   );
// }
//
// export default TopProduct;
