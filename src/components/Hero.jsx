import React from "react";
import { BsSearch } from "react-icons/bs";
import topImg from "../assets/hero-images/top-design.png";
import bottomImg from "../assets/hero-images/bottom-design.png";
import Plants from "../assets/hero-images/hero-plants.png";
import Line from "../assets/hero-images/line.png";

function Hero() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10 bg-main my-6 mx-6 rounded-xl pt-6 px-4 relative md:mx-14 md:flex-row md:justify-between md:my-1 md:pt-0 lg:mx-24 lg:flex-row lg:justify-between lg:my-1 lg:pt-0">
          <div className="flex flex-col md:ml-3 md:w-1/2 lg:ml-10 lg:w-1/2">
            <h1 className="text-4xl font-extrabold text-center md:text-start lg:text-6xl lg:text-start">
              Buy your <br />
              dream plants
            </h1>
            <div className="flex items-center justify-center mt-10 gap-5 md:justify-start lg:justify-start">
              <div className="flex flex-col">
                <span className="font-medium text-xl">50+</span>
                <span className="capitalize">plant species</span>
              </div>
              <div>
                <img src={Line} className="h-14" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-xl">100+</span>
                <span className="capitalize">Customers</span>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 md:justify-start lg:justify-start">
              <div>
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="py-2 outline-none rounded-l-md w-52 pl-5 "
                />
              </div>
              <div className="bg-white h-10 w-10 flex justify-center items-center cursor-pointer rounded-r-md">
                <div className="bg-para h-8 w-8  rounded-lg flex justify-center items-center ">
                  <BsSearch className="text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* image section start */}
          <div className="pt-20 md:w-1/2 lg:w-1/2">
            <img
              src={topImg}
              className="absolute left-60 bottom-56 w-16 md:left-[550px] md:w-12 lg:left-[1000px] lg:w-20"
            />
            <div className="bg-para rounded-t-full rounded-l-full h-64 w-64 lg:h-[350px] lg:w-96">
              <img
                src={Plants}
                className="absolute bottom-0 lg:right-28 w-72 lg:w-96"
              />
            </div>
            <img
              src={bottomImg}
              className="absolute bottom-2 left-2 w-16 md:left-[300px] lg:left-[430px] lg:w-44 lg:bottom-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
