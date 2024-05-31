import './fonts.css';
import './style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/router/ScrollToTop';

import Header from './blocks/Header';
import Footer from './blocks/Footer';

// pages
import AboutPage from './pages/About-Page';
import HomePage from './pages/Home-Page';
import ServicePage from './pages/Service-Page';
import WorkPage from './pages/Work-Page';
import BlogPage from './pages/Blog-Page';
import ContactPage from './pages/Contact-Page';

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RobotoRegular">
      <div className="pt-14" />

      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
