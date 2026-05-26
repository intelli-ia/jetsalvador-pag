"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background com overlay minimalista */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.jpg"
          alt="Barretão no mar"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay sutil e elegante */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Conteúdo principal - alinhado à esquerda */}
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-4xl">
          
          {/* Badge discreto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-1.5 h-1.5 bg-[#00B8D9] rounded-full" />
            <span className="text-white/90 text-sm font-medium">
              Credenciado Marinha do Brasil
            </span>
          </motion.div>

          {/* Título principal - mais limpo e impactante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            <h1 className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-white">
              Tudo para sua
              <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                vida náutica
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
              Aulas, passeios e serviços náuticos premium em Salvador
            </p>
          </motion.div>

          {/* Botões de ação - mais espaçados e elegantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="#agendar"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-semibold text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Agende seu Passeio
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-white hover:text-[#1C1C1C] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}