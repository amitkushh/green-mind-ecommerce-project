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
        <div className="flex flex-col justify-center items-center gap-10 bg-main my-6 mx-6 rounded-xl pt-6 px-4 relative">
          <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold text-center">
              Buy your <br />
              dream plants
            </h1>
            <div className="flex items-center justify-center mt-10 gap-5">
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
            <div className="flex justify-center items-center mt-10">
              <div>
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="py-2 outline-none rounded-l-md w-52 pl-5 "
                />
              </div>
              <div className="bg-white h-10 w-10 flex justify-center items-center cursor-pointer rounded-r-md">
                <div className="bg-para h-8 w-8  rounded-lg flex justify-center items-center">
                  <BsSearch className="text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* image section start */}
          <div className="pt-20">
            <img
              src={topImg}
              height={60}
              width={60}
              className="absolute left-60 bottom-56"
            />
            <div className="bg-para rounded-t-full rounded-l-full h-64 w-64 ">
              <img
                src={Plants}
                height={300}
                width={300}
                className="absolute bottom-0"
              />
            </div>
            <img
              src={bottomImg}
              height={65}
              width={65}
              className="absolute bottom-2 left-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
