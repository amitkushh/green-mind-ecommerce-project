import React from "react";
import imageOne from "../assets/about-images/image-one.png";
import imageTwo from "../assets/about-images/image-two.png";
import imageThree from "../assets/about-images/image-three.png";

function About() {
  const allSection = [
    {
      image: imageOne,
      title: "Large Assortment",
      para: "we offer many different types of products with fewer variations in each category.",
    },
    {
      image: imageTwo,
      title: "Fast & Free Shipping",
      para: "4-day or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      image: imageThree,
      title: "24/7 Support",
      para: "answers to any business related inquiry 24/7 and in real-time.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-16 mx-6 md:mx-14 lg:mx-24 lg:my-24">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-bold text-center">About us</h2>
        <p className="text-center mt-3 max-w-64 lg:max-w-none">
          Order now and appreciate the beauty of nature
        </p>
      </div>

      {/* three sections */}
      <div className="flex flex-col justify-center items-center gap-7 md:flex-row lg:flex-row">
        {allSection.map((about, index) => (
          <div
            className="flex flex-col justify-center items-center p-4 text-center gap-4"
            key={index}
          >
            <div className="bg-main rounded-full p-5">
              <img src={about.image} />
            </div>
            <p className="font-semibold">{about.title}</p>
            <p>{about.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
