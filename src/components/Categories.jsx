import React from "react";
import imageOne from "../assets/category-images/plant-one.jpg";
import imageTwo from "../assets/category-images/plant-two.jpg";
import imageThree from "../assets/category-images/plant-three.jpg";

function Categories() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 mx-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-center">Categories</h2>
          <p className="text-center mt-3 max-w-64">
            Find what you are looking for
          </p>
        </div>
      </div>
      {/* image sections */}
      <div className="bg-main flex flex-col justify-center items-center px-6 mb-16 py-14 lg:px-24">
        <div className="flex flex-col gap-10 md:flex-row lg:flex-row">
          {/* image one */}
          <div className="flex flex-col md:items-center lg:items-center">
            <img src={imageOne} className="rounded-xl" />
            <p className="font-semibold text-[18px] my-3">Natural Plants</p>
          </div>

          {/* image two */}
          <div className="flex flex-col md:items-center lg:items-center">
            <img src={imageTwo} className="rounded-xl" />
            <p className="font-semibold text-[18px] my-3 ">Plant Accessories</p>
            <p className="md:text-center lg:text-center lg:max-w-64">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Button */}
            <div className="mt-6 flex justify-center items-center">
              <button className="bg-white font-medium py-3 px-8 rounded-md cursor-pointer">
                See more
              </button>
            </div>
          </div>

          {/* image three */}
          <div className="flex flex-col  md:items-center lg:items-center">
            <img src={imageThree} className="rounded-xl" />
            <p className="font-semibold text-[18px] my-3">Artificial Plants</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
