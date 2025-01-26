import React from "react";
import imageOne from "../assets/category-images/plant-one.jpg";
import imageTwo from "../assets/category-images/plant-two.jpg";
import imageThree from "../assets/category-images/plant-three.jpg";

function Categories() {
  const categories = [
    {
      image: imageOne,
      title: "Natural Plants",
    },
    {
      image: imageTwo,
      title: "Plant Accessories",
      para: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: imageThree,
      title: "Artificial Plants",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16 mx-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-center">Categories</h2>
          <p className="text-center mt-3 max-w-64">
            Find what you are looking for
          </p>
        </div>
      </div>
      {/* image sections */}
      <div className="bg-main flex flex-col justify-center items-center px-6 mb-16 py-14">
        <div className="flex flex-col gap-10">
          {categories.map((category, index) => (
            <div className="flex flex-col" key={index}>
              <img src={category.image} className="rounded-xl" />
              <p className="font-semibold text-[18px] my-3">{category.title}</p>
              <p>{category.para}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center items-center">
          <button className="bg-white font-medium py-3 px-8 rounded-md cursor-pointer">
            See more
          </button>
        </div>
      </div>
    </>
  );
}

export default Categories;
