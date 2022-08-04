
import './App.css';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Recommend from './Component/Recommend';
import ScrollToTop from './Component/ScrollToTop';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';



function App() {

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
