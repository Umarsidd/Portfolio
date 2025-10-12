import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-950/30 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold uppercase tracking-wider">
              Qualifications
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Academic qualifications and professional certifications that shape my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-950/80 to-violet-950/80 border border-indigo-500/30 rounded-xl">
                  <GraduationCap className="h-7 w-7 text-indigo-400" />
                </div>
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <Card
                    key={edu.id}
                    className="group relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm overflow-hidden"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-violet-600/0 group-hover:from-indigo-600/5 group-hover:to-violet-600/5 transition-all duration-500" />
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex-1 pr-4">
                          {edu.degree}
                        </h4>
                        <span
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wide ${
                            edu.status === 'Completed'
                              ? 'bg-gradient-to-r from-green-950/80 to-emerald-950/80 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10'
                              : 'bg-gradient-to-r from-blue-950/80 to-indigo-950/80 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-lg font-semibold mb-3">
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                          {edu.institution}
                        </span>
                      </p>
                      <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                        {edu.duration}
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-500" />
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-violet-950/80 to-purple-950/80 border border-violet-500/30 rounded-xl">
                  <Award className="h-7 w-7 text-violet-400" />
                </div>
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, idx) => (
                  <Card
                    key={cert.id}
                    className="group relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10 backdrop-blur-sm overflow-hidden"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                    <div className="relative">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-950/80 to-purple-950/80 border border-violet-500/30 rounded-lg mb-3">
                          <Award className="h-4 w-4 text-violet-400" />
                          <span className="text-xs font-bold text-violet-300 uppercase tracking-wide">{cert.year}</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-lg font-semibold">
                        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                          {cert.issuer}
                        </span>
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-all duration-500" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
