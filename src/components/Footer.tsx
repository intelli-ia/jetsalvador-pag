"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F0F0F] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-16">

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <h3 className="font-title text-2xl font-bold text-white">
              Jet <span className="text-[#00B8D9]">Salvador</span>
            </h3>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-md">
              Habilitação náutica para Jet Ski e Lancha em Salvador. Mais de 15 anos de experiência, credenciados pela Marinha do Brasil e com 95% de aprovação nos exames oficiais.
            </p>
            <div className="flex gap-3">
              <Link href="https://wa.me/5571991011008" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-colors duration-300 group">
                <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Link>
              <Link href="https://instagram.com/jetsalvadoroficial" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] rounded-xl flex items-center justify-center transition-all duration-300 group">
                <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="tel:+5571991011008"
                className="w-10 h-10 bg-white/5 hover:bg-[#00B8D9] rounded-xl flex items-center justify-center transition-colors duration-300 group">
                <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Habilitações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Habilitações</h4>
            <nav className="space-y-3">
              {["Habilitação Motonauta", "Habilitação Arrais Amador", "Despachante Náutico", "Aulas Práticas na Baía"].map((item) => (
                <Link key={item} href="https://wa.me/5571991011008" target="_blank" rel="noopener noreferrer"
                  className="block text-white/40 hover:text-[#00B8D9] text-[15px] transition-colors duration-300">
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Contato</h4>
            <div className="space-y-3">
              {[
                { href: "https://wa.me/5571991011008", label: "WhatsApp" },
                { href: "https://instagram.com/jetsalvadoroficial", label: "Instagram" },
                { href: "tel:+5571991011008", label: "(71) 99101-1008" },
              ].map(({ href, label }) => (
                <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-white/40 hover:text-[#00B8D9] text-[15px] transition-colors duration-300">
                  {label}
                </Link>
              ))}
              <p className="text-white/40 text-[15px]">Salvador, Bahia</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">© 2025 Jet Salvador. Todos os direitos reservados.</p>
          <p className="text-white/25 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00B8D9] rounded-full" />
            Credenciado pela Marinha do Brasil
          </p>
        </div>

      </div>
    </footer>
  );
}
