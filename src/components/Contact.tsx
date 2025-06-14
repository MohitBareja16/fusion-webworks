import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, heroVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useStaggeredAnimation(4, 100);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'hello@fusionwebworks.com',
      link: 'mailto:hello@fusionwebworks.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#'
    }
  ];

  const services = [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'E-commerce',
    'SEO Optimization',
    'Other'
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 section-animate ${heroVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 ${heroVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            Get In
            <span className="block bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`py-20 bg-white section-animate ${contactVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 ${contactVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-pop-in">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-700">Thank you! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${contactVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's start a conversation</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you bring your digital vision to life. Whether you have a specific project in mind 
                  or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Fusion webworks?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Expert team with 3+ years of experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Modern technologies and best practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    100% client satisfaction rate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${faqVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most websites take 4-12 weeks from start to finish."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer ongoing maintenance and support packages to keep your website running smoothly."
              },
              {
                question: "What's included in your web design service?",
                answer: "Our web design includes wireframing, visual design, responsive layouts, and up to 3 design revisions."
              },
              {
                question: "Can you help with SEO?",
                answer: "Absolutely! We provide comprehensive SEO services including keyword research, on-page optimization, and technical SEO."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow card-animate ${faqVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;