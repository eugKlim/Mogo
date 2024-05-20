import './fonts.css';
import './output.css';

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
      </div>
      <Footer />
    </div>
  );
}

export default App;
