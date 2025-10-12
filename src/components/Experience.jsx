import React from 'react';
import { Card } from './ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-green-950/30 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold uppercase tracking-wider">
              Career Path
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              My professional journey and key accomplishments in the tech industry
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-10">
            {experience.map((exp) => (
              <Card
                key={exp.id}
                className="group relative p-10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-teal-600/0 group-hover:from-green-600/5 group-hover:to-teal-600/5 transition-all duration-500" />
                {/* Header */}
                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-gradient-to-br from-green-950/80 to-teal-950/80 border border-green-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-green-300 transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <h4 className="text-2xl font-bold mb-1">
                      <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {exp.company}
                      </span>
                    </h4>
                  </div>
                  <div className="flex flex-col gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="relative space-y-4">
                  <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-teal-400 rounded-full"></span>
                    Key Achievements
                  </h5>
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="group/item flex items-start gap-4 text-slate-200 leading-relaxed hover:text-white transition-colors"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <span className="w-2 h-2 bg-green-400 rounded-sm" />
                        </span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-all duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
