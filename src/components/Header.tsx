"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Verifica se está na homepage
  const isHomePage = pathname === "/";

  const links = [
    { label: "Como Funciona", href: "/#processo" },
    { label: "Sobre", href: "/#about" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "FAQ", href: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setScrolled(hero.getBoundingClientRect().bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para determinar as classes do header baseado na página e scroll
  const getHeaderClasses = () => {
    if (isHomePage) {
      return scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg"
        : "bg-transparent pointer-events-none";
    } else {
      // Nas outras páginas: sempre sólido, mas com shadow ao scrollar
      return scrolled
        ? "bg-white shadow-lg"
        : "bg-white shadow-sm";
    }
  };

  // Função para determinar as classes do texto baseado na página e scroll
  const getTextClasses = () => {
    if (isHomePage) {
      // Na homepage: branco no topo, escuro ao scrollar
      return scrolled ? "text-[#1C1C1C]" : "text-white";
    } else {
      // Nas outras páginas: sempre escuro
      return "text-[#1C1C1C]";
    }
  };

  // Função para classes dos links de navegação
  const getLinkClasses = () => {
    if (isHomePage) {
      return scrolled 
        ? "text-[#4B4B4B] hover:text-[#00B8D9]" 
        : "text-white/90 hover:text-white";
    } else {
      return "text-[#4B4B4B] hover:text-[#00B8D9]";
    }
  };

  // Função para classes do botão mobile
  const getMobileButtonClasses = () => {
    if (isHomePage) {
      return scrolled 
        ? "text-[#1C1C1C] hover:bg-gray-100" 
        : "text-white hover:bg-white/10";
    } else {
      return "text-[#1C1C1C] hover:bg-gray-100";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${getHeaderClasses()} ${
        isHomePage && !scrolled ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="container mx-auto px-6 md:px-16">
        <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/jetsalvador_logo.jpeg"
                alt="Logo Jet Salvador"
                width={scrolled ? 36 : 44}
                height={scrolled ? 36 : 44}
                className="rounded-full border-2 border-[#00B8D9] shadow-lg transition-all duration-300 group-hover:scale-105"
              />
              {/* Anel decorativo */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00B8D9] opacity-0 scale-110 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300" />
            </div>
            <span className={`font-title font-bold tracking-wide transition-all duration-500 ease-out ${
              getTextClasses()
            } ${scrolled ? "text-lg" : "text-xl"}`}>
              Jet Salvador
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-all duration-500 ease-out group ${getLinkClasses()}`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B8D9] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-all duration-500 ease-out ${getMobileButtonClasses()}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col gap-6">
            {/* Mobile Links */}
            <nav className="flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-[#1C1C1C] font-medium py-2 hover:text-[#00B8D9] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
}