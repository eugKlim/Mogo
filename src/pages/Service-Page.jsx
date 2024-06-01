import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Service from '../blocks/Service';

const ServicePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MoGo - Service</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Service" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section className="dark:text-white text-slate-500">
        <Service />
      </section>
    </HelmetProvider>
  );
};

export default ServicePage;
