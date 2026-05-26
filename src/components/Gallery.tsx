"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function DesireSection() {
  return (
    <section className="relative w-full py-16 md:py-36 bg-[#1C1C1C]">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[#00B8D9] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Sua liberdade
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 md:mb-6"
          >
            Como você quer passar o seu próximo final de semana?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-10"
          >
            Ninguém gosta de depender dos outros para se divertir, não é mesmo?
            Tire sua habilitação hoje, pegue o comando e faça você o seu próprio roteiro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CTAButton
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              label="Quero Tirar Minha Habilitação"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
