'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5571991011008', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="fixed bottom-8 right-8 z-50 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip elegante */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute right-20 top-1/2 -translate-y-1/2"
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-2xl shadow-2xl shadow-[#00B8D9]/10 px-6 py-4">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B8D9] to-[#00A6BF]" />
                    <span className="text-[#1C1C1C] font-medium text-sm">
                      Conversar no WhatsApp
                    </span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-white/90 border-r border-b border-gray-100/50 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão principal */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-20 h-20 bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#00B8D9]/10 hover:border-[#00B8D9]/20 transition-all duration-700 overflow-hidden group"
          >
            {/* Background gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B8D9] to-[#00A6BF] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
            
            {/* Efeito de brilho sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* WhatsApp Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={isHovered ? { rotate: [0, -5, 5, 0] } : { rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <svg 
                  className="w-8 h-8 text-[#25D366] group-hover:text-[#00B8D9] transition-colors duration-500" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </motion.div>
            </div>

            {/* Indicador online elegante */}
            <div className="absolute -top-1 -right-1">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-[#00B8D9]/10 group-hover:to-[#00A6BF]/10 transition-all duration-500 border border-gray-100/50"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B8D9] to-[#00A6BF]" />
              </motion.div>
            </div>

            {/* Arrow icon no canto */}
            <div className="absolute bottom-3 right-3">
              <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-[#00B8D9] group-hover:to-[#00A6BF] transition-all duration-500">
                <svg 
                  className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-500 group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.button>

          {/* Glow effect sutil */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#00B8D9]/20 to-[#00A6BF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}