import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './fonts.css';
import './style.scss';
import ScrollToTop from './components/router/ScrollToTop';
import './components/lazyBg/LazyBg.scss';

import Header from './blocks/Header';
import Footer from './blocks/Footer';

import loadingGif from '/image/global/loading.gif';

// pages
const AboutPage = lazy(() => import('./pages/About-Page'));
const HomePage = lazy(() => import('./pages/Home-Page'));
const ServicePage = lazy(() => import('./pages/Service-Page'));
const WorkPage = lazy(() => import('./pages/Work-Page'));
const BlogPage = lazy(() => import('./pages/Blog-Page'));
const ContactPage = lazy(() => import('./pages/Contact-Page'));

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RobotoRegular">
      <div className="pt-14" />
      <Router>
        <ScrollToTop />
        <Header />
        <Suspense
          fallback={
            <div className="loading-gif">
              <img src={loadingGif} alt="Loading..." />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
