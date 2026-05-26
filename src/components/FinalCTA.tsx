"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Final CTA Section Component
export function FinalCTASection() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00B8D9]/10 via-transparent to-[#00A6BF]/5" />
        
        {/* Animated water ripple effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00B8D9]/20 to-[#00A6BF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#00A6BF]/15 to-[#008DA8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00B8D9 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B8D9]/20 to-[#00A6BF]/20 backdrop-blur-sm border border-[#00B8D9]/30 text-[#00B8D9] font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full">
                <span className="w-2 h-2 bg-[#00B8D9] rounded-full animate-pulse" />
                Sua Aventura Começa Agora
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
            >
              Navegue pelos seus
              <span className="block bg-gradient-to-r from-[#00B8D9] via-[#00D4EA] to-[#00A6BF] bg-clip-text text-transparent">
                sonhos náuticos
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto"
            >
              Com mais de 15 anos de experiência e centenas de navegadores formados, estou pronto para guiá-lo pela jornada mais emocionante da sua vida nas águas cristalinas da Bahia.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "500+", label: "Alunos Formados", icon: "🎓" },
              { number: "15+", label: "Anos de Experiência", icon: "⚓" },
              { number: "100%", label: "Taxa de Aprovação", icon: "✅" },
              { number: "24/7", label: "Suporte Completo", icon: "💬" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-bold px-12 py-6 rounded-full shadow-2xl shadow-[#00B8D9]/25 hover:shadow-[#00B8D9]/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-1000" />
              
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="text-lg relative z-10">Comece Sua Jornada Agora</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="tel:+5571991011008"
              className="group inline-flex items-center gap-3 text-white font-semibold px-8 py-4 border-2 border-gray-600 hover:border-[#00B8D9] rounded-full transition-all duration-300 hover:bg-[#00B8D9]/10"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 group-hover:bg-[#00B8D9]/20 flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5 group-hover:text-[#00B8D9] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Ligue agora</div>
                <div className="font-bold">(71) 99101-1008</div>
              </div>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Resposta em até 5 minutos
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00B8D9]">🏆</span>
              Instrutor Certificado
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00B8D9]">⚓</span>
              Marinha do Brasil
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}