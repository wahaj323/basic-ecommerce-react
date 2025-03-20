import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, interest });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent w-1/3"></div>
        <div className="h-full w-full pattern-grid-lg pattern-gray-700 pattern-opacity-100 pattern-size-8" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-emerald-400">Tech Revolution</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Get exclusive access to new products, special offers, and gaming insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Interest Dropdown */}
            <div>
              <label htmlFor="interest" className="block text-gray-300 text-sm font-medium mb-2">
                Main Interest
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white appearance-none transition-all"
                required
              >
                <option value="">Select your interest</option>
                <option value="gaming">Gaming Gear</option>
                <option value="peripherals">PC Peripherals</option>
                <option value="accessories">Tech Accessories</option>
                <option value="news">Latest Tech News</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-5 h-5 text-emerald-500 bg-gray-800 border-gray-700 rounded focus:ring-emerald-500"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
            >
              Get Early Access
            </button>
          </div>
        </form>
      </div>

      {/* Decorative Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default NewsletterForm;