import React from "react";
import plantOne from "../assets/best-selling-images/plant-one.png";
import plantTwo from "../assets/best-selling-images/plant-two.png";
import plantThree from "../assets/best-selling-images/plant-three.png";

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
    <div className="flex flex-col justify-center items-center my-16 mx-6">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-bold text-center">Best Selling Plants</h2>
        <p className="text-center mt-3 max-w-64">
          Easiest way to healthy life by buying your favorite plants{" "}
        </p>
        <div className="mt-6 flex justify-center items-center">
          <button className="bg-thinpara py-3 px-8 rounded-md cursor-pointer">
            See more
          </button>
        </div>
      </div>

      {/* plants section */}
      <div className="flex flex-col gap-12">
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
