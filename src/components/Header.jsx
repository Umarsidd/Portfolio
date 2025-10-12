import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group text-2xl font-extrabold relative"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-blue-400 transition-all duration-300">
              MUS
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="group relative px-4 py-2 text-slate-300 hover:text-white transition-colors duration-300 font-medium"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border-0"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-500/50 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="group relative text-slate-300 hover:text-white transition-all duration-300 font-medium text-left py-3 px-4 rounded-lg hover:bg-slate-800/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center">
                  <span className="w-0 h-0.5 bg-blue-500 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {item.label}
                </span>
              </button>
            ))}
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full mt-4 shadow-lg shadow-blue-500/20 border-0"
              onClick={() => {
                window.open(personalInfo.resumeUrl, '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
