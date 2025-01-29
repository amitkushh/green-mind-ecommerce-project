import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center my-6 sm:bg-main md:bg-main lg:bg-main">
      <div className="bg-main flex flex-col justify-center items-center py-9 px-10">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-5 my-5 "
        >
          <input
            type="text"
            name="name"
            placeholder="Enter you name"
            className="outline-none py-3 rounded-md pl-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            className="outline-none py-3 rounded-md pl-3"
          />
          <textarea
            name="message"
            placeholder="Enter you message"
            className="outline-none py-3 pl-3 rounded-md w-full h-52"
          ></textarea>
        </form>
        <div className="mt-6 flex justify-center items-center">
          <button className="bg-white font-medium py-3 px-8 rounded-md cursor-pointer flex items-center gap-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
