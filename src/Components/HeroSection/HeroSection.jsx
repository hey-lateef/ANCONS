import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(150); // Decreased delay to 150ms

  const textToAnimate = 'ANCONS International';

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < textToAnimate.length) {
        setText(text + textToAnimate[index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [index, text, delay]);

  return (
    <section className="relative h-screen bg-gray-900 py-20 px-4 text-center md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <img 
          src="https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/USA.jpeg" 
          alt="USA Universities" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="hero-title text-5xl md:text-7xl lg:text-9xl font-bold mb-4 text-yellow-400">
          {text}
        </h1>
        <p className="hero-subtitle text-3xl md:text-4xl lg:text-5xl mb-6 text-white font-bold">
          Officially represents USA universities
        </p>
        <Link 
          to="/apply-now" 
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;