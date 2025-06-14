import React from 'react';
import { Palette, Code, Smartphone, ShoppingCart, Search, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useStaggeredAnimation(6, 150);
  const [processRef, processVisible] = useStaggeredAnimation(6, 100);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Web Design',
      description: 'Create stunning, user-friendly designs that capture your brand essence and engage your audience.',
      features: ['Responsive Design', 'Brand Identity', 'Wireframing & Prototyping', 'Visual Mockups'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Build robust, scalable websites and web applications using modern technologies and best practices.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'Design intuitive user interfaces and exceptional user experiences that drive engagement.',
      features: ['User Research', 'Information Architecture', 'Interaction Design', 'Usability Testing'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'E-commerce Solutions',
      description: 'Build powerful online stores that convert visitors into customers and drive sales growth.',
      features: ['Shopping Cart Development', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine visibility and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Optimization'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Performance Optimization',
      description: 'Enhance your website\'s speed, performance, and user experience across all devices.',
      features: ['Speed Optimization', 'Code Optimization', 'Image Compression', 'Caching Strategies'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our design team creates beautiful, functional designs that align with your brand identity.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We bring designs to life using cutting-edge technologies and development best practices.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution works flawlessly across all devices and browsers.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure continued success.'
    }
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
            Our
            <span className="block bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Comprehensive digital solutions designed to elevate your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-animate ${servicesVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${processVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow card-animate ${processVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-20 bg-gradient-to-r from-blue-900 to-blue-900 section-animate ${ctaVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and bring your vision to life
          </p>
          <Link
            to="/contact"
            className={`inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${ctaVisible ? 'animate-bounce-in' : 'opacity-0'}`}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;