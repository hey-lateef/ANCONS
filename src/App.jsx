import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutSection from './Components/AboutSection/AboutSection';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import PortfolioSection from './Components/PortfolioSection/PortfolioSection';
import ContactSection from './Components/ContactSection/ContactSection';
import ApplyNowSection from './Components/ApplyNowSection/ApplyNowSection';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-1">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<HeroSection />} />

            {/* Other Routes */}
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/apply-now" element={<ApplyNowSection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
