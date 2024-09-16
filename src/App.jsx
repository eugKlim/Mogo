import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import ScrollToTop from './components/router/ScrollToTop';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// pages
const AboutPage = lazy(() => import('./pages/About-Page'));
const HomePage = lazy(() => import('./pages/Home-Page'));
const ServicePage = lazy(() => import('./pages/Service-Page'));
const WorkPage = lazy(() => import('./pages/Work-Page'));
const BlogPage = lazy(() => import('./pages/Blog-Page'));
const ContactPage = lazy(() => import('./pages/Contact-Page'));

function App() {
  return (
    <HelmetProvider>
      <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RobotoRegular">
        <div className="pt-14" />
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Header />
          <Suspense
            fallback={
              <div className="loading-gif">
                <img src="image/global/loading.gif" alt="Loading..." />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
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
    </HelmetProvider>
  );
}

export default App;
