import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Smartphone, Users, Star, ChevronRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useStaggeredAnimation(3, 200);
  const [portfolioRef, portfolioVisible] = useStaggeredAnimation(3, 150);
  const [testimonialsRef, testimonialsVisible] = useStaggeredAnimation(3, 100);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Web Design',
      description: 'Beautiful, responsive designs that captivate your audience'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Robust, scalable solutions built with modern technologies'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Intuitive user experiences that drive engagement'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      category: 'React & Node.js',
      image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Corporate Website',
      category: 'Next.js & Tailwind',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile App UI',
      category: 'React Native',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Fusion webworks transformed our vision into a stunning reality. Exceptional work!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateCorp',
      content: 'Professional, creative, and delivered beyond expectations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      content: 'The team understood our needs perfectly and delivered a fantastic product.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-white to-blue-900 section-animate ${heroVisible ? 'animate' : ''}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${heroVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                Fusion Webworks
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We craft exceptional digital experiences that captivate audiences and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                View Our Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className={`py-20 bg-white section-animate ${aboutVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${aboutVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Fusion webworks
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate team of designers and developers who believe in the power of exceptional digital experiences. 
                With years of expertise in web design, development, and UI/UX, we transform ideas into stunning realities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to help businesses thrive in the digital landscape by creating websites and applications 
                that not only look amazing but also perform exceptionally.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue to push the boundaries of what's possible in web design and development, 
                always keeping our clients' success at the heart of everything we do.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className={`relative ${aboutVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${servicesVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to elevate your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-animate ${servicesVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className={`text-center mt-12 ${servicesVisible.some(Boolean) ? 'animate-pop-in' : 'opacity-0'}`}>
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${portfolioVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of our recent projects that showcase our expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-animate ${portfolioVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-blue-300 mb-1">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-12 ${portfolioVisible.some(Boolean) ? 'animate-pop-in' : 'opacity-0'}`}>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${testimonialsVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow card-animate ${testimonialsVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing that drives your business forward
          </p>
          <Link
            to="/contact"
            className={`inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${ctaVisible ? 'animate-bounce-in' : 'opacity-0'}`}
          >
            <Users className="mr-3 h-6 w-6" />
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
