import React from 'react';
import { Card } from './ui/card';
import { stats } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-950/30 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Get to know me
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <div className="group">
                <p className="text-slate-200 text-lg leading-relaxed">
                  I'm a passionate Full Stack Developer with over <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">3 years of experience</span> at <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">Tata Consultancy Services</span>, where I've specialized in building scalable web applications and optimizing system performance.
                </p>
              </div>
              <div className="group">
                <p className="text-slate-200 text-lg leading-relaxed">
                  My expertise spans across the <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">MERN stack</span>, cloud technologies, and agile methodologies. I have a proven track record of increasing user engagement by <span className="text-green-400 font-bold group-hover:text-green-300 transition-colors">30%</span> through strategic UI/UX improvements.
                </p>
              </div>
              <div className="group">
                <p className="text-slate-200 text-lg leading-relaxed">
                  I'm passionate about writing clean, efficient code and staying updated with the latest technologies. Currently pursuing my <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">Master's in Computer Applications</span> while continuously expanding my skill set.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                  <div className="relative text-center">
                    <div className="text-5xl md:text-6xl font-black mb-3">
                      <span className="bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-slate-300 text-sm font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
