import React from "react";
import { BsSearch } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10 bg-main my-6 mx-9 rounded-xl py-6 px-4">
          <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold text-center">
              Buy your <br />
              dream plants
            </h1>
            <div className="flex items-center justify-center mt-10 gap-11">
              <div className="flex flex-col">
                <span className="font-medium text-xl">50+</span>
                <span className="capitalize">plant species</span>
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
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
