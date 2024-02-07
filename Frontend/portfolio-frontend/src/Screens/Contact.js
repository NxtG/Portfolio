import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between pr-6 ">
      <div className="flex flex-col mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
        <p className="text-gray-700 mb-4">
          This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            {/* Icons can be added here */}
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* Add additional icons as needed */}
        </div>
      </div>

      <form className="space-y-4 w-full mr-[5rem]  md:w-1/2">
        <input
          className="w-full p-4 border border-gray-300 bg-[#F3F3F3]"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-full p-4 border border-gray-300 bg-[#F3F3F3]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="w-full p-4 border border-gray-300 bg-[#F3F3F3]"
          name="message"
          rows="4"
          placeholder="Type your message here"
        ></textarea>
        <button
          type="submit"
          className="
          text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
             bg-[#2D2D2D]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
