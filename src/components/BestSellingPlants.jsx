import React from "react";
import plantOne from "../assets/best-selling-images/plant-one.png";
import plantTwo from "../assets/best-selling-images/plant-two.png";
import plantThree from "../assets/best-selling-images/plant-three.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function BestSellingPlants() {
  const plants = [
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
  ];

  return (
    <div className="flex flex-col justify-center items-center my-16 mx-6 md:mx-14 md:flex-row lg:flex-row lg:mx-24 lg:my-24 lg:items-start">
      <div className="flex flex-col mb-12 md:mr-5 lg:mr-5">
        <h2 className="text-3xl font-bold text-center md:text-2xl md:text-start lg:text-start ">
          Best Selling Plants
        </h2>
        <p className="text-center mt-3 max-w-64 lg:mt-5 md:text-start lg:text-start lg:max-w-40">
          Easiest way to healthy life by buying your favorite plants{" "}
        </p>
        <div className="mt-6 flex justify-center items-center md:justify-start lg:mt-12 lg:justify-start">
          <Link to="/products">
            <button className="bg-[#adadad] font-medium py-3 px-8 rounded-md cursor-pointer flex items-center gap-2 md:py-2 md:px-3">
              See more <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/* plants section */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {plants.map((plant, index) => (
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

export default BestSellingPlants;
