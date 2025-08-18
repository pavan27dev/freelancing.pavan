import React from 'react';
import { Server, Database, Cloud, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'Complete web applications using Java, Spring Boot, React.js, and modern frameworks for scalable business solutions.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'TypeScript']
    },
    {
      icon: Server,
      title: 'REST API Development & Integration',
      description: 'Secure, scalable APIs with proper authentication, documentation, and integration with third-party services.',
      technologies: ['Spring Boot', 'JWT', 'Swagger', 'Microservices']
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture with proper indexing, queries optimization, and data modeling.',
      technologies: ['MySQL', 'PostgreSQL', 'JPA', 'Hibernate']
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Complete cloud infrastructure setup with automated deployments, monitoring, and scaling capabilities.',
      technologies: ['AWS EC2', 'S3', 'RDS', 'Docker']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Faster load times, better user experience, and optimized application performance for maximum efficiency.',
      technologies: ['Caching', 'CDN', 'Load Balancing', 'Monitoring']
    },
     {
      icon: Zap,
      title: 'Poster Design',
      description: 'All types of poster designs tailored to meet your business needs.',
      technologies: ['Logos ', 'SEO', 'Load Attractive posters']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development solutions to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;