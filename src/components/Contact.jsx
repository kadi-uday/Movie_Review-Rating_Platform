import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-500">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Have a review suggestion, a partnership inquiry, or just want to talk about movies? Send us a message!
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
