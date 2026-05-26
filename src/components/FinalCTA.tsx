"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTASection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#0A1628]">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-block text-[#00B8D9] font-semibold text-sm uppercase tracking-widest mb-4">
              Sua jornada começa agora
            </span>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tire sua habilitação náutica com quem mais entende do assunto.
            </h2>
            <p className="text-white/60 text-xl font-light leading-relaxed">
              Mais de 500 alunos formados, 95% de aprovação nos exames oficiais e 15 anos de experiência na Baía de Todos os Santos. Sua habilitação está em boas mãos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <CTAButton
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              label="Quero Tirar Minha Habilitação"
            />
            <Link
              href="tel:+5571991011008"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium px-6 py-4 border border-white/15 hover:border-[#00B8D9]/40 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (71) 99101-1008
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Respondemos em até 5 minutos
          </motion.p>

        </div>
      </div>
    </section>
  );
}
