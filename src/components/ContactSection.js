import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_zlbpoxo', 'template_ulsujff', e.target, 'npyqxURUWqstfKGE_')
      .then((result) => {
        setSending(false);
        setSent(true);
        setError(null); // Clear any previous errors
        setFormData({ name: '', email: '', message: '' }); // Reset form data
      }, (error) => {
        setSending(false);
        setError(error.text);
      });
  };

  return (
    <section id="contact" className="relative py-2 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-800 opacity-50"></div>
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center relative">
          Contact
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-800 to-purple-800 text-white font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-purple-800 transition-all"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {sent && !sending && <p className="mt-4 text-green-500">Message sent successfully!</p>}
          {error && !sending && <p className="mt-4 text-red-500">Failed to send message: {error}</p>}
        </form>
        <div className="mt-8 flex justify-center space-x-6 relative">
          <a href="https://www.linkedin.com/in/shalini-singh1117/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/usrminie" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-500 transition-colors">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-2 md:flex md:items-center space-x-4 mt-12">
        <div className="relative container mx-auto text-center rounded-full bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-50 py-4">
          <p>&copy; 2024 Shalini Singh. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
