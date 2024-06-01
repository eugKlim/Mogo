import React, { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import loadingGif from '/image/global/loading.gif';

import Intro from '../blocks/Intro';
const About = lazy(() => import('../blocks/About'));
const Facts = lazy(() => import('../blocks/Facts'));
const Service = lazy(() => import('../blocks/Service'));
const Feature = lazy(() => import('../blocks/Feature'));
const What = lazy(() => import('../blocks/What'));
const Quote = lazy(() => import('../blocks/Quote'));
const Team = lazy(() => import('../blocks/Team'));
const Logos = lazy(() => import('../blocks/Logos'));
const Testimonial = lazy(() => import('../blocks/Testimonial'));
const Work = lazy(() => import('../blocks/Work'));
const Say = lazy(() => import('../blocks/Say'));
const Blog = lazy(() => import('../blocks/Blog'));
const Map = lazy(() => import('../blocks/Map'));
const Info = lazy(() => import('../blocks/Info'));

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MoGo - Home</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Home" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section>
        <Intro />
        <Suspense
          fallback={
            <div className="loading-gif">
              <img src={loadingGif} alt="Loading..." />
            </div>
          }
        >
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
        </Suspense>
      </section>
    </HelmetProvider>
  );
};

export default HomePage;
