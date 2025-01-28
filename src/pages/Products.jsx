import React from "react";
import plantOne from "../assets/best-selling-images/plant-one.png";
import plantTwo from "../assets/best-selling-images/plant-two.png";
import plantThree from "../assets/best-selling-images/plant-three.png";
import plantForth from "../assets/category-images/plant-one.jpg";
import plantFifth from "../assets/category-images/plant-two.jpg";
import plantSixth from "../assets/category-images/plant-three.jpg";

function Products() {
  const products = [
    {
      images: plantOne,
      title: "Natural Plants",
      price: "₱ 1,400.00",
    },
    {
      images: plantTwo,
      title: "Artificial Plants",
      price: "₱ 900.00",
    },
    {
      images: plantThree,
      title: "Artificial Plants",
      price: "₱ 3,500.00",
    },
    {
      images: plantForth,
      title: "New Plants",
      price: "₱ 3,600.00",
    },
    {
      images: plantFifth,
      title: "Best Plants",
      price: "₱ 4,600.00",
    },
    {
      images: plantSixth,
      title: "Good Plants",
      price: "₱ 5,600.00",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-16 mx-6 md:mx-24 md:my-24 lg:mx-24 lg:my-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center">Products</h1>
        <p className="text-center">All Product Here</p>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((plant, index) => (
          <div key={index} className="flex flex-col gap-6">
            <img src={plant.images} alt="plants" />
            <div className="flex flex-col gap-2">
              <span className="font-semibold">{plant.title}</span>
              <span>{plant.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
