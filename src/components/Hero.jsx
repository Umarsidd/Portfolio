import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.75s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg shadow-blue-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards] leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {personalInfo.title}
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards] font-light">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 justify-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border-0"
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity rounded-md" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-600 hover:border-blue-500 bg-slate-800/30 hover:bg-slate-800/60 backdrop-blur-sm text-white px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 justify-center opacity-0 animate-[fadeIn_0.6s_ease-out_1.2s_forwards]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-slate-800/40 hover:bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-slate-800/40 hover:bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-4 bg-slate-800/40 hover:bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_0.6s_ease-out_1.4s_forwards]">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
