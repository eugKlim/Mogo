import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

import loadingGif from '/image/global/loading.gif';

import Intro from '../components/intro/Intro';
const About = lazy(() => import('../components/about/About'));
const Facts = lazy(() => import('../components/facts/Facts'));
const Service = lazy(() => import('../components/service/Service'));
const Feature = lazy(() => import('../components/feature/Feature'));
const What = lazy(() => import('../components/what/What'));
const Quote = lazy(() => import('../components/quote/Quote'));
const Team = lazy(() => import('../components/team/Team'));
const Logos = lazy(() => import('../components/logos/Logos'));
const Testimonial = lazy(() => import('../components/testimonial/Testimonial'));
const Work = lazy(() => import('../components/work/Work'));
const Say = lazy(() => import('../components/say/Say'));
const Blog = lazy(() => import('../components/blog/Blog'));
const Map = lazy(() => import('../components/map/Map'));
const Info = lazy(() => import('../components/info/Info'));

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
