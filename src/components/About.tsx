import React from 'react';
import { Award, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Java', level: 95, color: 'bg-orange-500' },
    { name: 'Spring Boot', level: 92, color: 'bg-green-500' },
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'MySQL', level: 88, color: 'bg-blue-600' },
    { name: 'AWS', level: 85, color: 'bg-orange-400' },
    { name: 'Docker', level: 80, color: 'bg-blue-400' }
  ];

  const certifications = [
    'Tap Academy - Full Stack Java Development',
    'AWS Certified Solutions Architect Associate',
    'Oracle Certified Professional, Java SE',
    'Spring Professional Certification',
    'Udemy - Complete React Developer Course',
    'Docker & Kubernetes Professional'
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with expertise in creating scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <img
                src="./src/assests/Green Blue Modern P Logo (1).png"
                alt="Professional photo"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 3 years of experience in full-stack development, I specialize in creating 
                robust web applications using Java, Spring Boot, and React.js. My journey began at 
                Tap Academy where I mastered the fundamentals and evolved into building enterprise-level 
                solutions for startups and businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about writing clean, maintainable code and staying updated with the 
                latest technologies. My goal is to help businesses transform their ideas into 
                successful digital products that drive growth and efficiency.
              </p>
              
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right Column - Skills and Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Technical Skills
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Certifications & Training
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;