import React from 'react';
import ContactForm from "./ContactForm";
import ContactHeroSection from './ContactHeroSection';
import ContactMethods from './ContactMethods';

const Contact = () => {
  return (
    <div className="bg-background">
      <ContactHeroSection />
      <ContactMethods />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
