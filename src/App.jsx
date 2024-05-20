import './fonts.css';
import './style.css';

// block:
import Header from './blocks/Header';
import Footer from './blocks/Footer';
import Intro from './blocks/Intro';
import About from './blocks/About';
import Facts from './blocks/Facts';
import Service from './blocks/Service';
import Feature from './blocks/Feature';
import What from './blocks/What';
import Quote from './blocks/Quote';
import Team from './blocks/Team';
import Logos from './blocks/Logos';
import Testimonial from './blocks/Testimonial';
import Work from './blocks/Work';
import Say from './blocks/Say';
import Blog from './blocks/Blog';
import Map from './blocks/Map';
import Info from './blocks/Info';

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RobotoRegular">
      <Header />
      <div>
        <Intro />
        <About />
        <Facts />
        <Service />
        <Feature />
        <What />
        <Quote />
        <Team />
        <Logos />
        <Work />
        <Testimonial />
        <Say />
        <Blog />
        <Map />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
