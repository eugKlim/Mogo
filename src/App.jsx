import './fonts.css';
import './output.css';

// block:
import Header from './blocks/Header';
import Footer from './blocks/Footer';
import Intro from './blocks/Intro';


function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RobotoRegular">
      <Header />
      <div> 
        <Intro />
      </div>
      <Footer />
    </div>
  );
}

export default App;
