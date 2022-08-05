import React,{useEffect} from 'react';
import './App.css';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Recommend from './Component/Recommend';
import ScrollToTop from './Component/ScrollToTop';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import scrollreveal from "scrollreveal";



function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
