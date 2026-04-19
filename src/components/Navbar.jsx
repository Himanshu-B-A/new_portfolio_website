import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkClass =
    'rounded-sm px-2 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white lg:px-3';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background,border-color] duration-300 ${
        isScrolled ? 'border-white/10 bg-black/95 backdrop-blur-md' : 'border-transparent bg-black/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-10">
        <motion.a
          href="#home"
          className="flex shrink-0 items-center gap-2.5"
          whileHover={{ opacity: 0.92 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-[#e50914] font-display text-lg font-black leading-none text-white sm:h-9 sm:w-9">
            H
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            Himanshu B A
          </span>
        </motion.a>

        <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
          <div
            className="flex flex-wrap items-center justify-center gap-x-0.5 lg:gap-x-1"
            role="navigation"
            aria-label="Main"
          >
            <a href="#home" className={linkClass}>
              Home
            </a>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={linkClass}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden shrink-0 md:block">
          <a href="#contact" className="btn-cta px-6 py-2.5 text-[10px] sm:text-xs">
            Let&apos;s talk
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a href="#contact" className="btn-cta px-4 py-2 text-[9px]">
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded p-2 text-neutral-300 hover:bg-white/5 hover:text-white"
            aria-expanded={isMobileMenuOpen}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-white/10 bg-black md:hidden"
        >
          <div className="space-y-0.5 px-4 py-4">
            <a
              href="#home"
              className="block rounded px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
