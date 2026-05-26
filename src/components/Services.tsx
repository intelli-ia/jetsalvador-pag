"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: "habilitacao",
      title: "Habilitação Náutica",
      subtitle: "Motonauta • Arrais • Mestre",
      description: "Formação completa com instrutor credenciado pela Marinha do Brasil. Metodologia exclusiva que combina teoria e prática de forma eficiente.",
      feature: "Certificação oficial",
      icon: "⚓",
      gradient: "from-[#00B8D9] to-[#00A6BF]"
    },
    {
      id: "jetski",
      title: "Experiências Jet Ski",
      subtitle: "Baía de Todos os Santos",
      description: "Rotas exclusivas pelas águas cristalinas da baía. Equipamentos premium e acompanhamento personalizado para máxima segurança.",
      feature: "Roteiros privativos",
      icon: "🏄‍♂️",
      gradient: "from-[#00A6BF] to-[#008DA8]"
    },
    {
      id: "lancha",
      title: "Navegação Premium",
      subtitle: "Passeios de Lancha",
      description: "Descubra Salvador a bordo de embarcações selecionadas. Roteiros sob medida pelos pontos mais reservados da costa baiana.",
      feature: "Experiência customizada",
      icon: "🛥️",
      gradient: "from-[#008DA8] to-[#007491]"
    },
    {
      id: "despachante",
      title: "Consultoria Náutica",
      subtitle: "Despachante Especializado",
      description: "Gestão completa da documentação náutica. Processos burocráticos resolvidos com discrição e eficiência profissional.",
      feature: "Acompanhamento integral",
      icon: "📋",
      gradient: "from-[#007491] to-[#005B7A]"
    }
  ];

  return (
    <section id="services" className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-[#00B8D9]/5 to-[#FFD966]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00A6BF]/5 to-[#00B8D9]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-8"
          >
            Experiências náuticas
            <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
              sob medida
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-[#4B4B4B] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Cada serviço é pensado para oferecer excelência e exclusividade na sua jornada náutica em Salvador.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: index * 0.15 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href="https://wa.me/5571991011008"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full p-8 md:p-10 bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#00B8D9]/10 transition-all duration-700 group-hover:border-[#00B8D9]/20 overflow-hidden">
                  
                  {/* Background gradient hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  {/* Ícone decorativo */}
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-[#00B8D9]/10 group-hover:to-[#00A6BF]/10 transition-all duration-500">
                      <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Número */}
                  <div className="absolute bottom-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <span className="text-8xl font-thin text-[#00B8D9]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <span className={`inline-block bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider`}>
                          {service.subtitle}
                        </span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                        className="font-title text-2xl md:text-3xl font-bold text-[#1C1C1C] group-hover:text-[#00B8D9] transition-colors duration-500 leading-tight"
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      className="text-[#4B4B4B] text-base leading-relaxed font-light mb-8 flex-grow"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-[#1C1C1C] font-medium text-sm">
                          {service.feature}
                        </span>
                      </div>
                      
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-[#00B8D9] group-hover:to-[#00A6BF] transition-all duration-500">
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 group-hover:translate-x-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-8 leading-tight"
            >
              Pronto para viver experiências
              <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                inesquecíveis no mar?
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-[#4B4B4B] leading-relaxed font-light mb-12 max-w-2xl mx-auto"
            >
              Entre em contato conosco e descubra como transformar seus momentos náuticos em memórias extraordinárias.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="https://wa.me/5571991011008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-semibold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00B8D9]/25 hover:scale-105 transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Conversar no WhatsApp
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="tel:+5571991011008"
                className="inline-flex items-center gap-3 text-[#4B4B4B] font-medium px-8 py-4 hover:text-[#00B8D9] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#00B8D9]/10 transition-colors duration-300">
                  <svg className="w-4 h-4 group-hover:text-[#00B8D9] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                (71) 99101-1008
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}