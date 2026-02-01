
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Application from './pages/Application';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Initial page reveal
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen text-white overflow-x-hidden bg-[#030712]">
        {/* Fullscreen Video Background Container */}
        <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          {/* Base Color Fallback */}
          <div className="absolute inset-0 bg-[#030712] -z-10"></div>
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          >
            <source src="https://files.catbox.moe/z8t2bi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Cinematic Overlays */}
          {/* Subtle blur for depth */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          
          {/* Vertical Gradient to ensure readability of text throughout sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Navigation - High Z-Index */}
        <Navbar />

        {/* Main Content - Relative with Positive Z-Index to sit ABOVE the video */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Application />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;