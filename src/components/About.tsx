import React from 'react';
import { Users, Target, Award, Code2, Figma, Smartphone, Database, Globe } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useStaggeredAnimation(3, 200);
  const [teamRef, teamVisible] = useStaggeredAnimation(3, 150);
  const [techRef, techVisible] = useStaggeredAnimation(6, 100);

  const teamMembers = [
    {
      name: 'Yash',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'React, Node.js, TypeScript'
    },
    {
      name: 'Bipasha',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Figma, Adobe Creative Suite'
    },
    {
      name: 'Mohit',
      role: 'Full Stack Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Python, Django, PostgreSQL'
    }
  ];

  const technologies = [
    { name: 'React', icon: <Code2 className="h-8 w-8" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Figma', icon: <Figma className="h-8 w-8" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', icon: <Database className="h-8 w-8" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Next.js', icon: <Globe className="h-8 w-8" />, color: 'from-gray-700 to-gray-900' },
    { name: 'React Native', icon: <Smartphone className="h-8 w-8" />, color: 'from-blue-600 to-indigo-600' },
    { name: 'TypeScript', icon: <Code2 className="h-8 w-8" />, color: 'from-blue-500 to-blue-700' }
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
            About
            <span className="block bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
              Fusion webworks
            </span>
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            We're a passionate team of digital creators dedicated to transforming ideas into exceptional digital experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section 
        ref={storyRef}
        className={`py-20 bg-white section-animate ${storyVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${storyVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Fusion webworks began as a small team of passionate developers and designers 
                who believed that exceptional digital experiences could transform businesses. What started as 
                a shared vision has grown into a full-service web agency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We've had the privilege of working with startups, established businesses, and everything in between, 
                helping them achieve their digital goals through innovative design and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible in web design and development, 
                always keeping our clients' success at the heart of everything we do.
              </p>
            </div>
            <div className={`relative ${storyVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center card-animate ${missionVisible[0] ? 'animate' : ''}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with exceptional digital experiences that drive growth, 
                engagement, and success in the digital age.
              </p>
            </div>
            <div className={`text-center card-animate ${missionVisible[1] ? 'animate' : ''}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, quality, and client satisfaction guide every project we undertake. 
                We believe in transparent communication and collaborative partnerships.
              </p>
            </div>
            <div className={`text-center card-animate ${missionVisible[2] ? 'animate' : ''}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We take a user-centered approach to design and development, ensuring every solution 
                is tailored to your specific needs and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${teamVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind Fusion webworks who bring your digital visions to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden card-animate ${teamVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section ref={techRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-animate ${techVisible.some(Boolean) ? 'animate' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build modern, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 card-animate ${techVisible[index] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-4 rounded-full bg-gradient-to-r ${tech.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;