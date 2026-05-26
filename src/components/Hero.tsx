"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/upscalemedia-transformed (1) copiar.jpg"
          alt="Moto aquática na Baía de Todos os Santos"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 pt-28 pb-20 md:pl-24 lg:pl-32">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <span className="text-[#00B8D9] text-xs font-semibold uppercase tracking-[0.2em]">
              Credenciado pela Marinha do Brasil
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-title font-bold leading-[1.04] text-white mb-7"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.25rem)" }}
          >
            Adquira sua habilitação
            <br />
            náutica de forma mais fácil
            <br />
            do que você imagina.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-white/65 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            Com mais de 15 anos de experiência no mercado, oferecemos uma
            formação completa para você assumir o leme com total segurança,
            <br />
            zero dor de cabeça e sem pesar no bolso.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12"
          >
            <CTAButton
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              label="Quero Tirar Minha Habilitação"
            />

          </motion.div>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-0 divide-x divide-white/15"
          >
            {[
              { num: 500, prefix: "+", suffix: "", label: "alunos formados" },
              { num: 95,  prefix: "",  suffix: "%", label: "taxa de aprovação" },
              { num: 15,  prefix: "",  suffix: "+", label: "anos de experiência" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-5 first:pl-0">
                <AnimatedNumber
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-title text-white font-bold text-lg leading-none"
                />
                <span className="text-white/40 text-xs mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
