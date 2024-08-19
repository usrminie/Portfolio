import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Failed to send message.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <section id="contact" className="py-1 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Contact
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-gradient-to-r from-blue-600 to-purple-600"></span>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <input type="hidden" name="service_id" value="YOUR_SERVICE_ID" />
          <input type="hidden" name="template_id" value="YOUR_TEMPLATE_ID" />
          <input type="hidden" name="user_id" value="YOUR_USER_ID" />

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-blue-950 to-purple-950 text-white font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-purple-800 transition-all">
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/shalini-singh1117/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/usrminie" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-500 transition-colors">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-2 md:flex md:items-center space-x-4 mt-8">
        <div className="container mx-auto text-center rounded-full bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-50 py-4 ">
          <p>&copy; 2024 Shalini Singh. All rights reserved.</p>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
