import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
      </header>
      
      <section className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg mb-6">
          We would love to hear from you! Whether you have a question, feedback, or want to share a story, you can contact us 
          using the form below or reach out through other available channels.
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your full name"
              className="mt-2 block w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email address"
              className="mt-2 block w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              placeholder="Write your message"
             
              className="mt-2 block w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        
        {/* Contact Details Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h3>
          <p className="text-lg mb-2">Email: <a href="mailto:contact@newsportal.com" className="text-blue-600">contact@newsportal.com</a></p>
          <p className="text-lg mb-2">Phone: +123 456 7890</p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white py-4 mt-10">
        <p className="text-center text-sm">© 2025 News Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
