import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/7993637003?text=${encodedMessage}`, '_blank');
    setShowChat(false);
  };

  const quickMessages = [
    "Hi! I need help with a web development project.",
    "I'm interested in your full-stack development services.",
    "Can we schedule a call to discuss my project requirements?",
    "I'd like to get a quote for a React/Spring Boot application."
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setShowChat(!showChat)}
          className="group relative bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
          
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
        </button>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with Me!</h3>
                  <p className="text-sm text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 mb-3">
                  <p className="text-sm text-gray-800">
                    👋 Hi there! Need help with your development project? 
                    Choose a quick message below or type your own:
                  </p>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2 mb-4">
                {quickMessages.map((message, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => openWhatsApp(message)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-800 transition-all duration-200 border border-transparent hover:border-green-200"
                  >
                    {message}
                  </motion.button>
                ))}
              </div>

              {/* Direct WhatsApp Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => openWhatsApp("Hi! I'd like to discuss a project with you.")}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 text-center">
              <p className="text-xs text-gray-500">
                Powered by WhatsApp • Response time: ~2 minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;