import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [bestDeals, setBestDeals] = useState([]);

  useEffect(() => {
    // Log the type of allProducts
    console.log("Type of allProducts:", typeof allProducts);
  
    // Make sure allProducts is an array
    if (!Array.isArray(allProducts)) {
      // Handle the case where allProducts is not an array
      console.error("allProducts is not an array");
      // Set bestDeals to an empty array or another suitable default value
      setBestDeals([]);
      return;
    }
  
    // Assuming allProducts is an array, proceed with sorting and slicing
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setBestDeals(firstFive);
  }, [allProducts]);
  
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {bestDeals.map((deal, index) => (
            <ProductCard data={deal} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
