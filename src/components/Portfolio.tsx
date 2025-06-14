import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [heroRef, heroVisible] = useScrollAnimation();
  const [filterRef, filterVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useStaggeredAnimation(6, 100);
  const [statsRef, statsVisible] = useStaggeredAnimation(4, 150);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const projects = [
    {
      title: 'TechCorp Website',
      category: 'Web Design',
      tech: 'React, Tailwind CSS',
      description: 'Modern corporate website with sleek design and smooth animations.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      tech: 'Next.js, Stripe, MongoDB',
      description: 'Full-featured online store with payment processing and inventory management.',
      image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      tech: 'Figma, Principle',
      description: 'Intuitive mobile banking interface with focus on user experience.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Restaurant Chain Website',
      category: 'Web Development',
      tech: 'Vue.js, Node.js, PostgreSQL',
      description: 'Multi-location restaurant website with online ordering system.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Fitness App Interface',
      category: 'UI/UX Design',
      tech: 'Adobe XD, Sketch',
      description: 'Comprehensive fitness tracking app with social features.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Design',
      tech: 'React, D3.js, Material-UI',
      description: 'Analytics dashboard with interactive charts and real-time data.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Web Development', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Portfolio
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Explore our collection of successful projects that showcase our expertise and creativity
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section 
        ref={filterRef}
        className={`py-12 bg-white border-b section-animate ${filterVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-900 to-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 card-animate ${projectsVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 text-gray-700" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.tech}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className={`text-center card-animate ${statsVisible[0] ? 'animate' : ''}`}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className={`text-center card-animate ${statsVisible[1] ? 'animate' : ''}`}>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">40+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className={`text-center card-animate ${statsVisible[2] ? 'animate' : ''}`}>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className={`text-center card-animate ${statsVisible[3] ? 'animate' : ''}`}>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together that stands out in your industry
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${ctaVisible ? 'animate-bounce-in' : 'opacity-0'}`}
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;