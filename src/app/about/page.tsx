import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-semibold text-center">About Our News Portal</h1>
      </header>
      
      <section className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our News Portal</h2>
        <p className="text-lg mb-4">
          Our news portal provides up-to-date news articles, trending stories, and insightful commentary from various sources. 
          We strive to bring you the latest developments from around the world, ensuring that you stay informed and connected.
        </p>

        <p className="text-lg mb-4">
          We value accuracy, integrity, and transparency in our reporting, and we are committed to providing content that is both 
          informative and engaging.
        </p>

        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-lg mb-4">
          Our mission is to deliver breaking news, top stories, and expert analysis from various industries including politics, 
          technology, entertainment, and more. Our team of journalists work around the clock to ensure you have access to accurate 
          and reliable news.
        </p>

        <h3 className="text-xl font-semibold mb-2">What Makes Us Unique?</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Real-time updates for all major news categories.</li>
          <li>A dedicated editorial team committed to the truth.</li>
          <li>In-depth analysis and coverage on trending topics.</li>
          <li>Interactive features for reader engagement.</li>
        </ul>

        <div className="text-center mt-6">
          <p className="font-semibold text-lg">Stay updated, stay informed!</p>
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white py-4 mt-10">
        <p className="text-center text-sm">© 2025 News Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
