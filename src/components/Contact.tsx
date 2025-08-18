import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: '',
  projectType: '',
  message: ''
});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = (message: string = '') => {
    const defaultMessage = message || `Hi! I'm ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        mobile: formData.mobile,
        projectType: formData.projectType,
        to_email: 'freelancing.pavan27@gmail.com', // ← Put YOUR email here
        to_name: 'Pavan', // ← Put YOUR name here
      };

      await emailjs.send(
        'service_uelkzpr',     // Replace with your EmailJS service ID
        'template_h8ds1fs',    // Replace with your EmailJS template ID
        templateParams,
        '09yeMsDaGB_h5dy1L'      // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      
      // Open WhatsApp with pre-filled message
      openWhatsApp();
      
      // Reset form after 3 seconds
      setTimeout(() => {
  setFormData({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    message: ''
  });
  setIsSubmitted(false);
}, 3000);

      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again or contact via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'freelancing.pavan27@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=freelancing.pavan27@gmail.com',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 7993637003',
      link: () => openWhatsApp("Hi! I'd like to discuss a project with you."),
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername',
      color: 'text-gray-700 bg-gray-100'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Work <span className="text-blue-600">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how I can help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">
                    Opening WhatsApp to continue our conversation...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
  {/* Full Name */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
      placeholder="Your full name"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
      placeholder="your.email@gmail.com"
    />
  </div>

  {/* Mobile Number */}
  <div>
    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
      Mobile Number
    </label>
    <input
      type="tel"
      id="mobile"
      name="mobile"
      value={formData.mobile}
      onChange={handleInputChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
      placeholder="+91 9876543210"
    />
  </div>

  {/* Project Type */}
  <div>
    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
      Type of Project / Work
    </label>
    <input
      type="text"
      id="projectType"
      name="projectType"
      value={formData.projectType}
      onChange={handleInputChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
      placeholder="Website, Mobile App, Dashboard, etc."
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
      Project Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      value={formData.message}
      onChange={handleInputChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200 resize-none"
      placeholder="Tell me about your project requirements..."
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
        Sending...
      </>
    ) : (
      <>
        <Send className="w-5 h-5 mr-2" />
        Send Message & Open WhatsApp
      </>
    )}
  </button>
</form>

              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                and potential collaborations. Whether you need a complete web application 
                or want to improve an existing system, let's talk about how I can help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                  onClick={() => {
  if (typeof info.link === 'function') {
    // For WhatsApp custom function
    info.link();
  } else if (typeof info.link === 'string') {
    if (info.link.startsWith('mailto:')) {
      // ✅ open email client directly
      window.location.href = info.link;
    } else {
      // ✅ open LinkedIn / GitHub in new tab
      window.open(info.link, '_blank');
    }
  }
}}

                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group-hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.label}</h4>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h4>
              <p className="text-gray-600 mb-4">
                I typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent projects, WhatsApp is the fastest way to reach me.
              </p>
              <button
                onClick={() => openWhatsApp("Hi! I have an urgent project requirement.")}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp for Urgent Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;