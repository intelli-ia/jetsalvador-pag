"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConhecaBarretaoSection() {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Imagem - Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-full">
              {/* Moldura decorativa sutil */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#00B8D9]/10 to-[#FFD966]/10 rounded-3xl blur-xl" />
              
              {/* Container da imagem */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/barretao-profile.jpg"
                  alt="Barretão - Instrutor credenciado pela Marinha"
                  fill
                  className="object-cover object-center"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
              
              {/* Badge credencial flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8D9] to-[#00A6BF] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-[#1C1C1C]">Credenciado</div>
                    <div className="text-[#4B4B4B]">Marinha do Brasil</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo - Lado Direito */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            
            {/* Título */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="text-[#00B8D9] font-semibold text-sm uppercase tracking-wider">
                  Seu Instrutor
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight"
              >
                Conheça o
                <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                  Barretão
                </span>
              </motion.h2>
            </div>

            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-[#4B4B4B] leading-relaxed">
                Com mais de 15 anos navegando pelas águas da Bahia, transformei minha paixão pelo mar em uma carreira dedicada à formação de novos navegadores e ao turismo náutico de excelência.
              </p>
              
              <p className="text-lg text-[#4B4B4B] leading-relaxed">
                Como despachante náutico e instrutor credenciado pela Marinha do Brasil, ofereço não apenas aulas técnicas, mas uma experiência completa que combina segurança, conhecimento e diversão nas águas cristalinas de Salvador.
              </p>
            </motion.div>

            {/* Credenciais e certificações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-xl text-[#1C1C1C]">
                Certificações & Experiência
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    title: "Instrutor Credenciado", 
                    subtitle: "Marinha do Brasil",
                    icon: "⚓"
                  },
                  { 
                    title: "Despachante Náutico", 
                    subtitle: "Regularização completa",
                    icon: "📋"
                  },
                  { 
                    title: "+500 Alunos", 
                    subtitle: "Formados com sucesso",
                    icon: "🎓"
                  },
                  { 
                    title: "15+ Anos", 
                    subtitle: "De experiência náutica",
                    icon: "🌊"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-sm">{item.title}</div>
                      <div className="text-[#4B4B4B] text-xs">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="https://wa.me/5571991011008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Converse comigo no WhatsApp
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}