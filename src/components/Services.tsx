"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const steps = [
  {
    number: "01",
    title: "Envie seus documentos pelo WhatsApp",
    body: "Você envia seus documentos básicos pelo WhatsApp e nós cuidamos de toda a papelada, taxas e agendamentos junto à Marinha. Zero estresse.",
  },
  {
    number: "02",
    title: "Aulas práticas na Baía de Todos os Santos",
    body: "Aulas práticas com instrutores credenciados e suporte teórico completo para garantir sua aprovação.",
  },
  {
    number: "03",
    title: "Chegue na prova preparado e confiante",
    body: "Com nosso método e 15 anos de experiência, você chega no dia da prova da Marinha totalmente pronto.",
  },
  {
    number: "04",
    title: "Documento emitido. Você está 100% legalizado!",
    body: "Habilitação em mãos. Agora a única dificuldade será escolher o roteiro do fim de semana.",
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="relative w-full min-h-[120vh] flex items-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/222222222222222222.png"
          alt="Casal se divertindo no jet ski"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 md:px-16 pt-36 pb-16 flex justify-end">
        <div className="max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block text-white/60 font-semibold text-sm uppercase tracking-widest mb-2">
              Passo a passo
            </span>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight">
              Veja como é simples conquistar<br />o seu passaporte para o mar
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-3 items-start"
              >
                <span className="font-title text-white/50 font-bold text-base leading-none pt-0.5 flex-shrink-0 w-7">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-title font-bold text-white text-[17px] leading-snug mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
