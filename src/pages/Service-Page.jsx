import React from 'react';
import { Helmet } from 'react-helmet-async';
import Service from '../components/service/Service';

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>MoGo - Service</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Service" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section className="dark:text-white text-slate-500">
        <Service />
      </section>
    </>
  );
};

export default ServicePage;
