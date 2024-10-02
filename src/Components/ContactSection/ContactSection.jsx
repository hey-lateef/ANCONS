import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <h2 className="text-center text-5xl font-bold text-purple-500 mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 h-32"
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;