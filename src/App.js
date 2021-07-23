import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './scss/main.scss'
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <Testimonial/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
