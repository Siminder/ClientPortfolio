"use client"
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./globals.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollY / windowHeight) * 100;
    setScrollProgress(progress);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


return (
  <>
    <Navbar />
    <Intro />
    <Work />
    <Projects />
    <Contact />
    <Footer />
    <motion.div
      className="scroll-bar"
      style={{ width: `${scrollProgress}%` }}
    />
  </>
);
}