import React from 'react';
import { Send } from 'lucide-react';
import OnSubmit from '../hooks/useOnSubmit';

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-2 text-foreground dark:text-white">
        Send Us a Message
      </h2>
      <p className="text-center text-base text-muted-foreground dark:text-gray-300 mb-8">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="
        bg-white dark:bg-[#23293a]
        rounded-2xl border border-gray-200 dark:border-[#23293a]/60
        shadow-md px-6 py-6 sm:px-10 sm:py-8
      ">
        <div className="flex items-center mb-6">
          <Send className="mr-2 text-blue-500 dark:text-cyan-400" />
          <span className="text-xl font-semibold text-foreground dark:text-white">Contact Form</span>
        </div>
        <form onSubmit={OnSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground dark:text-white mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="
                  w-full px-4 py-2 rounded
                  bg-gray-100 dark:bg-[#1c2b3a]
                  border border-gray-300 dark:border-gray-700
                  text-foreground dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400
                  transition
                "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground dark:text-white mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="
                  w-full px-4 py-2 rounded
                  bg-gray-100 dark:bg-[#1c2b3a]
                  border border-gray-300 dark:border-gray-700
                  text-foreground dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400
                  transition
                "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-foreground dark:text-white mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              className="
                w-full px-4 py-2 rounded
                bg-gray-100 dark:bg-[#1c2b3a]
                border border-gray-300 dark:border-gray-700
                text-foreground dark:text-white
                placeholder-gray-400 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400
                transition
              "
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground dark:text-white mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              required
              placeholder="Tell us what's on your mind..."
              className="
                w-full px-4 py-2 rounded
                bg-gray-100 dark:bg-[#1c2b3a]
                border border-gray-300 dark:border-gray-700
                text-foreground dark:text-white
                placeholder-gray-400 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400
                transition
              "
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="
                flex items-center justify-center
                bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600
                text-white px-7 py-2.5 rounded-lg font-semibold
                shadow transition transform hover:scale-105
              "
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
