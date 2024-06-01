import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Info from '../blocks/Info';

const ContactPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MoGo - Contact</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Contact" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section className="dark:text-white text-slate-500">
        <Info />
      </section>
    </HelmetProvider>
  );
};

export default ContactPage;
