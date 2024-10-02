import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-5xl font-bold text-purple-500 mb-10">Our Services</h2>
      <ul className="max-w-xl mx-auto space-y-4 text-lg text-gray-600">
        <li>
          <Link 
            to="/admission" 
            className="block py-4 px-6 bg-purple-100 rounded-lg shadow-md transition duration-300 hover:bg-purple-500 hover:text-white"
          >
            FREE ADMISSION PROCESSING & VISA COUNSELING
          </Link>
        </li>
        <li>
          <Link 
            to="/application-procedures" 
            className="block py-4 px-6 bg-purple-100 rounded-lg shadow-md transition duration-300 hover:bg-purple-500 hover:text-white"
          >
            Application Procedures
          </Link>
        </li>
        <li>
          <Link 
            to="/ visa-requirements" 
            className="block py-4 px-6 bg-purple-100 rounded-lg shadow-md transition duration-300 hover:bg-purple-500 hover:text-white"
          >
            Visa Requirements
          </Link>
        </li>
        <li>
          <Link 
            to="/support" 
            className="block py-4 px-6 bg-purple-100 rounded-lg shadow-md transition duration-300 hover:bg-purple-500 hover:text-white"
          >
            Support throughout the entire process of studying in the USA
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ServicesSection;