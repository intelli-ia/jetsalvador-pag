"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    quote: "Nunca imaginei que seria tão fácil! Em poucas semanas já estava aprovada na prova da Marinha. O Barretão cuida de tudo, a gente só precisa aparecer.",
    author: "Fernanda R.",
    tag: "Habilitação Motonauta",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Tirei minha habilitação sem dor de cabeça nenhuma. Mandei os documentos pelo WhatsApp e eles resolveram toda a burocracia. Nota 10!",
    author: "Thiago M.",
    tag: "Habilitação Arrais",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Achei que navegar era coisa difícil, mas o método de ensino deles é incrível. Me senti seguro desde a primeira aula prática na Baía.",
    author: "Carlos E.",
    tag: "Habilitação Motonauta",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    quote: "Melhor investimento que fiz! Agora posso alugar um jet ski em qualquer lugar sem depender de ninguém. Liberdade total!",
    author: "Patrícia S.",
    tag: "Habilitação Arrais",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    quote: "Profissionalismo do início ao fim. A equipe da Jet Salvador sabe o que faz. Fui aprovada na primeira tentativa!",
    author: "Mariana L.",
    tag: "Habilitação Motonauta",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    quote: "Recomendo demais. Zero burocracia para o aluno, zero surpresas no preço. Valeu cada centavo do investimento.",
    author: "Rafael C.",
    tag: "Habilitação Arrais",
    photo: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00B8D9]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="font-title text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight text-center">
            Melhor do que a gente falar, é deixar
            <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent mt-2">
              nossos novos pilotos contarem:
            </span>
          </h2>
        </motion.div>

        {/* Scrolling columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden mb-16"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </motion.div>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-8">
            Sua jornada começa aqui. Seja o nosso próximo piloto!
          </p>
          <CTAButton
            href="https://wa.me/5571991011008"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero Tirar Minha Habilitação"
          />
        </motion.div>
      </div>
    </section>
  );
}
