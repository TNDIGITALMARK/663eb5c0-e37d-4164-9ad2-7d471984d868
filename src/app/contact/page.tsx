'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[hsl(var(--cream-bg))] pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Questions about my work? Interested in collaboration? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="books">About My Books</option>
                    <option value="fashion">Fashion Collection</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Connect With Me</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">For General Inquiries</h3>
                  <p className="text-gray-700 mb-2 flex items-center gap-3">
                    <Mail size={20} />
                    hello@auroraandsage.com
                  </p>
                  <p className="text-sm text-gray-600">
                    I respond to all inquiries within 48 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4">Press & Media</h3>
                  <p className="text-gray-700 mb-2">
                    press@auroraandsage.com
                  </p>
                  <p className="text-sm text-gray-600">
                    For interview requests, press kits, and media inquiries.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4">Collaborations</h3>
                  <p className="text-gray-700 mb-2">
                    collaborate@auroraandsage.com
                  </p>
                  <p className="text-sm text-gray-600">
                    Interested in working together? Let's create something beautiful.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4">Social Media</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    @auroraandsage on all platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to receive updates on new book releases, fashion drops, and exclusive behind-the-scenes content.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
              <button type="submit" className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
