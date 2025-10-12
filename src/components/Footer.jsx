import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            {/* About Column */}
            <div>
              <h3 className="text-3xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ').map(word => word[0]).join('')}
                </span>
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-base">
                Full Stack Developer passionate about building scalable web applications and delivering exceptional user experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.section}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="group inline-flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-400 transition-colors duration-300 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">📞</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">📍</span>
                  <span>{personalInfo.location}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 mt-10 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-400 text-sm flex items-center gap-2.5">
                © {currentYear} <span className="font-semibold text-slate-300">{personalInfo.name}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and lots of ☕
                </span>
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500 rounded-xl text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Back to Top
                <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
