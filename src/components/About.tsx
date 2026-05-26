"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 md:py-36 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/barretao-profile.jpg"
                alt="Barretão, fundador da Jet Salvador"
                fill
                className="object-cover object-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-2 md:-bottom-6 md:-right-8 bg-white rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#00B8D9] to-[#00A6BF] rounded-xl flex items-center justify-center text-base md:text-lg">
                  🏅
                </div>
                <div>
                  <p className="font-bold text-[#1C1C1C] text-xs md:text-sm leading-tight">Amigo da Marinha</p>
                  <p className="text-[#4B4B4B] text-[10px] md:text-xs">Capitania dos Portos da Bahia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-2"
          >
            <div>
              <span className="inline-block text-[#00B8D9] font-semibold text-sm uppercase tracking-widest mb-3 md:mb-4">
                Aprenda com quem é referência
              </span>
              <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
                Sinônimo de{" "}
                <span className="bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                  excelência no mar.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#4B4B4B] text-base md:text-[17px] leading-relaxed">
              <p>
                A Jet Salvador é o resultado de mais de 15 anos de atuação focada em elevar o padrão de segurança e profissionalismo no mercado náutico baiano. Sob a liderança do nosso fundador,{" "}
                <strong className="text-[#1C1C1C]">Barretão</strong>, construímos um histórico inquestionável de eficiência na Baía de Todos os Santos.
              </p>
              <p>
                O rigor do nosso trabalho rendeu ao fundador o prestigiado título de{" "}
                <strong className="text-[#1C1C1C]">"Amigo da Marinha"</strong>, honraria oficial concedida pela Capitania dos Portos da Bahia. O maior atestado de credibilidade que um profissional do setor pode conquistar.
              </p>
              <p>
                Já ultrapassamos{" "}
                <strong className="text-[#1C1C1C]">500 alunos formados</strong>, mantendo uma taxa de{" "}
                <strong className="text-[#1C1C1C]">95% de aprovação</strong> nos exames oficiais.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[
                { num: 500, prefix: "+", suffix: "",  label: "Alunos formados" },
                { num: 95,  prefix: "",  suffix: "%", label: "Aprovação" },
                { num: 15,  prefix: "",  suffix: "+", label: "Anos de experiência" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-gray-50 rounded-2xl py-4 md:py-5 px-2 md:px-3">
                  <AnimatedNumber
                    value={s.num}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="font-title text-xl md:text-3xl font-bold bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent"
                  />
                  <div className="text-[#4B4B4B] text-[10px] md:text-xs mt-1 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

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
