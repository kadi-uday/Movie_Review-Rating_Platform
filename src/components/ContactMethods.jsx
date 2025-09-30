import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: "Send us an email and we'll respond within 24 hours.",
    action: (
      <a
        // href="mailto:hello@cinemareviews.com"
        className="font-medium text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        hello@cinemareviews.com
      </a>
    ),
    iconBg: "bg-blue-500",
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Check out our code and contribute to the project.',
    action: (
      <a
        href="https://github.com/kadi-uday/Movie_Review-Rating_Platform"
        className="font-medium text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    ),
    iconBg: "bg-gray-800",
  },
  {
    icon: Twitter,
    title: 'Follow Us',
    description: 'Stay updated with the latest features and announcements.',
    action: (
      <span className="font-medium text-blue-500">@CinemaReviews</span>
    ),
    iconBg: "bg-blue-500",
  },
];

const ContactMethods = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="text-center bg-white dark:bg-[#23293a] rounded-2xl border border-gray-100 dark:border-[#23293a]/60 shadow transition-all duration-300 p-8 flex flex-col items-center"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${method.iconBg}`}>
              <method.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground dark:text-white">
              {method.title}
            </h3>
            <p className="text-base text-muted-foreground dark:text-gray-300 mb-5 leading-relaxed">
              {method.description}
            </p>
            <div>{method.action}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactMethods;
