import React from 'react';
import { Helmet } from 'react-helmet-async';
import Info from '../components/info/Info';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>MoGo - Contact</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Contact" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section className="dark:text-white text-slate-500">
        <Info />
      </section>
    </>
  );
};

export default ContactPage;
