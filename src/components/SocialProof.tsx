"use client";

import { motion } from "framer-motion";

export default function SocialProofSection() {
  const testimonials = [
    {
      text: "Barretão é um instrutor excepcional! Me senti segura desde a primeira aula e consegui minha habilitação rapidamente!",
      author: "Marina Silva",
      role: "Aulas de Motonauta",
      rating: 5
    },
    {
      text: "Experiência incrível! O passeio foi perfeito, águas cristalinas e toda segurança necessária. Já voltei 3 vezes!",
      author: "Carlos Eduardo",
      role: "Passeio de Jet Ski",
      rating: 5
    },
    {
      text: "Processos burocráticos resolvidos com total profissionalismo. Barretão cuidou de tudo, sem dor de cabeça.",
      author: "Ana Beatriz",
      role: "Despachante Náutico",
      rating: 5
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[#00B8D9] font-semibold text-sm uppercase tracking-wider">
              Depoimentos
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-title text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight"
          >
            O que dizem nossos
            <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
              alunos
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#00B8D9]/20 transition-all duration-300">
                
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00B8D9] to-[#00A6BF] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFD966]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-[#4B4B4B] leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8D9]/10 to-[#00A6BF]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00B8D9] font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C]">
                      {testimonial.author}
                    </div>
                    <div className="text-[#4B4B4B] text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8D9]/5 to-[#00A6BF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row - Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Alunos Formados" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "100%", label: "Aprovação" },
              { number: "5⭐", label: "Avaliação Média" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1) 
                }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="font-title text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-[#4B4B4B] text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA subtil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#4B4B4B] mb-6">
            Junte-se aos navegadores que confiam no nosso trabalho
          </p>
          <a
            href="https://wa.me/5571991011008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Começar minha jornada náutica
          </a>
        </motion.div>
      </div>
    </section>
  );
}