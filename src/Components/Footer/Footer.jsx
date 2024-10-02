import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white text-center py-4 mt-0.2 shadow-lg">
      <p className="text-lg font-bold text-gray-200">&copy; {new Date().getFullYear()} ANCONS International. All rights reserved.</p>
    </footer>
  );
};

export default Footer;