"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso de habilitação náutica para os passeios?",
      answer:
        "Para passeios acompanhados, não é necessário habilitação. Nossos instrutores certificados conduzem toda a experiência com total segurança. Para locação individual de jet ski, a habilitação de motonauta é indispensável. Oferecemos o curso completo por R$ 600 com certificação oficial da Marinha do Brasil.",
      icon: "⚓",
      gradient: "from-[#00B8D9] to-[#00A6BF]",
    },
    {
      question: "O que preciso levar para o passeio?",
      answer:
        "Recomendamos trazer protetor solar, óculos de sol com cordinha, roupa de banho, toalha e uma muda de roupa seca. Fornecemos todos os equipamentos de segurança: coletes salva-vidas premium, capacetes quando necessário e kit de primeiros socorros a bordo.",
      icon: "🎒",
      gradient: "from-[#00A6BF] to-[#008DA8]",
    },
    {
      question: "Qual a idade mínima para participar?",
      answer:
        "Para pilotar jet ski, a idade mínima é 18 anos com habilitação válida. Como passageiro em passeios acompanhados, aceitamos a partir de 12 anos com autorização dos responsáveis. Crianças menores podem participar de passeios de lancha com acompanhamento especial.",
      icon: "👥",
      gradient: "from-[#008DA8] to-[#007491]",
    },
    {
      question: "Como funciona a aula de habilitação?",
      answer:
        "Nosso curso combina teoria e prática com metodologia exclusiva. São 40 horas de conteúdo distribuídas de forma flexível, incluindo navegação prática na Baía de Todos os Santos. Instrutor credenciado pela Marinha, material didático premium e acompanhamento até a aprovação final.",
      icon: "🎓",
      gradient: "from-[#007491] to-[#005B7A]",
    },
    {
      question: "Onde acontecem os passeios?",
      answer:
        "Partimos da privilegiada região da Ribeira, explorando as águas cristalinas da Baía de Todos os Santos. Roteiros incluem Ilha de Maré, Porto da Barra, praias secretas e pontos históricos exclusivos. Cada rota é personalizada conforme suas preferências.",
      icon: "🏝️",
      gradient: "from-[#005B7A] to-[#00B8D9]",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos Pix (com desconto especial), cartão de crédito presencial e transferência bancária. Para locações, solicitamos caução de R$ 1.000 via Pix, totalmente estornado na devolução. Parcelamento disponível para cursos de habilitação.",
      icon: "💳",
      gradient: "from-[#00B8D9] to-[#00A6BF]",
    },
    {
      question: "Posso levar acompanhante no jet ski?",
      answer:
        "Sim! Nossos jets skis comportam confortavelmente duas pessoas. Para máxima segurança, fornecemos coletes individuais e briefing completo antes da saída. Casais e amigos podem compartilhar a experiência com total tranquilidade.",
      icon: "❤️",
      gradient: "from-[#00A6BF] to-[#008DA8]",
    },
    {
      question: "Qual o tempo médio dos passeios?",
      answer:
        "Passeios de jet ski: 1 a 3 horas, incluindo briefing e paradas para fotos. Experiências de lancha: 2 a 6 horas com roteiros personalizados. Aulas práticas: até 8 horas de imersão total. Flexibilidade total para adequar ao seu cronograma.",
      icon: "⏰",
      gradient: "from-[#008DA8] to-[#007491]",
    },
    {
      question: "Quais documentos preciso apresentar?",
      answer:
        "Para passeios: RG ou CNH e CPF. Para locação de jet ski: habilitação de motonauta válida, RG e CPF. Menores precisam de autorização por escrito dos responsáveis. Estrangeiros devem apresentar passaporte válido.",
      icon: "📋",
      gradient: "from-[#007491] to-[#005B7A]",
    },
  ];

  return (
    <section id="faq" className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-[#00B8D9]/5 to-[#FFD966]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00A6BF]/5 to-[#00B8D9]/5 rounded-full blur-3xl" />

        {/* Pattern de ondas */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern
                id="waves-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20c10-10 30-10 40 0v20H0V20z"
                  fill="#00B8D9"
                  fillOpacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves-pattern)" />
          </svg>
        </div>
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
              Perguntas Frequentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-8"
          >
            Tudo que você precisa
            <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
              saber sobre nós
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-[#4B4B4B] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Embarque em uma experiência náutica de alto nível. Preparamos este
            guia exclusivo para desvendar todos os detalhes e garantir que sua
            aventura seja impecável.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-[#00B8D9]/10 transition-all duration-500">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 md:px-10 md:py-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-xl text-white">{faq.icon}</span>
                    </div>
                    <h3 className="font-title text-lg md:text-xl font-semibold text-[#1C1C1C] group-hover:text-[#00B8D9] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-gradient-to-br from-[#00B8D9] to-[#00A6BF]"
                          : "group-hover:from-[#00B8D9]/10 group-hover:to-[#00A6BF]/10"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-all duration-300 ${
                          openIndex === index
                            ? "text-white rotate-180"
                            : "text-gray-500 group-hover:text-[#00B8D9]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 md:px-10 md:pb-8">
                    <div className="pl-16">
                      <div
                        className={`w-full h-px bg-gradient-to-r ${faq.gradient} mb-6 opacity-20`}
                      />
                      <p className="text-[#4B4B4B] leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 px-8 py-12 md:px-16 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9]/10 to-[#00A6BF]/10 rounded-full px-6 py-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-[#00B8D9] font-semibold text-sm">
                  Ainda tem dúvidas?
                </span>
              </div>

              <h3 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4 leading-tight">
                Fale conosco agora mesmo
              </h3>

              <p className="text-lg md:text-xl text-[#4B4B4B] leading-relaxed font-light">
                Nossa equipe especializada está pronta para esclarecer qualquer
                questão e ajudar você a planejar a experiência náutica perfeita.
              </p>
            </motion.div>

            {/* Botões de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* WhatsApp - Botão Principal */}
              <Link
                href="https://wa.me/5571991011008"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#00B8D9]/20 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>

                <span className="relative">Falar no WhatsApp</span>

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Telefone - Botão Secundário */}
              <Link
                href="tel:+5571991011008"
                className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-[#1C1C1C] font-semibold px-6 py-3 rounded-2xl hover:border-[#00B8D9] hover:text-[#00B8D9] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-gray-100 group-hover:bg-[#00B8D9]/10 flex items-center justify-center transition-colors duration-300">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                (71) 99101-1008
              </Link>
            </motion.div>

            {/* Informação Adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-100"
            >
              <div className="flex items-center justify-center gap-6 text-sm text-[#6B6B6B]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Online agora</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Resposta em até 5 minutos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
