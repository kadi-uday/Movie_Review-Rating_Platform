import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactHeroSection = () => (
  <section className="relative overflow-hidden w-full">
    
    <div className="block dark:hidden absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-blue-300 to-blue-500"></div>
    <div className="hidden dark:block absolute inset-0 w-full h-full bg-background/20 backdrop-blur-sm"></div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
      <div className="flex items-center justify-center mb-8">
        <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm dark:bg-white/10">
          <MessageSquare className="h-16 w-16 text-white dark:text-white" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-white">
        Get in Touch
      </h1>
      <p className="text-xl max-w-2xl mx-auto leading-relaxed text-white/90 dark:text-white/90">
        We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, don't hesitate to reach out.
      </p>
    </div>
  </section>
);

export default ContactHeroSection;
