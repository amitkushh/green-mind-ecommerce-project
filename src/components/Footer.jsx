import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  const links = [
    {
      heading: "information",
      firstLink: "about",
      secondLink: "product",
      thirdLink: "blog",
    },
    {
      heading: "company",
      firstLink: "community",
      secondLink: "career",
      thirdLink: "our story",
    },
    {
      heading: "contact",
      firstLink: "getting started",
      secondLink: "pricing",
      thirdLink: "resources",
    },
  ];

  return (
    <footer className="bg-main ">
      <div className="flex flex-col mt-16 mx-6 py-12 md:flex-row md:justify-between lg:flex-row lg:justify-between lg:mx-24">
        <div className="flex flex-col mb-6 md:mr-10 lg:mr-10">
          <div className="mb-2">
            <span className="text-xl text-para font-lg">GREENMIND</span>
          </div>
          <p>We help you find your dream plant</p>
          <div className="flex my-4 gap-4">
            <span className="border border-para rounded-full p-3">
              <FaFacebookF />
            </span>
            <span className="border border-para rounded-full p-3">
              <RiInstagramFill />
            </span>
            <span className="border border-para rounded-full p-3">
              <FaTwitter />
            </span>
          </div>
        </div>

        {/* categories section */}
        <div className="flex flex-col gap-9 md:flex-row lg:flex-row">
          {links.map((link, index) => (
            <div className="flex flex-col" key={index}>
              <div className="mb-2">
                <span className="font-semibold text-lg">{link.heading}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize">{link.firstLink}</p>
                <p className="capitalize">{link.secondLink}</p>
                <p className="capitalize">{link.thirdLink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer bar section */}
      <div className="mx-6 pb-11 lg:mx-24">
        <span>2023 all Right Reserved Term of use GREENMIND</span>
      </div>
    </footer>
  );
}

export default Footer;
